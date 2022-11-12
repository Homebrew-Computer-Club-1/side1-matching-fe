import axios from "axios";
import { QueryStatus } from "react-query";
import { IuserData } from "./atoms";
import { ImatchingResult } from "./atoms";

const instance = axios.create({
    baseURL: `${process.env.REACT_APP_SERVER_URL}`,
  });




export function fetchPostInsertCurrentUserDataOnBE(userData : IuserData){
    return instance.post<QueryStatus>(`/api/insert-userData`,userData).then(res => res.data)
}

export function fetchGetGoogleId(){
    return instance.get<{googleId:string}>(`/api/get-googleId`).then(res => res.data)
}

export function fetchGetCurrentUserData(){
    return instance.get<IuserData>(`/api/get-currentUserData`).then(res => res.data)
}
export function fetchGetMatching(){
    return instance.get<ImatchingResult>(`/api/match`).then(res => res.data)

}
