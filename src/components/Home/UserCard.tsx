import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { TgoogleId } from "../../atoms";


const Wrapper = styled.div`
    width:40%;
    border: 3px solid black;
    margin:5px;
    padding:5px;
`
const UserImg = styled.img`
    width:50px; height:50px;
    background-color: green;
    display:block; margin:auto;
`
const UserInfos = styled.div`
    
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
            <UserImg/>
            <UserInfos>
                <p>이름 : {name}</p>
                <p>나이 : {age}</p>
            </UserInfos>
        </Wrapper>
    );
}