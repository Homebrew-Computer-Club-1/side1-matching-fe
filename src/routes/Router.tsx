import { useState } from "react";
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
import { useQuery } from 'react-query';
import { fetchGetLoginCheck, onLoginCheckSuccess } from '../api';
import { useNavigate } from "react-router-dom";
import NotFound from "./NotFound";


export default function Router(){
    const [isLogin,setIsLogin] = useState(false);
    const {data:loginCheckData} = useQuery('login-check',fetchGetLoginCheck,{retry:0, onSuccess : (statusCode) => {onLoginCheckSuccess(statusCode as number,setIsLogin)}})

    const location = useLocation();
    const {input : defaultInputs} = defaultUserInfos;

    return (
        <Routes location={location}>
            <Route path="/auth/login" element={<PrivateRoute isLogin = {isLogin} opposite = {true} Component = {<LoginPage/>}/>}></Route>
            <Route path="/auth/inputUserInfo" element={<PrivateRoute isLogin = {isLogin} opposite = {false} Component = {<InputUserInfo/>}/>}>
                {
                    defaultInputs.map((defaultInput,index) =>
                        <Route 
                            key = {index}
                            path = {`${defaultInput.infoName}`}
                            element={
                                <PrivateRoute isLogin = {isLogin} opposite = {false} Component = {<InputTemplate validOptions = {defaultInput.vaildOptions} nextInfo = {defaultInputs[index+1] ? defaultInputs[index+1]?.infoName : "matching"} infoName = {defaultInput.infoName} headerMessage = {defaultInput.headerMessage}/>}/>
                            }
                        ></Route>
                    )
                }
            </Route>
            <Route path="/matching" element={<PrivateRoute isLogin = {isLogin} opposite = {false} Component = {<Matching/>}/>}></Route>
            <Route path="/home" element={<PrivateRoute isLogin = {isLogin} opposite = {false} Component = {<Home/>}/>}></Route>
            <Route path="/mypage" element={<PrivateRoute isLogin = {isLogin} opposite = {false} Component = {<MyPage/>}/>}></Route>
            <Route path="/user-detail/:googleId" element={<PrivateRoute isLogin = {isLogin} opposite = {false} Component = {<UserDetail/>}/>}></Route>
            <Route path="/*" element={<NotFound/>}></Route>
        </Routes>
    );
}