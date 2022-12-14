import { Routes, Route, useLocation } from "react-router-dom"
import LoginPage from "./LoginPage";
import InputUserInfo from "./InputUserInfo";
import './transitionGroup.css'
import Matching from "./Matching";
import Home from "./Home";
import MyPage from "./MyPage";
import { UserDetail } from "./UserDetail";
import { defaultUserInfos } from "../allUserInfo";
import {InputTemplate} from "../components/InputUserInfo/InputTemplates";
import PrivateRoute from "./PrivateRoute";
import { useRecoilValue } from "recoil";
import NotFound from "./NotFound";


export default function Router(){

    const location = useLocation();
    const {input : defaultInputs} = defaultUserInfos;

    return (
        <Routes location={location}>
            <Route element={<PrivateRoute opposite={true}/>}>
                <Route path="/auth/login" element={<LoginPage/>}></Route>
            </Route>
            <Route path="/auth/inputUserInfo">
                {
                    defaultInputs.map((defaultInput,index) =>
                            <Route 
                                key = {index}
                                element={
                                    <PrivateRoute opposite={false}/> 
                                }   
                            >
                                <Route
                                    path = {`${defaultInput.infoName}`}
                                    element = {<InputTemplate validOptions = {defaultInput.vaildOptions} nextInfo = {defaultInputs[index+1] ? defaultInputs[index+1]?.infoName : "matching"} infoName = {defaultInput.infoName} headerMessage = {defaultInput.headerMessage}/>}
                                ></Route>    
                            </Route>
                    )
                }
            </Route>
            <Route element={<PrivateRoute opposite={false}/>}>
                <Route path="/matching" element={<Matching/>}></Route>
            </Route>
            <Route element={<PrivateRoute opposite={false}/>}>
                <Route path="/home" element={<Home/>}></Route>
            </Route>
            <Route element={<PrivateRoute opposite={false}/>}>
                <Route path="/mypage" element={<MyPage/>}></Route>
            </Route>
            <Route element={<PrivateRoute opposite={false}/>}>
                <Route path="/user-detail/:googleId" element = {<UserDetail/>}></Route>
            </Route>
            <Route path="/*" element={<NotFound/>}></Route>
        </Routes>
    );
}