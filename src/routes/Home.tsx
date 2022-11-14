import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { allUserDatasAtom, currentUserDataAtom, IuserData, mlResultAtom } from "../atoms";
import UserCard from "../components/Home/UserCard";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { NavBar } from "../components/NavBar";



const Wrapper = styled.div`
    display:flex;
    flex-wrap:wrap;
`
const ToMyPageBtn = styled.button`
    width:30px; height:30px;
    font-size: 20px;
    position:absolute;
    right:0;
`

export default function Home(){
    const [allUserDatas,setAllUserDatas] = useRecoilState(allUserDatasAtom);
    const mlResult = useRecoilValue(mlResultAtom);
    const [sortedAllUserDatas,setSortedAllUserDatas] = useState<IuserData[]>([]);
    console.log("all",allUserDatas,"ml",mlResult)

    
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
            <h1>this is home</h1>
            {sortedAllUserDatas.map(userData => 
                <UserCard key={userData.googleId} name={userData.name} age={userData.age}></UserCard>  
            )}
            <NavBar></NavBar>
        </>
    );
}