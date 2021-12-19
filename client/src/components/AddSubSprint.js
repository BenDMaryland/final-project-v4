import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { CurrentUserContext } from '../custom/CurrentUser';

function AddSubSprint({ setaddNewSubSprint, SubSprintType, id, setDOMUpdater }) {
    const { CurrentUser, setCurrentUser } = useContext(CurrentUserContext);

    const [NewSubSprint, setNewSubSprint] = useState({
        urgency: "1",
        priority: "1"

    })


    function NewSubSprintChangeHandler(e) {
        setNewSubSprint({ ...NewSubSprint, [e.target.name]: e.target.value, ["created_by_id"]: CurrentUser.id, ["sprint_id"]: id });
        console.log(NewSubSprint)
    }

    async function NewSubSprintSubmitHandler(e) {
        console.log(NewSubSprint)
        e.preventDefault()
        const response = await fetch(`/${SubSprintType}s`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(NewSubSprint)
        });
        const data = await response.json();

        if (response.ok) {
            console.log("ok")
        } else {
            alert(data.errors)
        }
        setaddNewSubSprint(false)
        setDOMUpdater(Math.random())
    }


    return (


        <SubSprintForm onSubmit={e => NewSubSprintSubmitHandler(e)}>

            {SubSprintType === "bug" || SubSprintType === "feature" ?
                <div className='inputs'>
                    <div>
                      
                        <input onChange={e => NewSubSprintChangeHandler(e)} name={`${SubSprintType}_title`} placeholder={` please add your ${SubSprintType}'s' title`} value={NewSubSprint.title} ></input>
                    </div>

                 
                    <textarea onChange={e => NewSubSprintChangeHandler(e)} name={`${SubSprintType}_data`} placeholder={` please add your ${SubSprintType}'s' data`} value={NewSubSprint.sprint_data} ></textarea>
                </div>
                : // Comments database is different from the Bugs/.Features as such it requires different prompts
                <>
            
                    <input onChange={e => NewSubSprintChangeHandler(e)} name={`${SubSprintType}_details`} placeholder={` please add your ${SubSprintType}'s' data`} value={NewSubSprint.details} ></input>
                </>}

            {/* {SubSprintType === "comment" ? null :
                <div className="radio_container" >
                    <div className="radios">
                        <label> Urgency:</label>
                        <div className="radio_btns" onChange={NewSubSprintChangeHandler}>
                            <label className="radio">Low</label> <input name="urgency" type="radio" value="1"></input>
                            <label className="radio">Medium</label> <input name="urgency" type="radio" value="2"></input>
                            <label className="radio" >high</label> <input name="urgency" type="radio" value="3"></input>
                        </div>
                    </div>

                    <div className="radios">

                        <label> Priority:</label>

                        <div className="radio_btns" onChange={NewSubSprintChangeHandler}>
                            <label className="radio">Low<input name="priority" type="radio" value="1"></input></label>
                            <label className="radio">Medium <input name="priority" type="radio" value="2"></input></label>
                            <label className="radio">high <input name="priority" type="radio" value="3"></input></label>
                        </div>

                    </div>

                </div>} */}
            {/* <label>Goal Date</label>
        <input type="datetime-local" onChange={e => NewSubSprintChangeHandler(e)} name="goal_date" value={NewSubSprint.goal_date} ></input> */}
            <button type="submit">Submit</button>

        </SubSprintForm>

    )
}

export default AddSubSprint

const SubSprintForm = styled.form`

color: #e3e4e6;
   height: 600px;
    width: 600px;
    background-color: #323232;
    position: absolute;
    top:400px;

   opacity: 1;
    backdrop-filter: blur(10px);
    border: 2px solid rgba(255,255,255,0.1);
    box-shadow: 0 0 40px rgba(8,7,16,0.6);
    padding: 50px 35px;
    padding-top:1em;
    z-index: 99;
    border-radius: 20px;


    .inputs{
   input,textarea {
         
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
}}
.radio_container{
display: grid;
grid-template-columns:repeat(2, 1fr );
height: fit-content;
}

.radios{
display: grid;
grid-template-columns:repeat(2, 1fr );
}
.radio_btns{
    display: grid;
}
.radio{
display: inline;
}

label{
   align-self: center;
}

`