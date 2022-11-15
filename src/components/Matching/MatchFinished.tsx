import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import Button from 'react-bootstrap/Button';

export function MatchFinished(){
    const navigate = useNavigate(); 
    const NavigateToHomeBtnStyle = {
        width:'90%',
        height:'10%',
        borderRadius:'10px',
        backgroundColor:'rgba(230, 50, 34)',
        Position:'absolute',
        bottom:'20px',
        color:' white',
        fontSize: '30px',
    }
    const NavigateToHomeBtn = styled.button`
       

    `   
    
    const NavigateToHome = () =>{

    }
    return (
        <>
            <h1>매칭 완료!</h1>
            <Button style={NavigateToHomeBtnStyle} variant="danger" onClick={()=>{navigate('/home')}}>매칭 결과 보기</Button>{' '}
        </>

    )
}