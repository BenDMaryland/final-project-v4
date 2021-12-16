import React, { useState, useContext, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { CurrentUserContext } from '../custom/CurrentUser'
import styled from 'styled-components'
function User() {
    const [FetchedUser, setFetchedUser] = useState(null)

    const { CurrentUser, setCurrentUser } = useContext(CurrentUserContext)
    const location = useLocation()

    useEffect(() => {
        fetch(`${location.pathname}`)
            .then((r) => r.json())
            .then((data) => setFetchedUser(data))
    }, [location.pathname, CurrentUser]);


    if (!FetchedUser) return null
    console.log(FetchedUser)
    return (

        <UserPage>


            <div key={FetchedUser.id} className="card">
                {console.log(FetchedUser.user_evaluation_data)}
                <h2>{FetchedUser.name}</h2>
                <h2>Role: {FetchedUser.role}</h2>
                <p>Level: {FetchedUser.level}</p>

                {FetchedUser.highest_impact_ticket ? <p> {FetchedUser.highest_impact_ticket.urgency * FetchedUser.highest_impact_ticket.priority}</p> : null}
                <p>goals missed: {FetchedUser.assigned_to_goal_exceeded}</p>
                <p>completed_sprints_count{FetchedUser.completed_sprints_count}</p>
                <p>assigned_to_count: {FetchedUser.assigned_to_count}</p>



                <div className='boss area'>
                    <button>Fire</button>
                    {FetchedUser.level === 0 ?
                        <>
                            <p> User is new please assign level </p>
                            <p>Regular users can view and Edit all data, but can only delete their own posts </p>
                            <p>Admins have full access and can delete all data </p>
                            <input type="radio" value="1" name="level" /> Regular User

                            <input type="radio" value="2" name="level" /> Admin
                        </>
                        :
                        <>
                            <p>Change Users privlidges</p>
                            <p>Regular users can view and Edit all data, but can only delete their own posts </p>
                            <p>Admins have full access and can delete all data </p>
                            <input type="radio" value="1" name="level" /> Regular User

                            <input type="radio" value="2" name="level" /> Admin
                        </>
                    }



                    <p>Regular User</p>
                    <input defaultChecked={FetchedUser.boss} type="radio" value="true" name="boss" /> Boss

                    <input defaultChecked={!FetchedUser.boss} type="radio" value="false" name="boss" /> User


                </div>

            </div>





        </UserPage>
    )
}

export default User

const UserPage = styled.div`
  height: 50%;


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

`