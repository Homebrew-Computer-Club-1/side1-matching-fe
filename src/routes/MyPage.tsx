import styled from "styled-components";

const Wrapper = styled.div`
    
`

const UserInFoWrapper = styled.div`
    
`

const UserImg = styled.img`
    
`
const UserDetail = styled.div`
    
`

export default function MyPage(){
    return (
        <>
            <h1>this is my page</h1>
            <Wrapper>
                <UserInFoWrapper>
                    <UserImg></UserImg>
                    <UserDetail></UserDetail>
                </UserInFoWrapper>
            </Wrapper>
        </>
    );
}