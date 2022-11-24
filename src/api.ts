import axios from "axios";
import { QueryStatus } from "react-query";
import { IUserDataFromBe, IuserData, TgoogleId } from "./atoms";

// const PROXY = window.location.hostname === 'localhost' ? '' : '/proxy';

export function fetchGetLoginCheck(){
    return axios.get<{loggedIn:Boolean}>(`/api/login-check`,{withCredentials:true}).then(res => res.data)
}


export function fetchPostUpdateCurrentUserInfoOnBE(userData : IuserData){
    return axios.post<QueryStatus>(`/api/update-user-info`,userData,{withCredentials:true}).then(res => res.data)
}


export function fetchGetGoogleId(){
    return axios.get<{googleId:string}>(`/api/get-google-id`,{withCredentials:true}).then(res => res.data)
}

export function fetchGetCurrentUserData(){
    return axios.get<IUserDataFromBe>(`/api/get-current-user-data`,{withCredentials:true}).then(res => res.data)
}
export function fetchGetMatch(){
    return axios.get<TgoogleId[]>(`/api/match`,{withCredentials:true}).then(res => res.data)

}
export function fetchGetSaveYoutubeApi(){
    return axios.get<QueryStatus>(`/api/youtube/save-youtube-data`,{withCredentials:true}).then(res => res.data)
}

export function fetchGetallUserDatas(){
    return axios.get<IUserDataFromBe[]>(`/api/get-all-user-datas`,{withCredentials:true}).then(res => res.data)
};

export function fetchGetLogout(){
    return axios.get<QueryStatus>(`/api/logout`,{withCredentials:true}).then(res => res.status)
}