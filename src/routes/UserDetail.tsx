import { useParams } from "react-router-dom"
import { useRecoilValue } from "recoil";
import { allUserDatasAtom } from "../atoms";
import { NavBar } from "../components/NavBar";

export function UserDetail(){
    const {googleId} = useParams();

    const allUserDatas = useRecoilValue(allUserDatasAtom);
    const userData = allUserDatas.find(userData => userData.googleId === googleId);

    return (
        <>
            <h1>user detail page</h1>
            <p>user id : {userData?.googleId}</p>
            <p>user name : {userData?.name}</p>
            <p>user age : {userData?.age}</p>
            <NavBar/>
        </>
    )
}