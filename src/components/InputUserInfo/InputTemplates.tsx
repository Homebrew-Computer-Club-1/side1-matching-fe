import styled from "styled-components"
import { Link, useNavigate } from "react-router-dom";
import { useRef } from "react";
import { useRecoilState } from "recoil";
import { userInfoDataAtom } from "../../atoms";
import {produce} from "immer";
import {useForm} from 'react-hook-form';
import { IvaildOptions } from "../../allUserInfo";


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

interface IInputTemplate {
    infoName : string;
    validOptions : IvaildOptions;
    nextInfo : string;
}

export function InputTemplate({infoName,validOptions,nextInfo} : IInputTemplate){
    const navigate = useNavigate();
    const {register, handleSubmit, formState : {errors}, setValue} = useForm();
    const [userInfoData,setUserInfoData] = useRecoilState(userInfoDataAtom);


    const onValid = (data : any) => {
        const currentValue = data[infoName]
        setUserInfoData(current => {
            if (nextInfo !== "matching"){
                navigate(`/auth/InputUserInfo/${nextInfo}`)
            } else {
                navigate('/matching')
            }
            return produce(current,(draft) => {
                draft[infoName] = currentValue;
                return draft;
            })
        })
    }

    return (
        <Wrapper>
            <Header>{infoName}</Header>
            <form onSubmit={handleSubmit(onValid)}>
                <Input {...register(`${infoName}`,{...validOptions})} placeholder={`input your ${infoName}`} />
                <NextPageBtn>다음 페이지로</NextPageBtn>
            </form>
            <p>{errors[infoName]?.message as any}</p>
        </Wrapper>
    )
}





