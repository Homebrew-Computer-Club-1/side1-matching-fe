import { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil"
import { fetchPostUpdateCurrentUserInfoOnBE, fetchGetGoogleId, fetchGetCurrentUserData,fetchGetMatching } from "../api";
import {QueryStatus, useQuery} from "react-query";
import { ImatchingResult, userInfoDataAtom, currentUserDataAtom, allUserDatasAtom, mlResultAtom, IuserData, IcurrentUserDataFromBe } from "../atoms";
import { useNavigate } from "react-router-dom";


export default function Matching(){
    const [matchingFinished,setMatchingFinished] = useState(false);
    const userInfoData = useRecoilValue(userInfoDataAtom);
    const navigate = useNavigate();
    const [currentUserData,setCurrentUserData] = useRecoilState(currentUserDataAtom);
    const [allUserDatas,setAllUserDatas] = useRecoilState(allUserDatasAtom);
    const [mlResult,setMlResult] = useRecoilState(mlResultAtom);

        // 1. 회원가입 하는 유저
            // 1) googleID 받아서 -> setCurrentUSerData
            const onGoogleIdSuccess = (data : {googleId : string}) => {
                const newData = {googleId : data.googleId, ...userInfoData};
                console.log("newData",newData)
                setCurrentUserData(current => {
                    return newData
                });
            }
            const onGoogleIdError = () => {
                console.log("failed to get googleId from server")
            }
            const {data : googleId} = useQuery<{googleId : string}>("googleId",fetchGetGoogleId,{onSuccess : onGoogleIdSuccess,onError: onGoogleIdError,enabled:Boolean(userInfoData.age)});
        
            
            // 2) update-user-info on BE
            const onUpdateCurrentUserInfoOnBESuccess = () => {
                console.log("1-2)")
            }
            const onUpdateCurrentUserInfoOnBEError = () => {   
            }

            const {data : InsertCurrentUserDataOnServerSuccess} = useQuery<QueryStatus>("InsertCurrentUserData",()=> fetchPostUpdateCurrentUserInfoOnBE(currentUserData),{onSuccess : onUpdateCurrentUserInfoOnBESuccess,onError: onUpdateCurrentUserInfoOnBEError,enabled:Boolean(googleId&&userInfoData.age)});
        // 2. 로그인 하는 유저
        const onCurrentUserDataSuccess = (data : IcurrentUserDataFromBe) => {
            console.log("TLqkf")
            setCurrentUserData({googleId:data.google_id,name:data.name,age:data.age});
        }
        const onCurrentUserDataError = () => {
            console.log("failed to get currentUserData from server")
        }
        const {isLoading : currentUserDataLoading, data : currentUserData_BE} = useQuery<{google_id:string,name:string,age:number}>("currentUserData_BE",fetchGetCurrentUserData,{onSuccess : onCurrentUserDataSuccess,enabled:Boolean(!userInfoData.age)})

        // 매칭
        const onMatchingSuccess = (data : ImatchingResult) => {
            setMatchingFinished(true);
            setAllUserDatas(data.allUserDatas);
            setMlResult(data.mlResult);
            navigate('/home')
        }
        const {isLoading : matching , data: matchingResult} = useQuery<ImatchingResult>("matchingResult",fetchGetMatching,{onSuccess : onMatchingSuccess , enabled:Boolean(googleId||currentUserData_BE)})


    return (
        <>
            {!matchingFinished ? <h1>Matching....</h1> : <h1>Complete!</h1>}
        </>
    );
}