import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { fetchPostMatching, fetchGetGoogleId } from "../api";
import {useQuery} from "react-query";
import { IuserData, userInfoDataAtom } from "../atoms";
import axios from "axios";


export default function Matching(){
    const [matching,setMatching] = useState(true);
    const userInfoData = useRecoilValue(userInfoDataAtom);
    const onSuccess = async () => {
        const userData : IuserData = {googleId : googleId as any, ...userInfoData};
        const result = await fetchPostMatching(userData);
        setMatching(false);
        console.log(result) // 이부분 useQuery로 예쁘게
    }
    const {isLoading : googleIdLoading , data : googleId} = useQuery<{googleId : string}>("googleId",()=>fetchGetGoogleId(),{onSuccess});
    
    return (
        <>
            {matching ? <h1>Matching....</h1> : <h1>Complete!</h1>}
        </>
    );
}