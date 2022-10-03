import styled from "styled-components";

const Wrapper = styled.div`
    
`
const UserImg = styled.img`
    
`
const UserInfos = styled.div`
    
`

interface IUserCard {
    name:string;
    age:number;
}

export default function UserCard({name,age}: IUserCard){
    return (
        <Wrapper>
            <UserImg/>
            <UserInfos>
                <p>이름 : {name}</p>
                <p>나이 : {age}</p>
            </UserInfos>
        </Wrapper>
    );
}