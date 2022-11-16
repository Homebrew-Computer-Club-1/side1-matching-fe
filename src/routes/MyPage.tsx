import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { currentUserDataAtom } from "../atoms";
import { NavBar } from "../components/NavBar";
import { fetchGetLogout } from "../api";
import { useNavigate } from "react-router-dom";


const Wrapper = styled.div`
    
`

const UserInFoWrapper = styled.div`
    
`

const UserImg = styled.img`
    
`
const UserDetail = styled.div`
    
`

export default function MyPage(){
    const navigate = useNavigate();
    const [currentUserData,setCurrentUserData] = useRecoilState(currentUserDataAtom);
    const onClickLogoutBtn = async () => {
        try {
            fetchGetLogout()
            navigate('/auth/login')
        } catch {
            console.log('로그아웃 실패')
        }
        
    }
    return (
        <>
            <h1>this is my page</h1>
            <Wrapper>
                <UserInFoWrapper>
                    <UserImg></UserImg>
                    <UserDetail>
                        <p>user id : {currentUserData.googleId}</p>
                        <p>user name : {currentUserData.name}</p>
                        <p>user age : {currentUserData.age}</p>
                    </UserDetail>
                    <button onClick={onClickLogoutBtn}>로그아웃</button>
                </UserInFoWrapper>
                <NavBar></NavBar>
            </Wrapper>
        </>
    );
}