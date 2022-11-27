import styled from "styled-components"
import { Link, useNavigate } from "react-router-dom";
import { useRef } from "react";
import { useRecoilState } from "recoil";
import { userInfoDataAtom } from "../../atoms";
import {produce} from "immer";
import {useForm} from 'react-hook-form';
import { IvaildOptions } from "../../allUserInfo";

//fa
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import {
    IconLookup,
    IconDefinition,
    findIconDefinition
  } from '@fortawesome/fontawesome-svg-core'
library.add(fas)
const rightArrowLookup : IconLookup = { prefix :'fas', iconName:'arrow-right'}
const rightArrowIconDefinition : IconDefinition = findIconDefinition(rightArrowLookup);


const Header = styled.h1`
    position : absolute;
    top:60px;
    color:${props => props.theme.textColor};
`

const Wrapper = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
`
const Input = styled.input`
    width:250px;
    height:40px;
    position: absolute;
    bottom:20%;
    right:50%;left:50%;
    transform: translate(-50%, -50%);
`

const RightArrowBox = styled.button`
    background-color: transparent;
    border-color: transparent;
    display:inline-block;
    position:absolute;
    right:10px;
    top:45%;
    font-size: 50px;
`
const ErrMessageBox = styled.p`
    color : ${props => props.theme.textColor};
    font-size: 15px;
    position: absolute;
    bottom:17%;right:35%;

`


interface IInputTemplate {
    infoName : string;
    validOptions : IvaildOptions;
    nextInfo : string;
    headerMessage : string;
}

export function InputTemplate({infoName,validOptions,nextInfo,headerMessage} : IInputTemplate){
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
            <Header>{headerMessage}</Header>
            <form onSubmit={handleSubmit(onValid)}>
                <Input {...register(`${infoName}`,{...validOptions})} placeholder={`input your ${infoName}`} />
                <RightArrowBox><FontAwesomeIcon icon={rightArrowIconDefinition} /></RightArrowBox>
                <ErrMessageBox>{errors[infoName]?.message as any}</ErrMessageBox>
            </form>
        </Wrapper>
    )
}





