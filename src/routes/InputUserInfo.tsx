import { Outlet, useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userInfoDataAtom } from "../atoms";




export default function InputUserInfo(){
    const {inputId} = useParams();
    const [userInfoData,setUserInfoData] = useRecoilState(userInfoDataAtom);
    console.log(userInfoData);
    return (
        <Outlet></Outlet>
    );
} 