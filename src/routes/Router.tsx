import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import LoginPage from "./LoginPage";
import InputUserInfo from "./InputUserInfo";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import './transitionGroup.css'

export default function Router(){
    const location = useLocation();
    return (
        <TransitionGroup className="transitions-wrapper">
            <CSSTransition
                key={location.pathname}
                classNames={"right"}
                timeout={300}
            >
                <Routes>
                    <Route path="/auth/login" element={<LoginPage/>}></Route>
                    <Route path="/auth/inputUserInfo" element={<InputUserInfo/>}></Route>
                </Routes>
            </CSSTransition>
        </TransitionGroup>
    );
}