import axios from "axios";
import { QueryStatus } from "react-query";
import { IUserDataFromBe, IuserData, TgoogleId } from "./atoms";


export function fetchGetLoginCheck(){
    return axios.get<{loggedIn:Boolean}>(`/login-check`,{withCredentials:true}).then(res => res.data)
}


export function fetchPostUpdateCurrentUserInfoOnBE(userData : IuserData){
    return axios.post<QueryStatus>(`/update-user-info`,userData,{withCredentials:true}).then(res => res.data)
}


export function fetchGetGoogleId(){
    return axios.get<{googleId:string}>(`/get-google-id`,{withCredentials:true}).then(res => res.data)
}

export function fetchGetCurrentUserData(){
    return axios.get<IUserDataFromBe>(`/get-current-user-data`,{withCredentials:true}).then(res => res.data)
}
export function fetchGetMatch(){
    return axios.get<TgoogleId[]>(`/match`,{withCredentials:true}).then(res => res.data)

}
export function fetchGetSaveYoutubeApi(){
    return axios.get<QueryStatus>(`/youtube/save-youtube-data`,{withCredentials:true}).then(res => res.data)
}

export function fetchGetallUserDatas(){
    return axios.get<IUserDataFromBe[]>(`/get-all-user-datas`,{withCredentials:true}).then(res => res.data)
};

export function fetchGetLogout(){
    return axios.get<QueryStatus>(`/logout`,{withCredentials:true}).then(res => res.status)
}