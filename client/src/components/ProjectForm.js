import React, { useContext, useState } from 'react'
import { CurrentUserContext } from '../custom/CurrentUser';
import LandingPage from './LandingPage';
import styled from 'styled-components';

import { useNavigate } from "react-router-dom";




function ProjectForm() {
    const { CurrentUser, setCurrentUser } = useContext(CurrentUserContext);
    let navigate = useNavigate();
const [newProject, setnewProject] = useState({
    name: "",
    summary: "", 
    progress: "0"
})


    function NewProjectChangleHandler(e) {
        setnewProject(data => data = { ...data, [e.target.name]: e.target.value, ["belongs_to_id"]: CurrentUser.member_of_id})
    }

    async function NewProjectSubmitHandler(e) {
        e.preventDefault()
     
        const response = await fetch("projects", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newProject)
        });
        const data = await response.json();

        if (response.ok) {
            console.log("ok")
            navigate('/projects');
        } else {
            alert(data.errors)
        }
    }




    if (CurrentUser === undefined) return <LandingPage />
    return (
        <FormProject onSubmit={e => NewProjectSubmitHandler(e) }> 
            <input onChange={e => NewProjectChangleHandler(e)} name="name" placeholder="Please add your Projects's title" value={newProject.name} ></input>
            <textarea onChange={e => NewProjectChangleHandler(e)} name="summary" placeholder="Please add your projects's details" value={newProject.summary} ></textarea>

            <button type="submit">Submit</button>

        </FormProject>
    )
}

export default ProjectForm

const FormProject = styled.form`


color: #e3e4e6;
   height: 800px;
    width: 600px;
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
    /* border-radius: 20px; */
 input, textarea {
  border: none;
  -webkit-appearance: none;
  -ms-appearance: none;
  -moz-appearance: none;
  appearance: none;
    background-color: rgba(255,255,255,0.07);
  padding: 12px;
  border-radius: 3px;
  width: 580px;
  height:4em;
  font-size: 14px;
  margin-top: 1em;
  color:white;
 resize:none;
}
button,select{
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
