import { useNavigate } from "react-router-dom"
import styled from "styled-components";
// fa
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import {
    IconLookup,
    IconDefinition,
    findIconDefinition
  } from '@fortawesome/fontawesome-svg-core'
library.add(fas)
const linkLookup : IconLookup = { prefix :'fas', iconName:'link'}
const linkIconDefinition : IconDefinition = findIconDefinition(linkLookup);

//


const Wrapper = styled.div`
    width:100%; height:50px;
    display:flex;
    align-items: center;
    justify-content: space-evenly;

    div {
        color:${props => props.theme.bgColor};
        font-size: 35px;
        font-family: Noto Sans CJK KR;
        font-style: normal;
        font-weight: 500;
        width: 45%;
        text-align: center;
    }
`

export function TopBanner(){
    const navigate = useNavigate();
    return (
        <Wrapper>
            <div onClick = {()=>{navigate('/home')}}><FontAwesomeIcon icon={linkIconDefinition}/> Link </div>
        </Wrapper>
    )
}