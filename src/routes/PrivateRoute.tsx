import { useState } from "react";
import { useNavigate, RouteProps, Outlet, Navigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { fetchGetLoginCheck, onLoginCheckSuccess } from '../api';
import LoginChecking from "./LoginChecking";


interface IPrivateRouteProps {
    opposite : boolean
}

export default function PrivateRoute({opposite = false} : IPrivateRouteProps) {
    const navigate = useNavigate();

    const [isLogin,setIsLogin] = useState(false);
    const {data : isLoginStatusCode , isLoading : isLoginLoading} = useQuery('login-check',fetchGetLoginCheck,{retry:0, onSuccess : (statusCode) => {onLoginCheckSuccess(statusCode as number,setIsLogin)}})


    if (isLoginLoading){
        return <LoginChecking/>
    } else {
        if (!opposite){
            if (isLogin){
                return <Outlet/>
            } else {
                alert('로그인이 필요합니다.')
                return <Navigate to="/auth/login"/>
            }
        } else {
            if (isLogin){
                alert('로그아웃시만 접근 할수 있는 경로입니다.')
                return <Navigate to="/home"/>
            } else {
                return <Outlet/>
            }
        }
    }
 }

