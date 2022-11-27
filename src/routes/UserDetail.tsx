import { useParams } from "react-router-dom"
import { useRecoilValue } from "recoil";
import { allUserDatasAtom } from "../atoms";
import { NavBar } from "../components/NavBar";
import styled from "styled-components";
import { TopBanner } from "../components/TopBanner";
const defaultUserImg = require( "../images/defaultUserImg.png");



const Wrapper = styled.div`
    font-family: Noto Sans CJK KR;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const UserImg = styled.img`
    margin-top:20px;
    width:150px; height:150px;
`


const UserDetails = styled.div`
    padding:20px;
`

const UserDetail_name = styled.p`
    font-size: 30px;
    font-weight: 500;
`

const UserDetail_age = styled.p`
    color:grey;
`
const UserDetail_tel = styled.p`
    color:grey;
`

export function UserDetail(){
    const {googleId} = useParams();

    const allUserDatas = useRecoilValue(allUserDatasAtom);
    const userData = allUserDatas.find(userData => userData.googleId === googleId);

    return (
        <>
            <Wrapper>
                <TopBanner/>
                <UserImg src = {defaultUserImg}/>
                <UserDetails>
                    <UserDetail_name>{userData?.name}님의 정보입니다.</UserDetail_name>
                    <UserDetail_age>나이 : {userData?.age}세</UserDetail_age>
                    <UserDetail_tel>전화번호 : {userData?.tel}</UserDetail_tel>
                </UserDetails>
                <NavBar/>
            </Wrapper>
        </>
    );
}