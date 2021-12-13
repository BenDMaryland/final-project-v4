import React, { useContext, useState } from 'react'
import { CurrentUserContext } from '../custom/CurrentUser';





function SprintForm() {
    const { CurrentUser, setCurrentUser } = useContext(CurrentUserContext);
    const [NewSprint, setNewSprint] = useState({
        sprint_title: "",
        sprint_data: "",
        goal_date: "",
        urgency: "1",
        priority: "1"
    })

      function NewSprintChangeHandler(e) {
     
        setNewSprint(data => data = { ...data, [e.target.name]: e.target.value })
    }

    async   function NewSprintSubmitHandler(e){
        e.preventDefault()
        setNewSprint({ ...NewSprint, ["created_by_id"]: CurrentUser.id})
console.log(NewSprint)
        const response = await fetch("sprints", {
            method:   'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(NewSprint)
        });
        const data = await response.json();

        if (response.ok) {
           console.log("ok")
        } else {
            alert(data.errors)
        }
    }


    return (
        <form onSubmit={e=>NewSprintSubmitHandler(e)}>
            <label>sprint</label>
            <input onChange={e => NewSprintChangeHandler(e)} name="sprint_title" placeholder="Please add your Sprint's title" value={NewSprint.sprint_title} ></input>
            <label>Details</label>
            <textarea onChange={e => NewSprintChangeHandler(e)} name="sprint_data" placeholder="Please add your Sprint's details" value={NewSprint.sprint_details} ></textarea>


            <>

                <label>    Urgency:</label>
                <select name="urgency" onChange={NewSprintChangeHandler}>
                    <option value="0">please Select a Urgency</option>
                    <option value="1">Low</option>
                    <option value="2">Medium</option>
                    <option value="3">High</option>
                </select>
            </>
            <>

                <label> Priority:</label>
                <select name="priority" onChange={NewSprintChangeHandler}>
                    <option value="0">please Select a Urgency</option>
                    <option value="1">Low</option>
                    <option value="2">Medium</option>
                    <option value="3">High</option>
                </select>
            </>

            <label>Goal Date</label>
            <input type="datetime-local" onChange={e => NewSprintChangeHandler(e)} name="goal_date"value={NewSprint.goal_date} ></input>
<button type="submit">Submit</button>
        </form>
    )
}

export default SprintForm




