import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import isLogin, { allUserDatasAtom, currentUserDataAtom, IuserData, mlResultAtom, TgoogleId } from "../atoms";
import UserCard from "../components/Home/UserCard";
import styled from "styled-components";
import { NavBar } from "../components/NavBar";
import { TopBanner } from "../components/TopBanner";
import isLoginAtom from "../atoms";



const ToMyPageBtn = styled.button`
    width:30px; height:30px;
    font-size: 20px;
    position:absolute;
    right:0;
`

const Container = styled.div`
    
`

const SuitedCardsBanner = styled.div`
    text-align: center;
    font-size: 25px;
    padding:5px;
`
const NotSuitedCardsBanner = styled.div`
    text-align: center;
    font-size: 25px;
    padding:5px;
`


const SuitedCardsContainer = styled.div`
    display:flex;
    flex-wrap: wrap;
    padding:30px;
`
const NotSuitedCardsContainer = styled.div`
    display:flex;
    flex-wrap: wrap;
    padding:30px;
`


export default function Home(){
    const [allUserDatas,setAllUserDatas] = useRecoilState(allUserDatasAtom);
    const mlResult = useRecoilValue(mlResultAtom);
    const [sortedSuitedUserDatas,setSortedSuitedUserDatas] = useState<IuserData[]>([]);
    const [sortedNotSuitedUserDatas,setSortedNotSuitedUserDatas] = useState<IuserData[]>([]);
    const currentUserData = useRecoilValue(currentUserDataAtom);

    const isLogin = useRecoilValue(isLoginAtom);
    console.log('로그인 상태',isLogin)
    
    const sortSuitedUserDatas = (allUserDatas : IuserData[]) => {

        // mlResult 받기
            const suitedUserGoogleIdList = mlResult;
        // 그거 이용해서 allUserDatas에서 유저 데이터 조회 => array 만들기
            const suitedUserDatasList = suitedUserGoogleIdList.map(suitedUserGoogleId => {
                const suitedUserData = allUserDatas.find(userData => userData.googleId === suitedUserGoogleId)
                return suitedUserData
            })
            return suitedUserDatasList;
    }

    const sortNotSuitedUserDatas = (allUserDatas : IuserData[]) => {
        // mlResult 받기
            const suitedUserGoogleIdList = mlResult;
        // 나머지 유저에 대한 데이터 (알고리즘 외) 처리
        const notSuitedUserDatasList = suitedUserGoogleIdList.map(suitedUserGoogleId => {
            const notSuitedUserData = allUserDatas.find(userData => userData.googleId !== suitedUserGoogleId)
            return notSuitedUserData
        })
            return notSuitedUserDatasList;
    }




    useEffect(()=>{
        setSortedSuitedUserDatas(sortSuitedUserDatas(allUserDatas) as IuserData[]);
        setSortedNotSuitedUserDatas(sortNotSuitedUserDatas(allUserDatas) as IuserData[]);
        
    },[])





    return (
        <>
            <TopBanner/>
            <Container>
                <SuitedCardsBanner>나랑 가장 잘 맞는 사람들</SuitedCardsBanner>
                <SuitedCardsContainer>
                    {sortedSuitedUserDatas.map(userData => 
                        <UserCard key={userData.googleId} googleId = {userData.googleId} name={userData.name} age={userData.age} tel = {userData.tel}></UserCard>  
                    )}
                </SuitedCardsContainer>
                <NotSuitedCardsBanner>그 외의 사람들</NotSuitedCardsBanner>
                <NotSuitedCardsContainer>
                    {sortedNotSuitedUserDatas?.map(userData => 
                        <UserCard key={userData.googleId} googleId = {userData.googleId} name={userData.name} age={userData.age} tel = {userData.tel}></UserCard>  
                    )}
                </NotSuitedCardsContainer>
            </Container>
            
            <NavBar/>
        </>
    );
}