import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { allUserDatasAtom } from "../atoms";
import UserCard from "../components/Home/UserCard";
import styled from "styled-components";


const Wrapper = styled.div`
    display:flex;
    flex-wrap:wrap;
`

export default function Home(){
    const [allUserDatas,setAllUserDatas] = useRecoilState(allUserDatasAtom);
    useEffect(()=> {
        // 서버에 데이터 요청하고 받아서 -> allUserDatas에 저장하는 로직
    },[])
    return (
        <>
            <h1>this is home</h1>
            {allUserDatas.map(userData => 
                <UserCard key={userData.googleId} name={userData.name} age={userData.age}></UserCard>  
            )}
        </>
    );
}