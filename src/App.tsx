import styled from "styled-components"
const youtubeLogo = require("./images/youtube.png");

const Wrapper = styled.div`
  /* width :390px; height : 844px; */
  width: 100%;
  display:flex;
  flex-direction: column;
  align-items: center;
`
const Title = styled.h1`

`

const YoutubeLogo = styled.img`
  width:150px;
`

const LoginBtn = styled.button`
  width:70px; height:30px;
  border-radius: 10px;
  border:0px;
  font-size: 10px;
`

function App() {
  const onClickLoginBtn = () => {
  }
  return (
    <Wrapper>
      <Title>Matching Service</Title>
      <YoutubeLogo src={youtubeLogo}/>
      <LoginBtn onClick={onClickLoginBtn}>Sign In With Youtube</LoginBtn>
    </Wrapper>
  );
}

export default App;
