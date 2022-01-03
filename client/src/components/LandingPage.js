import { useState, useContext } from 'react'
import Login from './Login'
import Signup from './Signup'
import { CurrentUserContext } from '../custom/CurrentUser';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";

function LandingPage({ setDOMUpdater }) {
    const { CurrentUser, setCurrentUser } = useContext(CurrentUserContext);


    return (
        <Lander>
            <h1 >Welcome to Agile Solutions!</h1>
            <div className='modal'>
                {!CurrentUser ?
                    <>  <Login setDOMUpdater={setDOMUpdater} /> <Signup setDOMUpdater={setDOMUpdater} />  </>
                    :
                    CurrentUser.level === 0 ?
                        <>
                            <h2>Welcome to Agile Solutions </h2>
                            <h3>New user info</h3>
                            <p>Welcome to the Agile solutions, as a new account you have no access until you are approved by a manager. </p>
                            <p>If you'd like to demo the App please use the default account.  </p>
                            <p>Username: BenDMaryland</p>
                            <p>Password: 123</p>

                            <h3>About </h3>
                            <p> This is my capstone project for my time at FlatIron bootcamp, I made this app in three using React for the front end and Ruby on Rails for the backend.  </p>
                            <h2> Key Features </h2>
                            <p> Teams: Teams allow this application to serve multiple teams. Each teams data is separate from each other (except KBA's )</p>
                            <p>Projects: fWithin a team there are multiple projects, all team members are able to see all projects within a team  </p>
                            <p>Sprints: Sprints are individual tasks that are assigned to an individual team member. </p>
                            <p>KBA's: A KBA is a an article where users can post information on how to resolve issues. </p>
                            <p>Boss's tabs: A User who is a boss can see data about each users progress and each projects progress</p>
                            <p>Separation of duties: Admin accounts can delete sprints,  Boss accounts can fire users, and see user data.</p>
                        </>
                        :
                        <>
                            <h2>Welcome to Agile Solutions </h2>
                            <h2> Information </h2>
                            <h2> Key Features </h2>
                            <h3>Teams</h3>
                            <p> Teams allow this application to serve multiple teams. Each teams data is separate from each other (except KBA's )</p>
                            <h3>Projects</h3>
                            <p> Within a team there are multiple projects, all team members are able to see all projects within a team  </p>
                            <h3>Sprints</h3>
                            <p>Sprints are individual tasks that are assigned to an individual team member. </p>
                            <h3>KBA's</h3>
                            <p>A KBA is a an article where users can post information on how to resolve issues. </p>
                            <h3>Boss's  tabs</h3>
                            <p>A User who is a boss can see data about each users progress and each projects progress</p>
                            <h3>Separation of duties</h3>
                            <p>Admin accounts can delete sprints,  Boss accounts can fire users, and see user data.</p>
                        </>   }
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
   height: 70vh;
      width: 600px;
    background-color: #323232;
    position: absolute;
   transform: translate(-50%,-50%);
    top: 55%;
    left: 50%;
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
  width: 550px;
  height:2em;
  display: block;
  font-size: 14px;
  margin-top: 1em;
  color:white;
 
}
button,select{
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