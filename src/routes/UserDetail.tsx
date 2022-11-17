import { useParams } from "react-router-dom"
import { useRecoilValue } from "recoil";
import { allUserDatasAtom } from "../atoms";
import { NavBar } from "../components/NavBar";
import styled from "styled-components";
import { TopBanner } from "../components/TopBanner";



const Wrapper = styled.div`
    font-family: Noto Sans CJK KR;
    display: flex;
    flex-direction: column;
`

const UserInFoWrapper = styled.div`
    display: flex;
    padding:10px;
`

const UserImg = styled.img`
    background-color: green;
    width:150px; height:150px;
    margin:10px;
`

const logoutBtnStyle = {
    fontSize:'30px',
    bottom:0,
}

const UserDatas = styled.div`
    
`


export function UserDetail(){
    const {googleId} = useParams();

    const allUserDatas = useRecoilValue(allUserDatasAtom);
    const userData = allUserDatas.find(userData => userData.googleId === googleId);

    return (
        <>
            <Wrapper>
                <TopBanner/>
                <UserInFoWrapper>
                    <UserImg></UserImg>
                    <UserDatas>
                        <p>user name : {userData?.name}</p>
                        <p>user age : {userData?.age}</p>
                    </UserDatas>
                </UserInFoWrapper>

                <NavBar/>
            </Wrapper>
        </>
    );
}