import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { fetchPostMatching, fetchGetGoogleId } from "../api";
import {useQuery} from "react-query";
import { IuserData, ImatchingResult, userInfoDataAtom, currentUserDataAtom } from "../atoms";
import { useNavigate } from "react-router-dom";


export default function Matching(){
    const [matchingFinished,setMatchingFinished] = useState(false);
    const userInfoData = useRecoilValue(userInfoDataAtom);
    const navigate = useNavigate();
    const [currentUserData,setCurrentUserData] = useRecoilState(currentUserDataAtom);

    const onGoogleIdSuccess = (data : {googleId : string}) => {
        setCurrentUserData({googleId : data.googleId, ...userInfoData})
        console.log(userInfoData)
    }
    const onGoogleIdError  = () => {
        console.log("failed")
    }

    const onMatchingSuccess = () => {
        setMatchingFinished(true);
        navigate('/home')
    }
    const {isLoading : googleIdLoading , data : googleId} = useQuery<{googleId : string}>("googleId",fetchGetGoogleId,{onSuccess : onGoogleIdSuccess,onError: onGoogleIdError});
    const {isLoading : matching , data: matchingResult} = useQuery<ImatchingResult>("matchingResult",()=> fetchPostMatching(currentUserData),{onSuccess : onMatchingSuccess , enabled:!googleIdLoading})

    
    // setMatching(false);
    // navigate('/home')

    return (
        <>
            {!matchingFinished ? <h1>Matching....</h1> : <h1>Complete!</h1>}
        </>
    );
}