import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { allUserDatasAtom, currentUserDataAtom, IuserData, mlResultAtom, TgoogleId } from "../atoms";
import UserCard from "../components/Home/UserCard";
import styled from "styled-components";
import { NavBar } from "../components/NavBar";
import { TopBanner } from "../components/TopBanner";



const ToMyPageBtn = styled.button`
    width:30px; height:30px;
    font-size: 20px;
    position:absolute;
    right:0;
`
const UserCardContainer = styled.div`
    display:flex;
    flex-wrap: wrap;
`

export default function Home(){
    const [allUserDatas,setAllUserDatas] = useRecoilState(allUserDatasAtom);
    const mlResult = useRecoilValue(mlResultAtom);
    const [sortedAllUserDatas,setSortedAllUserDatas] = useState<IuserData[]>([]);

    const sortAllUserDatas = (allUserDatas : IuserData[]) => {
        const result = [];
        for (let i=0;i<allUserDatas.length;i++){
            let pushUserData = allUserDatas.find(userData => userData.googleId === mlResult[i]);
            result.push(pushUserData);
        }
        return result;
    }
    useEffect(()=>{
        setSortedAllUserDatas(sortAllUserDatas(allUserDatas) as IuserData[]);
    },[])





    return (
        <>
            <TopBanner/>
            <UserCardContainer>
                {sortedAllUserDatas.map(userData => 
                    <UserCard key={userData.googleId} googleId = {userData.googleId} name={userData.name} age={userData.age}></UserCard>  
                )}
            </UserCardContainer>
            <NavBar/>
        </>
    );
}