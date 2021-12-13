import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { CurrentUserContext } from '../custom/CurrentUser';

function AddSubSprint({ setaddNewSubSprint, SubSprintType, id }) {
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
    }


    return (


        <SubSprintForm onSubmit={e => NewSubSprintSubmitHandler(e)}>

            {SubSprintType === "bug" || SubSprintType === "feature" ?
                <>
                <div>
                    <label>{SubSprintType}</label>
                    <input onChange={e => NewSubSprintChangeHandler(e)} name={`${SubSprintType}_title`} placeholder={` please add your ${SubSprintType}'s' title`} value={NewSubSprint.title} ></input>
                    </div>

                    <label>{SubSprintType}' details</label>
                    <textarea onChange={e => NewSubSprintChangeHandler(e)} name={`${SubSprintType}_data`} placeholder={` please add your ${SubSprintType}'s' data`} value={NewSubSprint.sprint_data} ></textarea>
                </>
                : // Comments database is different from the Bugs/.Features as such it requires different prompts
                <>
                    <label>{SubSprintType}</label>
                    <input onChange={e => NewSubSprintChangeHandler(e)} name={`${SubSprintType}_details`} placeholder={` please add your ${SubSprintType}'s' data`} value={NewSubSprint.details} ></input>
                </>}

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

                    <div  className="radio_btns" onChange={NewSubSprintChangeHandler}>
                        <label className="radio">Low<input name="priority" type="radio" value="1"></input></label>
                        <label className="radio">Medium <input name="priority" type="radio" value="2"></input></label>
                        <label className="radio">high <input name="priority" type="radio" value="3"></input></label>
                    </div>

                </div>

            </div>
            <label>Goal Date</label>
            <input type="datetime-local" onChange={e => NewSubSprintChangeHandler(e)} name="goal_date" value={NewSubSprint.goal_date} ></input>
            <button type="submit">Submit</button>

        </SubSprintForm>

    )
}

export default AddSubSprint

const SubSprintForm = styled.form`

display: grid;
  width: 500px;
 height: 500px;
  border: 2px solid #ccc;
  transition: 1.1s ease-out;
box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  filter: blur(0);
  transform: scale(1);
  opacity: 1;
  visibility: visible;
  position: absolute;
   left: 257px;
  right: 0;
  margin-left: auto;
  margin-right: auto;
border-radius: 25px;
    background: #eee;

textarea {
  width: 100%;
  height: 150px;
  padding: 12px 20px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  background-color: #f8f8f8;
  resize: none;
}

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
}
`