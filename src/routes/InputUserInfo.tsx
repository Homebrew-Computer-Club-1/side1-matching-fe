import { Outlet, useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userInfoDataAtom } from "../atoms";

export default function InputUserInfo(){
    const [userInfoData,setUserInfoData] = useRecoilState(userInfoDataAtom);
    return (
        <Outlet></Outlet>
    );
}


