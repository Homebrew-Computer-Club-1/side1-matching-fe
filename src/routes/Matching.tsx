import { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil"
import { fetchPostInsertCurrentUserDataOnBE, fetchGetGoogleId, fetchGetCurrentUserData,fetchGetMatching } from "../api";
import {QueryStatus, useQuery} from "react-query";
import { ImatchingResult, userInfoDataAtom, currentUserDataAtom, allUserDatasAtom, mlResultAtom, IuserData } from "../atoms";
import { useNavigate } from "react-router-dom";


export default function Matching(){
    const [matchingFinished,setMatchingFinished] = useState(false);
    const userInfoData = useRecoilValue(userInfoDataAtom);
    const navigate = useNavigate();
    const [currentUserData,setCurrentUserData] = useRecoilState(currentUserDataAtom);
    const [allUserDatas,setAllUserDatas] = useRecoilState(allUserDatasAtom);
    const [mlResult,setMlResult] = useRecoilState(mlResultAtom);

        // 1. 회원가입 하는 유저
        const onGoogleIdSuccess = (data : {googleId : string}) => {
            const newData = {googleId : data.googleId, ...userInfoData};
            setCurrentUserData(current => {
                return newData
            });
        }
        const onGoogleIdError = () => {
            console.log("failed to get googleId from server")
        }
        const {isLoading : googleIdLoading , data : googleId} = useQuery<{googleId : string}>("googleId",fetchGetGoogleId,{onSuccess : onGoogleIdSuccess,onError: onGoogleIdError,enabled:Boolean(userInfoData.age)});
       
            // 1.5. insert-userData on BE
            const onInsertCurrentUserDataOnBESuccess = () => {
            }
            const onInsertCurrentUserDataOnBEError = () => {   
            }

            const {isLoading : InsertCurrentUserDataOnBELoading , data : InsertCurrentUserDataOnServerSuccess} = useQuery<QueryStatus>("InsertCurrentUserData",()=> fetchPostInsertCurrentUserDataOnBE(currentUserData),{onSuccess : onInsertCurrentUserDataOnBESuccess,onError: onInsertCurrentUserDataOnBEError,enabled:Boolean(currentUserData.googleId&&userInfoData.age)});

        // 1. 로그인 하는 유저
        const onCurrentUserDataSuccess = (data : IuserData) => {
            setCurrentUserData(current => data);
            console.log(data)
            console.log(currentUserData)
        }
        const onCurrentUserDataError = () => {
            console.log("failed to get currentUserData from server")
        }
        const {isLoading : currentUserDataLoading, data : currentUserData_BE} = useQuery<IuserData>("currentUserData_BE",fetchGetCurrentUserData,{onSuccess : onCurrentUserDataSuccess,enabled:Boolean(!userInfoData.age)})

        // 매칭
        const onMatchingSuccess = (data : ImatchingResult) => {
            setMatchingFinished(true);
            setAllUserDatas(data.allUserDatas);
            setMlResult(data.mlResult);
            navigate('/home')
        }
        const {isLoading : matching , data: matchingResult} = useQuery<ImatchingResult>("matchingResult",fetchGetMatching,{onSuccess : onMatchingSuccess , enabled:!InsertCurrentUserDataOnBELoading||!currentUserDataLoading})


    return (
        <>
            {!matchingFinished ? <h1>Matching....</h1> : <h1>Complete!</h1>}
        </>
    );
}