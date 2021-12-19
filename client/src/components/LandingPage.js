import { useState, useContext } from 'react'
import Login from './Login'
import Signup from './Signup'
import { CurrentUserContext } from '../custom/CurrentUser';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";

function LandingPage({setDOMUpdater }) {
    const { CurrentUser, setCurrentUser } = useContext(CurrentUserContext);


    return (
        <Lander>
            <h1 >Welcome to Agile Solutions!</h1>
            <div className='modal'>

                {!CurrentUser ? <>  <Login setDOMUpdater={setDOMUpdater} /> <Signup setDOMUpdater={setDOMUpdater}/>  </>
                    :
                        <>
                            <h2>Welcome to Agile Solutions </h2>
                            <h3>New user info</h3>
                            <p>As a new user your access is limited until a manager approves your access</p>
                            <p> If you'd like full access please an Admin account, the default value for login should grant you full access</p>
                         
                           <h3>Sprints</h3>
                            <p>This a program management software that allows users to manage projects as well as indivudual sprints </p>
<p>Please check the Sprints tab to access all current sprints </p>
<p> To progress a sprint just drag it to the correct location</p>
<p> For more information please click the sprint to be taken to that sprints page, where you can leave comments</p>
<h3>Boss stuff</h3>
<p>If you're account is a boss account you can check the project tab to check on the status on individual projects </p>
<p> You can also click on the users tab to check individual users progress</p>
                        </>             
                }
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
    margin-top: 20px;
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