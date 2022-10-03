import styled from "styled-components"
import { Link } from "react-router-dom";

const Header = styled.h1`
    color:tomato;
`

const Wrapper = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
`
const NextPageBtn = styled.button`
    position:absolute;
    right:0;top:50%;
    background-color: tomato;
`
const Input = styled.input`
    width:250px;
    height:40px;
    position: absolute;
    bottom:300px;
`


export function InputName(){
    return(
        <Wrapper>
            <Header>name</Header>
            <Link to="/auth/InputUserInfo/age">
                <NextPageBtn>다음 페이지로</NextPageBtn>
            </Link>
            <Input placeholder="이름을 입력하세요"></Input>
        </Wrapper>
    );
}

export function InputAge(){
    return(
        <Wrapper>
            <Header>age</Header>
            <Link to="/auth/InputUserInfo/age">
                <NextPageBtn>다음 페이지로</NextPageBtn>
            </Link>
            <Input placeholder="나이를 입력하세요"></Input>
        </Wrapper>
    );
}

