import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { currentUserDataAtom } from "../atoms";
import { NavBar } from "../components/NavBar";

const Wrapper = styled.div`
    
`

const UserInFoWrapper = styled.div`
    
`

const UserImg = styled.img`
    
`
const UserDetail = styled.div`
    
`

export default function MyPage(){
    const [currentUserData,setCurrentUserData] = useRecoilState(currentUserDataAtom);
    console.log(currentUserData)
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
                </UserInFoWrapper>
                <NavBar></NavBar>
            </Wrapper>
        </>
    );
}