import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { currentUserDataAtom } from "../atoms";
import { NavBar } from "../components/NavBar";
import { fetchGetLogout } from "../api";
import { TopBanner } from "../components/TopBanner";




// fa
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import {
    IconLookup,
    IconDefinition,
    findIconDefinition
} from '@fortawesome/fontawesome-svg-core'
import { useState } from "react";
import { LogoutModal } from "../components/Mypage/LogoutModal";
library.add(fas)
const defaultUserImg = require( "../images/defaultUserImg.png");

const logoutBtnLookup : IconLookup = { prefix :'fas', iconName:'power-off'}
const logoutBtnDefinition : IconDefinition = findIconDefinition(logoutBtnLookup);


const Wrapper = styled.div`
    font-family: Noto Sans CJK KR;
    display: flex;
    flex-direction: column;
    position: relative;
    `

const UserInFoWrapper = styled.div`
    display: flex;
    padding:10px 0;
    `

const UserImg = styled.img`
    padding:auto 10px;
    width:130px; height:130px;
    margin:10px;
    position: relative;
    top:10px;
    `
const UserDetails = styled.div`
    padding:20px 0px;
    `

const UserDetail_name = styled.p`
    font-size: 25px;
    font-weight: 500;
    `

const logoutBtnStyle = {
    fontSize:'30px',
    bottom:0,
}

export default function MyPage(){
    const [currentUserData,setCurrentUserData] = useRecoilState(currentUserDataAtom);
    const [logoutModal,setLogoutModal] = useState(false);
    return (
        <>
            <Wrapper>
                <TopBanner/>
                <UserInFoWrapper>
                    <UserImg src={defaultUserImg}></UserImg>
                    <UserDetails>
                        <UserDetail_name>{currentUserData.name}님, 환영합니다.</UserDetail_name>
                        <p>user age : {currentUserData.age}</p>
                        <p>user tel : {currentUserData.tel}</p>
                    </UserDetails>
                </UserInFoWrapper>

                <FontAwesomeIcon onClick={() => {setLogoutModal(true)}} style={logoutBtnStyle} icon={logoutBtnDefinition}/>
                <LogoutModal isOpen = {logoutModal} setLogoutModal = {setLogoutModal} />
            </Wrapper>
            <NavBar/>

        </>
    );
}