import axios from "axios";
import { IuserData } from "./atoms";
import { ImatchingResult } from "./atoms";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;


export function fetchPostMatching(userData : IuserData){
    return axios.post<ImatchingResult>(`/insert-userData`,userData).then(res => res.data)
}

export function fetchGetGoogleId(){
    return axios.get<{googleId:string}>(`/get-googleId`,{withCredentials:true}).then(res => res.data)
}
