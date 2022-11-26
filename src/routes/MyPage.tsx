import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { currentUserDataAtom } from "../atoms";
import { NavBar } from "../components/NavBar";
import { fetchGetLogout } from "../api";
import { useNavigate } from "react-router-dom";
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
const logoutBtnLookup : IconLookup = { prefix :'fas', iconName:'power-off'}
const logoutBtnDefinition : IconDefinition = findIconDefinition(logoutBtnLookup);


const Wrapper = styled.div`
    font-family: Noto Sans CJK KR;
    display: flex;
    flex-direction: column;
`

const UserInFoWrapper = styled.div`
    display: flex;
    padding:10px;
`

const UserImg = styled.img`
    background-color: green;
    width:150px; height:150px;
    margin:10px;
`
const UserDetail = styled.div`
    
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
                    <UserImg></UserImg>
                    <UserDetail>
                        <p>user name : {currentUserData.name}</p>
                        <p>user age : {currentUserData.age}</p>
                        <p>user tel : {currentUserData.tel}</p>
                    </UserDetail>
                </UserInFoWrapper>

                <FontAwesomeIcon onClick={() => {setLogoutModal(true)}} style={logoutBtnStyle} icon={logoutBtnDefinition}/>
                <NavBar/>
                <LogoutModal isOpen = {logoutModal} setLogoutModal = {setLogoutModal} />
            </Wrapper>
        </>
    );
}