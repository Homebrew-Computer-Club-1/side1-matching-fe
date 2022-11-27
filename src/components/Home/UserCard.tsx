import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { TgoogleId } from "../../atoms";
const defaultUserImg = require( "../../images/defaultUserImg.png");


const Wrapper = styled.div`
    position: relative;
    /* border: 3px solid black; */
    width:40%;
    margin:5px;
    padding:5px;
`
const UserImg = styled.img`
    position: absolute;
    top:-10px;
    left: 50%;
    transform: translate(-50%, -50%);

    border-radius: 50%;
    width:50px; height:50px;
    display:block; margin:auto;
`
const UserInfos = styled.div`
    
`
const UserInfo_name = styled.p`
    text-align: center;
    position: relative;
    top:15px;
`
const UserInfo_age = styled.p`
    text-align: center;
    color:grey;
    font-size: 10px;
    
`

interface IUserCard {
    googleId:TgoogleId
    name:string;
    age:number;
    tel:string;
}



export default function UserCard({googleId,name,age,tel}: IUserCard){
    const navigate = useNavigate();
    const onClickUserCard = (googleId : TgoogleId) => {
        navigate(`/user-detail/${googleId}`)
    }

    return (
        <Wrapper onClick = {()=> onClickUserCard(googleId)}>
            <UserImg src={defaultUserImg}/>
            <UserInfos>
                <UserInfo_name>{name}</UserInfo_name>
                <UserInfo_age>{age}세</UserInfo_age>
            </UserInfos>
        </Wrapper>
    );
}