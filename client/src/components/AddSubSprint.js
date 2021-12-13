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
                    <label>{SubSprintType}</label>
                    <input onChange={e => NewSubSprintChangeHandler(e)} name={`${SubSprintType}_title`} placeholder={` please add your ${SubSprintType}'s' title`} value={NewSubSprint.title} ></input>

                    <label>{SubSprintType}' details</label>
                    <textarea onChange={e => NewSubSprintChangeHandler(e)} name={`${SubSprintType}_data`} placeholder={` please add your ${SubSprintType}'s' data`} value={NewSubSprint.sprint_data} ></textarea>
                </>
                : <>
                    <label>{SubSprintType}</label>
                    <input onChange={e => NewSubSprintChangeHandler(e)} name={`${SubSprintType}details`} placeholder={` please add your ${SubSprintType}'s' data`} value={NewSubSprint.details} ></input>
                </> }


            <>
                <label>    Urgency:</label>
                <select name="urgency" onChange={NewSubSprintChangeHandler}>
                    <option value="0">please Select a Urgency</option>
                    <option value="1">Low</option>
                    <option value="2">Medium</option>
                    <option value="3">High</option>
                </select>
            </>
            <>

                <label> Priority:</label>
                <select name="priority" onChange={NewSubSprintChangeHandler}>
                    <option value="0">please Select a Urgency</option>
                    <option value="1">Low</option>
                    <option value="2">Medium</option>
                    <option value="3">High</option>
                </select>
            </>

            <label>Goal Date</label>
            <input type="datetime-local" onChange={e => NewSubSprintChangeHandler(e)} name="goal_date" value={NewSubSprint.goal_date} ></input>
            <button type="submit">Submit</button>

        </SubSprintForm>

    )
}

export default AddSubSprint

const SubSprintForm = styled.form`

display: block;


`