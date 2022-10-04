import axios from "axios";
import { IuserData } from "./atoms";

interface ImatchingResult {
    allOtherUsers : IuserData[];
    mlResult : [string];
}

export const SERVER_URL = `http://localhost:8080`;

export function fetchPostMatching(userData : IuserData){
    return axios.post<ImatchingResult>(`${SERVER_URL}/`,userData).then(res => res.data)
}

export function fetchGetGoogleId(){
    return axios.get(`${SERVER_URL}/get-google-id`).then(res => res.data)
}
