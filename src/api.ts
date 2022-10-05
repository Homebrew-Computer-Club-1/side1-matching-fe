import axios from "axios";
import { IuserData } from "./atoms";
import { ImatchingResult } from "./atoms";


export function fetchPostMatching(userData : IuserData){
    return axios.post<ImatchingResult>(`/insertUserData`,userData).then(res => res.data)
}

export function fetchGetGoogleId(){
    return axios.get<{googleId:string}>(`/getGoogleId`,{withCredentials:true}).then(res => res.data)
}
