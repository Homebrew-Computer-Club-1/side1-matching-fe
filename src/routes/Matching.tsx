import { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil"
import { fetchPostUpdateCurrentUserInfoOnBE, fetchGetGoogleId, fetchGetCurrentUserData,fetchGetMatch, fetchGetSaveYoutubeApi, fetchGetallUserDatas } from "../api";
import {QueryStatus, useQuery} from "react-query";
import { userInfoDataAtom, currentUserDataAtom, allUserDatasAtom, mlResultAtom, IuserData, IUserDataFromBe, TgoogleId } from "../atoms";
import { useNavigate } from "react-router-dom";


export default function Matching(){
    const [matchingFinished,setMatchingFinished] = useState(false);
    const userInfoData = useRecoilValue(userInfoDataAtom);
    const navigate = useNavigate();
    const [currentUserData,setCurrentUserData] = useRecoilState(currentUserDataAtom);
    const [allUserDatas,setAllUserDatas] = useRecoilState(allUserDatasAtom);
    const [mlResult,setMlResult] = useRecoilState(mlResultAtom);
    const [youtubeApiFin,setYoutubeApiFin] = useState(false);
    const [getAllUserDatasFromBEFin,setGetAllUserDatasFromBEFin] = useState(false);


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
        const onCurrentUserDataSuccess = (data : IUserDataFromBe) => {
            console.log("TLqkf")
            setCurrentUserData({googleId:data.google_id,name:data.name,age:data.age});
        }
        const onCurrentUserDataError = () => {
            console.log("failed to get currentUserData from server")
        }
        const {data : currentUserData_BE} = useQuery<{google_id:string,name:string,age:number}>("currentUserData_BE",fetchGetCurrentUserData,{onSuccess : onCurrentUserDataSuccess,enabled:Boolean(!userInfoData.age)})

        // youtube_api 갱신
        const onSaveYoutubeApiSuccess = () => {
            console.log("YOUTUBE FIN")
            setYoutubeApiFin(true);
        }

        const {data: youtube_apiResult} = useQuery<QueryStatus>("youtube_apiResult",fetchGetSaveYoutubeApi,{onSuccess:onSaveYoutubeApiSuccess,enabled:Boolean(googleId||currentUserData_BE)})

        // 전체 유저 데이터 받아오기
        const onGetAllUserDatasSuccess = (data: IUserDataFromBe[]) => {
            // google_id를 googleId 로 변경
            const newAllUserDatas = data.map(userDataFromBE => {
                const userDataOnFE = {
                    googleId : userDataFromBE.google_id,
                    name : userDataFromBE.name,
                    age : userDataFromBE.age
                }
                return userDataOnFE
            })
            setAllUserDatas(newAllUserDatas);
            setGetAllUserDatasFromBEFin(true);
        }

        const {data:allUserDatasFromBE} = useQuery<IUserDataFromBe[]>("allUserDatasFromBE",fetchGetallUserDatas,{onSuccess:onGetAllUserDatasSuccess,enabled:youtubeApiFin})

        // 매칭
        const onMatchingSuccess = (data : TgoogleId[]) => {
            setMlResult(data);
            setMatchingFinished(true);
            navigate('/home')
        }
        const {isLoading : matching , data: matchingResult} = useQuery<TgoogleId[]>("matchingResult",fetchGetMatch,{onSuccess : onMatchingSuccess , enabled:getAllUserDatasFromBEFin})

    return (
        <>
            {!matchingFinished ? <h1>Matching....</h1> : <h1>Complete!</h1>}
        </>
    );
}