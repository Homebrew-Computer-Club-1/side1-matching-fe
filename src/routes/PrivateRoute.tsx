import React, { ReactComponentElement } from 'react';
 import { Navigate } from 'react-router-dom';

interface IPrivateRoute {
    isLogin : boolean;
    opposite : boolean;
    component: any;
}

 function PrivateRoute({ isLogin, opposite, component: Component }:IPrivateRoute) {
    console.log(isLogin,opposite)
    if (!opposite){
        return isLogin ? Component : <Navigate to='/auth/login'/>
    } else {
        return isLogin ? <Navigate to='/home'/> : Component
    }
 }

 export default PrivateRoute 