import React, { useContext, useState } from 'react'
import { CurrentUserContext } from '../custom/CurrentUser';
import LandingPage from './LandingPage';
import styled from 'styled-components';
import emailjs from 'emailjs-com'
import { useNavigate  } from "react-router-dom";

function SprintForm({ FetchedProjects }) {
    const { CurrentUser, setCurrentUser } = useContext(CurrentUserContext);
    let navigate = useNavigate ();
    const [NewSprint, setNewSprint] = useState({
        sprint_title: "",
        sprint_data: "",
        goal_date: "",
        urgency: 1,
        priority: 1,
        project_id: 1,

    })

    function mailHandler() {
        emailjs.send("service_7pqzf5i", "template_mqbrehs", CurrentUser, "user_CfmaCp7A2fXHSSdqpMgIq")

    }


    function NewSprintChangeHandler(e) {
        setNewSprint(data => data = { ...data, [e.target.name]: e.target.value, ["created_by_id"]: CurrentUser.id, ["assigned_to_id"]: CurrentUser.id })
 


    }

    async function NewSprintSubmitHandler(e) {
        e.preventDefault()
        if (NewSprint.priority * NewSprint.urgency === 9 ) mailHandler()

        const response = await fetch("sprints", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(NewSprint)
        });
        const data = await response.json();

        if (response.ok) {
            console.log("ok")
            navigate('/sprints');
        } else {
            alert(data.errors)
        }
    }
console.log(SprintForm)
    if (!FetchedProjects) return null
    if (CurrentUser === undefined) return <LandingPage />
    return (
        <SprinterForm onSubmit={e => NewSprintSubmitHandler(e)}>
            <input onChange={e => NewSprintChangeHandler(e)} name="sprint_title" placeholder="Please add your Sprint's title" value={NewSprint.sprint_title} ></input>
            <textarea onChange={e => NewSprintChangeHandler(e)} name="sprint_data" placeholder="Please add your Sprint's details" value={NewSprint.sprint_details} ></textarea>
            <>
                <select name="urgency" onChange={NewSprintChangeHandler}>
                    <option value="0">please Select a Urgency</option>
                    <option value="1">Low</option>
                    <option value="2">Medium</option>
                    <option value="3">High</option>
                </select>
            </>
            <>
                <select name="priority" onChange={NewSprintChangeHandler}>
                    <option value="0">please Select a Urgency</option>
                    <option value="1">Low</option>
                    <option value="2">Medium</option>
                    <option value="3">High</option>
                </select>
            </>
            {NewSprint.urgency * NewSprint.priority ===9 ? <p className='Warning'> Warning you are sending a priority one request all team members will be emailed </p>: null}
            <div>
                <select name="project_id" onChange={NewSprintChangeHandler}>
                    {FetchedProjects.map((project) => <option value={project.id}>{project.name}</option>)}
                </select>
            </div>
            <label>Goal Date</label>
            <input type="datetime-local" onChange={e => NewSprintChangeHandler(e)} name="goal_date" value={NewSprint.goal_date} ></input>
            <button type="submit">Submit</button>
        </SprinterForm>
    )
}

export default SprintForm


const SprinterForm = styled.form`

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

