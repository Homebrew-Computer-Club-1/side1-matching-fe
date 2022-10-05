import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { allUserDatasAtom } from "../atoms";
import UserCard from "../components/Home/UserCard";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";


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
    const navigate = useNavigate();
    useEffect(()=> {
        // 서버에 데이터 요청하고 받아서 -> allUserDatas에 저장하는 로직
    },[])
    return (
        <>
            <h1>this is home</h1>
            {allUserDatas.map(userData => 
                <UserCard key={userData.googleId} name={userData.name} age={userData.age}></UserCard>  
            )}
            <ToMyPageBtn onClick = {()=>{navigate('/mypage')}}>마이 페이지로</ToMyPageBtn>
        </>
    );
}