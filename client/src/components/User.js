import React, { useState, useContext, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { CurrentUserContext } from '../custom/CurrentUser'
import styled from 'styled-components'
function User() {
    const [FetchedUser, setFetchedUser] = useState(null)

    const { CurrentUser, setCurrentUser } = useContext(CurrentUserContext)
    const [UserFormData, setUserFormData] = useState(null)
    const [fireModalShow, setfireModalShow] = useState(false)
    const location = useLocation()
    const [sadCat, setsadCat] = useState("https://i.pinimg.com/originals/3e/84/09/3e8409dcdd012b4bcda84a710f2d1052.jpg")


    useEffect(() => {
        fetch(`${location.pathname}`)
            .then((r) => r.json())
            .then((data) => setFetchedUser(data))
    }, [location.pathname, CurrentUser]);



    function userChangeHandler(e) {

        setUserFormData(data => data = { ...data, [e.target.name]: e.target.value })

    }

    async function userSubmiteHandler(e) {
        e.preventDefault()
        const response = await fetch(`${FetchedUser.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(UserFormData)
        });
        const data = await response.json();

        if (response.ok) {
            console.log("ok")
        } else {
            alert(data.errors)
        }
    }
    async function UserFireHandler() {
        const r = await fetch(`/users/${FetchedUser.id}`, {
            method: "DELETE",
        })
        const data = await r.json()
        if (r.ok) {
            console.log("ok!")
        }
        else { alert(data.error) }

    }

    if (!FetchedUser) return null

    return (
        <UserPage>
            <div key={FetchedUser.id} className="card">

                <h2>{FetchedUser.name}</h2>
                <h2> {FetchedUser.role}</h2>

                {FetchedUser.highest_impact_ticket ?
                 <p> Hieghtest impact ticket number: {FetchedUser.highest_impact_ticket.urgency * FetchedUser.highest_impact_ticket.priority}</p>
                  : null}
                <p>goals missed: {FetchedUser.assigned_to_goal_exceeded}</p>
                <p>completed_sprints_count{FetchedUser.completed_sprints_count}</p>
                <p>assigned_to_count: {FetchedUser.assigned_to_count}</p>

                <div className='boss area'>
                    {fireModalShow ?
                        <div className='fire_modal'>
                            <img src={sadCat}></img>
                            <p>Are you sure?</p>
                            <button className='fire' onClick={() => UserFireHandler()} onMouseLeave={() => setsadCat("https://i.pinimg.com/originals/3e/84/09/3e8409dcdd012b4bcda84a710f2d1052.jpg")} onMouseOver={() => setsadCat("https://pbs.twimg.com/profile_images/1163440365069901824/6K-65_Ja_400x400.jpg")}>Yes</button>
                            <button className='fire' onClick={() => setfireModalShow(false)} >No</button>
                        </div>
                        : <button onClick={() => setfireModalShow(true)}>Fire</button>}

                    <form onSubmit={e => userSubmiteHandler(e)}>
                        <div name="level" >
                            {FetchedUser.level === 0 ? <p>Please assign a user level </p> : <p>Change Users privlidges</p>}
                            <p>Regular users can view and Edit all data, but can only delete their own posts </p>
                            <p>Admins have full access and can delete all data </p>
                            <input type="radio" onClick={e => userChangeHandler(e)} defaultChecked={FetchedUser.level === 1} value="1" name="level" /> Regular User
                            <input type="radio" onClick={e => userChangeHandler(e)} defaultChecked={FetchedUser.level === 2} value="2" name="level" /> Admin
                        </div>

                        <div name="boss" >
                            {FetchedUser.boss ? <p>Boss</p> : <p>Regular User</p>}
                            <input onClick={e => userChangeHandler(e)} defaultChecked={FetchedUser.boss} type="radio" value="true" name="boss" /> Boss
                            <input onClick={e => userChangeHandler(e)} defaultChecked={!FetchedUser.boss} type="radio" value="false" name="boss" /> User
                            <button>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </UserPage>
    )
}

export default User

const UserPage = styled.div`
  height: fit-content;


.card{
    height: 100%;
        border: 2px solid #292d3e;
    box-shadow: 0 0 40px rgba(8,7,16,0.6);
color: white;
background-color:#323232;
padding:1em;
border: solid;
padding: 1px;
text-align: center;
}
img{
      height: 300px;
    width: 300px;
}

.fire_modal{color: #e3e4e6;
   height: 400px;
    width: 400px;
    background-color: #323232;
    position: absolute;
    transform: translate(-50%,-50%);
    top: 50%;
    left: 55%;
   opacity: 1;
    backdrop-filter: blur(10px);
    border: 2px solid rgba(255,255,255,0.1);
    box-shadow: 0 0 40px rgba(8,7,16,0.6);
    padding: 50px 35px;
    padding-top:1em;
    border-radius: 20px;}

    .fire{
   
    width: 90%;
    background-color: #8b949e;
    color: #080710;
    padding: 15px 0;
    font-size: 18px;
    font-weight: 600;
    border-radius: 5px;
    cursor: pointer;
}
`