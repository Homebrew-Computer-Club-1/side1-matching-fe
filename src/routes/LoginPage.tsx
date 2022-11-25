import { useEffect } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import styled from "styled-components"
import { fetchGetLoginCheck } from "../api";
const youtubeLogo = require("../images/youtube.png");

const Wrapper = styled.div`
  /* width :390px; height : 844px; */
  width: 100%;
  display:flex;
  flex-direction: column;
  align-items: center;
`
const Title = styled.h1`

`
const LoginWrapper = styled.div`
  display:flex;
  position: absolute;
    bottom: 50%;

  flex-direction: column;
  align-items: center;
`

  const YoutubeLogo = styled.img`
    width:200px;
  `

  const LoginBtn = styled.button`
    width:140px; height:30px;
    border-radius: 10px;
    border:0px;
    font-size: 10px;
  `

const ROOT_URL = window.location.hostname !== 'localhost' ? '' : 'http://localhost:8080';

export default function LoginPage() {
  const navigate = useNavigate();
  const onClickLoginBtn = () => {
    window.location.replace(`${ROOT_URL}/api/auth/google`)
  }

  const onLoginCheckSuccess = (data : {loggedIn : Boolean})=>{
    if (data.loggedIn){
      navigate('/matching')
    } 
  }
  const {data:loginCheckData} = useQuery('login-check',fetchGetLoginCheck,{onSuccess : onLoginCheckSuccess})

  return (
    <Wrapper>
      <Title>Matching Service</Title>
      <LoginWrapper>
        <YoutubeLogo src={youtubeLogo}/>
          <LoginBtn onClick={onClickLoginBtn}>Sign In With Youtube</LoginBtn>
      </LoginWrapper>
    </Wrapper>
  );
}


