import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { CurrentUserContext } from '../custom/CurrentUser';


function SprintEdit({ fetchedSprint, setEditSprint}) {
    const { CurrentUser, setCurrentUser } = useContext(CurrentUserContext);
    const [SprintEdit, setSprintEdit] = useState(fetchedSprint)

    function SprintEditChangeHandler(e) {
        setSprintEdit({ ...SprintEdit, [e.target.name]: e.target.value});


    }


   async function SprintEditSubmitHandler(e) {
        e.preventDefault()
       let NewSprint = SprintEdit
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



    }


if(!fetchedSprint) return null 
  
    return (

        <SprintEditForm onSubmit={e => SprintEditSubmitHandler(e)}>


            <>
                <div>
                    <label>Sprint Title</label>
                    <input onChange={e => SprintEditChangeHandler(e)} name="sprint_title" placeholder={SprintEdit.sprint_title} value={SprintEdit.sprint_title} ></input>
                </div>

                <label>Sprint Details </label>
                <textarea onChange={e => SprintEditChangeHandler(e)} name="sprint_data" placeholder={SprintEdit.sprint_data} value={SprintEdit.sprint_data} ></textarea>
            </>


            <div className="radio_container" >

                <div className="radios">
                    <label> Urgency:</label>
                    <div className="radio_btns" onChange={SprintEditChangeHandler}>
                        <label className="radio">Low</label> <input defaultChecked={fetchedSprint.urgency === 1} name="urgency" type="radio" value={1}></input>
                        <label className="radio">Medium</label> <input defaultChecked={fetchedSprint.urgency === 2} name="urgency" type="radio" value={2}></input>
                        <label className="radio" >high</label> <input defaultChecked={fetchedSprint.urgency === 3} name="urgency" type="radio" value={3}></input>
                    </div>
                </div>

                <div className="radios">
                    <label> Priority:</label>
                    <div className="radio_btns" onChange={SprintEditChangeHandler}>
                        <label className="radio">Low<input defaultChecked={fetchedSprint.priority === 1} name="priority" type="radio" value={1}></input></label>
                        <label className="radio">Medium <input defaultChecked={fetchedSprint.priority === 2} name="priority" type="radio" value={2}></input></label>
                        <label className="radio">high <input defaultChecked={fetchedSprint.priority === 3} name="priority" type="radio" value={3 }></input></label>
                    </div>
                </div>


            </div>

            <button type="submit">Submit</button>


        </SprintEditForm>

    )
}

export default SprintEdit

const SprintEditForm = styled.form`

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




