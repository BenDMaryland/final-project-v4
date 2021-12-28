import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { CurrentUserContext } from '../custom/CurrentUser';


function SprintEdit({ fetchedSprint, setEditSprint, setDOMUpdater }) {
    const { CurrentUser, setCurrentUser } = useContext(CurrentUserContext);
    const [SprintEdit, setSprintEdit] = useState(fetchedSprint)

    function SprintEditChangeHandler(e) {
        setSprintEdit({ ...SprintEdit, [e.target.name]: e.target.value });
console.log(SprintEdit)
    }


    async function SprintEditSubmitHandler(e) {
        e.preventDefault()
        let NewSprint = SprintEdit
        NewSprint = { ...NewSprint, "assigned_to_id": CurrentUser.id }
        const response = await fetch(`${fetchedSprint.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(NewSprint)
        });
        const data = await response.json();

        if (response.ok) {
            console.log("ok")
        } else {
            alert(data.error)
        }
        setEditSprint(false)
        setDOMUpdater(Math.random())


    }


    if (!fetchedSprint) return null

    return (

        <SprintEditForm onSubmit={e => SprintEditSubmitHandler(e)}>


            <>
                <div>

                    <input className="main" onChange={e => SprintEditChangeHandler(e)} name="sprint_title" placeholder={SprintEdit.sprint_title} value={SprintEdit.sprint_title} ></input>
                </div>


                <textarea className="main" onChange={e => SprintEditChangeHandler(e)} name="sprint_data" placeholder={SprintEdit.sprint_data} value={SprintEdit.sprint_data} ></textarea>
            </>


            <div className="radio_container" >


                <select name="urgency" className="impact" onChange={SprintEditChangeHandler} >
                    <option value={SprintEdit.urgency} >Please Select your Urgency </option>
                    <option value={1}>Low</option>
                        <option value={2}>Medium</option>
                        <option value={3}>High</option>
                        </select>
                      
       
                <select name="priority" className="impact" onChange={SprintEditChangeHandler} >
                    <option value={SprintEdit.priority} >Please Select your Priority</option>
                        <option value={1}>Low</option>
                        <option value={2}>Medium</option>
                        <option value={3}>High</option>
                    </select>
          


            </div>

            <button type="submit">Submit</button>


        </SprintEditForm>

    )
}

export default SprintEdit

const SprintEditForm = styled.form`

color: #e3e4e6;
   height: 400px;
    width: 600px;
    background-color: #323232;
    position: absolute;
  transform: translate(-50%,-50%);
    top: 170%;
    left: 50%;
   opacity: 1;
    backdrop-filter: blur(10px);
    border: 2px solid rgba(255,255,255,0.1);
    box-shadow: 0 0 40px rgba(8,7,16,0.6);
    padding: 50px 35px;
    padding-top:1em;
    /* border-radius: 20px; */
  .main {
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
    padding: 5px;
margin-right:10px;
margin-left:10px;
    width: 100%;
    background-color: #8b949e;
    color: #080710;
    padding: 15px 0;
    font-size: 18px;
    font-weight: 600;
    border-radius: 5px;
    cursor: pointer;
}

.radio_container{
display: grid;
grid-template-columns:repeat(2, 1fr );
height: fit-content;

}




label{
   align-self: center;
}
}


`




