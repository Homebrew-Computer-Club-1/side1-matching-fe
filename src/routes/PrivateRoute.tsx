import { Navigate, useNavigate } from 'react-router-dom';


interface IPrivateRoute {
    isLogin : boolean;
    opposite : boolean;
    Component: any;
}

 export default function PrivateRoute({ isLogin, opposite, Component}:IPrivateRoute) {
    const navigate = useNavigate();
    if (!opposite){
        if (isLogin){
            return Component
        } else {
            alert('로그인이 필요합니다.')
            navigate('/auth/login')
        }
    } else {
        if (isLogin){
            alert('로그아웃시만 접근 할수 있는 경로입니다.')
            navigate('/home')
        } else {
            return Component
        }
    }
 }

