import axios from "axios";
import { QueryStatus } from "react-query";
import { IUserDataFromBe, IuserData, TgoogleId } from "./atoms";

const PROXY = window.location.hostname === 'localhost' ? '' : '/proxy';

export function fetchGetLoginCheck(){
    return axios.get<{loggedIn:Boolean}>(`${PROXY}/login-check`,{withCredentials:true}).then(res => res.data)
}


export function fetchPostUpdateCurrentUserInfoOnBE(userData : IuserData){
    return axios.post<QueryStatus>(`${PROXY}/update-user-info`,userData,{withCredentials:true}).then(res => res.data)
}


export function fetchGetGoogleId(){
    return axios.get<{googleId:string}>(`${PROXY}/get-google-id`,{withCredentials:true}).then(res => res.data)
}

export function fetchGetCurrentUserData(){
    return axios.get<IUserDataFromBe>(`${PROXY}/get-current-user-data`,{withCredentials:true}).then(res => res.data)
}
export function fetchGetMatch(){
    return axios.get<TgoogleId[]>(`${PROXY}/match`,{withCredentials:true}).then(res => res.data)

}
export function fetchGetSaveYoutubeApi(){
    return axios.get<QueryStatus>(`${PROXY}/youtube/save-youtube-data`,{withCredentials:true}).then(res => res.data)
}

export function fetchGetallUserDatas(){
    return axios.get<IUserDataFromBe[]>(`${PROXY}/get-all-user-datas`,{withCredentials:true}).then(res => res.data)
};

export function fetchGetLogout(){
    return axios.get<QueryStatus>(`${PROXY}/logout`,{withCredentials:true}).then(res => res.status)
}