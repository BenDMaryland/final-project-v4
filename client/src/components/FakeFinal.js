import styled from 'styled-components'
import React, { useState, useEffect } from "react";
import emailjs from 'emailjs-com'
import { useNavigate } from "react-router-dom";

function FakeFinal() {
    const [showErrorModal, setshowErrorModal] = useState(false)
    const [errorinput, seterrorinput] = useState("unhelpful error")
    const [showRickRoll, setshowRickRoll] = useState(false)
    let navigate = useNavigate();
    const [showModal, setshowModal] = useState(false)
    const [NewSprint, setNewSprint] = useState({
        sprint_title: "",
        sprint_data: "",
        goal_date: "",
        urgency: 1,
        priority: 1,
        project_id: 6


    })

    function mailHandler() {
        emailjs.send("service_7pqzf5i", "template_mqbrehs", "hi", "user_CfmaCp7A2fXHSSdqpMgIq")

    }


    function NewSprintChangeHandler(e) {
        setNewSprint(data => data = { ...data, [e.target.name]: e.target.value, ["created_by_id"]: 10, ["assigned_to_id"]: 10 })

    }

    async function NewSprintSubmitHandler(e) {
        console.log("hi")
        e.preventDefault()
        if (NewSprint.priority * NewSprint.urgency === 9) mailHandler()

        const response = await fetch("/sprints", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(NewSprint)
        });
        const data = await response.json();

        if (response.ok) {
            console.log("ok")
            navigate('/');
        } else {
            alert(data.error)
        }
    }

    function errorsubmitHandler() {
        if (errorinput === "not a unhelpful error") {
            setshowRickRoll(true)
            setshowErrorModal(!showErrorModal)
        }
        else { setshowErrorModal(!showErrorModal) }
    }

    function errorChangeHandler(e) {
        seterrorinput(e.target.value)

    }


    return (


        <Fake>



            {showErrorModal ?
                <div className='error_modal'>
                    <input placeholder='Unhelpful error' value={errorinput} onChange={errorChangeHandler}></input>
                    <button onClick={errorsubmitHandler}> Click here! </button>
                </div>

                : null}

            {showRickRoll ?
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                :
                <>
                    <button className='btn' onClick={() => setshowErrorModal(!showErrorModal)}> Click here! </button>

                    <button id='report' onClick={() => setshowModal(!showModal)}>Report bug</button>
                 {   showModal?
                        <form className='modal' onSubmit={NewSprintSubmitHandler}>
                           
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
                                    <option value="0">please Select a Priority</option>
                                        <option value="1">Low</option>
                                        <option value="2">Medium</option>
                                        <option value="3">High</option>
                                    </select>
                                </>
                                {NewSprint.urgency * NewSprint.priority === 9 ? <p className='Warning'> Warning you are sending a priority one request all team members will be emailed </p> : null}
                                <label>Goal Date</label>
                                <input type="datetime-local" onChange={e => NewSprintChangeHandler(e)} name="goal_date" value={NewSprint.goal_date} ></input>
                                <button type="submit">Submit</button>
                        
                    </form>
                    :null}
                </>
            }

        </Fake>
    )
}

export default FakeFinal

const Fake = styled.div`
  width: 100vw;
  height: 100vh;



.btn{
         position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display:block;
  height: 300px;
  width: 300px;
  border-radius: 50%;
    background-color: #ff0000;
    font-size: x-large;
    border: 1px solid red;
    font-weight: 800;
    color: white;
    text-shadow: 1px 1px 2px black;
}
.btn:hover {
    background-color: #cc0000;
    text-shadow: 3px 4px 5px black;

}
.error_modal{
   height: 400px;
    width: 500px;
    background-color: white;
    position: absolute;
      top: 50%;
  left: 50%;
    transform: translate(-50%,-50%);
    z-index:23;
border:solid;
input{
        position: absolute;
      top: 50%;
  left: 50%;
    transform: translate(-50%,-50%);
      text-decoration: none;
    border: none;
    font-size: xx-large;
    color: black;  
    text-align:center;
}

button{
          position: absolute;
      top: 90%;
  left: 50%;
   transform: translate(-50%,-50%);
   padding: 20px;
    width: 20%;
    padding: 12px 0;
    font-size: 18px;
    font-weight: 600;
 
}
}
#report{
         position: absolute;
  top: 90%;
  left: 90%;
  transform: translate(-50%, -50%);
}
form{
    
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


}
`