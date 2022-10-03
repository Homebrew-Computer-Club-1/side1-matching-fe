import styled from "styled-components"
import { Link, useNavigate } from "react-router-dom";
import { useRef } from "react";
import { useRecoilState } from "recoil";
import { userInfoDataAtom } from "../../atoms";
import {produce} from "immer";


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
    const nameInput = useRef<HTMLInputElement>(null);
    const [userInfoData,setUserInfoData] = useRecoilState(userInfoDataAtom);
    const navigate = useNavigate();

    const onClickNextPageBtn = () => {
        const userName = nameInput.current?.value;
        if (userName){
            setUserInfoData(current => {
                navigate('/auth/InputUserInfo/age')
                return produce(current,(draft) => {
                    draft.name = userName;
                    return draft;
                })
            })
        } else {
            alert('이름을 입력해라.')
            nameInput.current?.focus();
        }
    }
    return(
        <Wrapper>
            <Header>name</Header>
                <NextPageBtn onClick={onClickNextPageBtn}>다음 페이지로</NextPageBtn>
            <Input ref={nameInput} placeholder="이름을 입력하세요"></Input>
        </Wrapper>
    );
}

export function InputAge(){
    const ageInput = useRef<HTMLInputElement>(null);
    const useAge = ageInput.current?.value;
    const [userInfoData,setUserInfoData] = useRecoilState(userInfoDataAtom);
    const navigate = useNavigate();

    const onClickNextBtn = ()=> {
        const useAge = ageInput.current?.value;
        if (useAge){
            setUserInfoData(current => {
                navigate('/matching') 
                return produce(current,(draft) => {
                    draft.age = +useAge;
                    return draft;
                })
            })
        } else  {
            alert('나이를 입력해라.')
            ageInput.current?.focus();
        }
    }
    
    return(
        <Wrapper>
            <Header>age</Header>
                <NextPageBtn onClick={onClickNextBtn}>다음 페이지로</NextPageBtn>
            <Input ref={ageInput} placeholder="나이를 입력하세요"></Input>
        </Wrapper>
    );
}

