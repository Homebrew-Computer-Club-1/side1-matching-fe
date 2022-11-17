import { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil"
import { fetchPostUpdateCurrentUserInfoOnBE, fetchGetGoogleId, fetchGetCurrentUserData,fetchGetMatch, fetchGetSaveYoutubeApi, fetchGetallUserDatas } from "../api";
import {QueryStatus, useQuery} from "react-query";
import { userInfoDataAtom, currentUserDataAtom, allUserDatasAtom, mlResultAtom, IuserData, IUserDataFromBe, TgoogleId } from "../atoms";
import { useNavigate } from "react-router-dom";
import { Spinner } from "../components/Matching/Spinner";
import { MatchFinished } from "../components/Matching/MatchFinished";

export default function Matching(){
    // matching state
    const [getGoogleIdFin,setGetGoogleIdFin] = useState(false);
    const [updateCurrentUserInfoOnBEFin,setUpdateCurrentUserInfoOnBEFin] = useState(false);
    const [getCurrentUserDataFin,setGetCurrentUserDataFin] = useState(false);
    const [youtubeApiFin,setYoutubeApiFin] = useState(false);
    const [getAllUserDatasFromBEFin,setGetAllUserDatasFromBEFin] = useState(false);
    const [matchFin,setMatchFin] = useState(false);

    const userInfoData = useRecoilValue(userInfoDataAtom);
    const [currentUserData,setCurrentUserData] = useRecoilState(currentUserDataAtom);
    const [allUserDatas,setAllUserDatas] = useRecoilState(allUserDatasAtom);
    const [mlResult,setMlResult] = useRecoilState(mlResultAtom);

    //1. 회원가입 / 로그인 처리
        // 1) 회원가입 하는 유저
            // (1) googleID 받아서 -> setCurrentUSerData
            const onGoogleIdSuccess = (data : {googleId : string}) => {
                const newData = {googleId : data.googleId, ...userInfoData};
                setCurrentUserData(current => {
                    return newData
                });
                setGetGoogleIdFin(true);
                console.log('GetGoogleIdFin',data)
            }
            const onGoogleIdError = () => {
                console.log("failed to get googleId from server")
            }
            const {data : googleId} = useQuery<{googleId : string}>("googleId",fetchGetGoogleId,{onSuccess : onGoogleIdSuccess,onError: onGoogleIdError,enabled:Boolean(userInfoData.age)});
        
            
            // (2) update-user-info on BE
            const onUpdateCurrentUserInfoOnBESuccess = () => {
                setUpdateCurrentUserInfoOnBEFin(true);
                console.log('UpdateCurrentUserInfoOnBEFin');
            }
            const onUpdateCurrentUserInfoOnBEError = () => {   
            }

            const {data : InsertCurrentUserInfoOnBEResult} = useQuery<QueryStatus>("InsertCurrentUserData",()=> fetchPostUpdateCurrentUserInfoOnBE(currentUserData),{onSuccess : onUpdateCurrentUserInfoOnBESuccess,onError: onUpdateCurrentUserInfoOnBEError,enabled:getGoogleIdFin});

        // 2) 로그인 하는 유저
        const onGetCurrentUserDataSuccess = (data : IUserDataFromBe) => {
            setCurrentUserData({googleId:data.google_id,name:data.name,age:data.age});
            setGetCurrentUserDataFin(true);
            console.log('GetCurrentUserDataFin',data)
        }
        const onGetCurrentUserDataError = () => {
            console.log("failed to get currentUserData from server")
        }
        const {data : currentUserData_BE} = useQuery<{google_id:string,name:string,age:number}>("currentUserData_BE",fetchGetCurrentUserData,{onSuccess : onGetCurrentUserDataSuccess,onError:onGetCurrentUserDataError,enabled:Boolean(!userInfoData.age)})



    // 2. youtube_api 갱신
    const onSaveYoutubeApiSuccess = () => {
        console.log("YOUTUBE FIN")
        setYoutubeApiFin(true);
    }

    const {data: youtube_apiResult} = useQuery<QueryStatus>("youtube_apiResult",fetchGetSaveYoutubeApi,{onSuccess:onSaveYoutubeApiSuccess,enabled:Boolean(updateCurrentUserInfoOnBEFin||getCurrentUserDataFin)})

    // 3. allUserDatas 받아오기
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
        console.log('GetAllUserDatasFromBEFin',data)
    }

    const {data:allUserDatasFromBE} = useQuery<IUserDataFromBe[]>("allUserDatasFromBE",fetchGetallUserDatas,{onSuccess:onGetAllUserDatasSuccess,enabled:youtubeApiFin})

    // 4. 매칭
    const onMatchingSuccess = (data : TgoogleId[]) => {
        setMlResult(data);
        setMatchFin(true);
        setTimeout(function(){
        },1000)
    }
    const {data: matchingResult} = useQuery<TgoogleId[]>("matchingResult",fetchGetMatch,{onSuccess : onMatchingSuccess , enabled:getAllUserDatasFromBEFin})

    return (
        <>
            {!youtubeApiFin ? <><h1>사용자의 유튜브 데이터를 가져오는 중... <Spinner/></h1></> :
             !matchFin ? <h1>매칭 하는 중...</h1> : <MatchFinished/>
            }
        </>
    );
}