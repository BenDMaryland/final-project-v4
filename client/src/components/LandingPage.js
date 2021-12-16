import React,{useState} from 'react'
import Login from './Login'
import Signup from './Signup'
import styled from 'styled-components'

function LandingPage() {
    const [WantToSignUp, setWantToSignUp] = useState(false)

    return (
        <Lander>
            <Login />
            <Signup />
        </Lander>
    )
}

export default LandingPage

const Lander = styled.div`
color: #e3e4e6;
   height: 700px;
    width: 400px;
    background-color: #323232;
    position: absolute;
    transform: translate(-50%,-50%);
    top: 50%;
    left: 50%;
   opacity: 1;
    backdrop-filter: blur(10px);
    border: 2px solid rgba(255,255,255,0.1);
    box-shadow: 0 0 40px rgba(8,7,16,0.6);
    padding: 50px 35px;
    padding-top:1em;
`