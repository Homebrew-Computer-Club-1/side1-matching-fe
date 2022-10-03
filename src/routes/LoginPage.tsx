import styled from "styled-components"
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
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

export default function LoginPage() {
  const onClickLoginBtn = () => {
    console.log('hi')
  }

  return (
    <Wrapper>
      <Title>Matching Service</Title>
      <LoginWrapper>
        <YoutubeLogo src={youtubeLogo}/>
        <Link to="/auth/inputUserInfo/name">
          <LoginBtn onClick={onClickLoginBtn}>Sign In With Youtube</LoginBtn>
        </Link>
      </LoginWrapper>
    </Wrapper>
  );
}


