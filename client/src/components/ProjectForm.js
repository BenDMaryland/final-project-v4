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
        console.log(CurrentUser)
        console.log(newProject)
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

const FormProject = styled.form``

//   create_table "projects", force: :cascade do | t |
//     t.string "name"
//     t.string "summary"
// t.string "progress"
// t.string "integer"
// t.datetime "created_at", precision: 6, null: false
// t.datetime "updated_at", precision: 6, null: false
// t.bigint "belongs_to_id"
// t.index["belongs_to_id"], name: "index_projects_on_belongs_to_id"
// end
