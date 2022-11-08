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
const homeLookup : IconLookup = { prefix :'fas', iconName:'house'}
const homeIconDefinition : IconDefinition = findIconDefinition(homeLookup);
const myPageLookup : IconLookup = {prefix : 'fas', iconName:'user'}
const myPageIconDefinition : IconDefinition = findIconDefinition(myPageLookup);
//


const Wrapper = styled.div`
    width:100%; height:50px;
    background-color: tomato;

    display:flex;
    align-items: center;
    justify-content: space-evenly;

    position:absolute; bottom: 10px;

    div {
        font-size: 25px;
        width: 45%;
        text-align: center;
    }
`

export function NavBar(){
    const navigate = useNavigate();
    return (
        <Wrapper>
            <div onClick = {()=>{navigate('/home')}}><FontAwesomeIcon icon={homeIconDefinition} /></div>
            <div onClick = {()=>{navigate('/mypage')}}><FontAwesomeIcon icon={myPageIconDefinition}/></div>
        </Wrapper>
    )
}