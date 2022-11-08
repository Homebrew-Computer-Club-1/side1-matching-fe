import axios from "axios";
import { QueryStatus } from "react-query";
import { IuserData } from "./atoms";
import { ImatchingResult } from "./atoms";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;


export function fetchPostInsertCurrentUserDataOnBE(userData : IuserData){
    return axios.post<QueryStatus>(`/insert-userData`,userData).then(res => res.data)
}

export function fetchGetGoogleId(){
    return axios.get<{googleId:string}>(`/get-googleId`,{withCredentials:true}).then(res => res.data)
}

export function fetchGetCurrentUserData(){
    return axios.get<IuserData>(`/get-currentUserData`,{withCredentials:true}).then(res => res.data)
}
export function fetchGetMatching(){
    return axios.get<ImatchingResult>(`/match`,{withCredentials:true}).then(res => res.data)

}
