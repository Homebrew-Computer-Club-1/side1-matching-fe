import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import LoginPage from "./LoginPage";
import InputUserInfo from "./InputUserInfo";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import './transitionGroup.css'
import Matching from "./Matching";
import Home from "./Home";
import MyPage from "./MyPage";
import { UserDetail } from "./UserDetail";
import { defaultUserInfos } from "../allUserInfo";
import {InputTemplate} from "../components/InputUserInfo/InputTemplates";

export default function Router(){
    const location = useLocation();
    const {input : defaultInputs} = defaultUserInfos;
    
    return (
        // <TransitionGroup className="transitions-wrapper">
        //     <CSSTransition
        //         key={location.pathname}
        //         classNames={"right"}
        //         timeout={500}
        //     >
                <Routes location={location}>
                    <Route path="/auth/login" element={<LoginPage/>}></Route>
                    <Route path="/auth/inputUserInfo" element={<InputUserInfo/>}>
                        {
                            defaultInputs.map((defaultInput,index) => 
                                <Route 
                                    key = {index}
                                    path = {`${defaultInput.infoName}`}
                                    element={<InputTemplate validOptions = {defaultInput.vaildOptions} nextInfo = {defaultInputs[index+1] ? defaultInputs[index+1]?.infoName : "matching"} infoName = {defaultInput.infoName} headerMessage = {defaultInput.headerMessage}/>}
                                ></Route>
                            )
                        }
                    </Route>
                    <Route path="/matching" element={<Matching/>}></Route>
                    <Route path="/home" element={<Home/>}></Route>
                    <Route path="/mypage" element={<MyPage/>}></Route>
                    <Route path="/user-detail/:googleId" element={<UserDetail/>}></Route>
                </Routes>
        //     </CSSTransition>
        // </TransitionGroup>
    );
}