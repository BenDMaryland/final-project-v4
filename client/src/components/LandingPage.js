import React,{useState} from 'react'
import Login from './Login'
import Signup from './Signup'
import styled from 'styled-components'

function LandingPage() {


    return (
        <Lander>
            <h1 >Welcome to Agile Solutions!</h1>
        <div className='modal'>
           
            <Login />
            <Signup />
        </div>
        </Lander>
    )
}

export default LandingPage

const Lander = styled.div`
text-align:center;
h1{
    font-size: 70px;
           font-family: 'Montserrat', sans-serif;
           color: white;
           text-shadow: 2px 2px 4px #000000;
}
.modal{color: #e3e4e6;
   height: 800px;
    width: 400px;
    background-color: #323232;
    position: absolute;
    transform: translate(-50%,-50%);
    top: 50%;
    left: 55%;
   opacity: 1;
    backdrop-filter: blur(10px);
    border: 2px solid rgba(255,255,255,0.1);
    box-shadow: 0 0 40px rgba(8,7,16,0.6);
    padding: 50px 35px;
    padding-top:1em;
    border-radius: 20px;}
     input {
  border: none;
  -webkit-appearance: none;
  -ms-appearance: none;
  -moz-appearance: none;
  appearance: none;
    background-color: rgba(255,255,255,0.07);
  padding: 12px;
  border-radius: 3px;
  width: 250px;
  height:2em;
  font-size: 14px;
  margin-top: 1em;
  color:white;
 
}
button{
    margin-top: 50px;
    width: 100%;
    background-color: #8b949e;
    color: #080710;
    padding: 15px 0;
    font-size: 18px;
    font-weight: 600;
    border-radius: 5px;
    cursor: pointer;
}
`