import axios from "axios";
import { QueryStatus } from "react-query";
import { IcurrentUserDataFromBe, IuserData } from "./atoms";
import { ImatchingResult } from "./atoms";


export function fetchPostUpdateCurrentUserInfoOnBE(userData : IuserData){
    return axios.post<QueryStatus>(`/update-user-info`,userData,{withCredentials:true}).then(res => res.data)
}

export function fetchGetGoogleId(){
    return axios.get<{googleId:string}>(`/get-google-id`,{withCredentials:true}).then(res => res.data)
}

export function fetchGetCurrentUserData(){
    return axios.get<IcurrentUserDataFromBe>(`/get-current-user-data`,{withCredentials:true}).then(res => res.data)
}
export function fetchGetMatching(){
    return axios.get<ImatchingResult>(`/match`,{withCredentials:true}).then(res => res.data)

}
