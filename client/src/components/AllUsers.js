import { useState, useContext, useEffect } from 'react'
import { CurrentUserContext } from '../custom/CurrentUser';
import LandingPage from './LandingPage';
import styled from 'styled-components';

function AllUsers() {
    const [FetchedUsers, setFetchedUsers] = useState([])
    const { CurrentUser, setCurrentUser } = useContext(CurrentUserContext);


useEffect(() => {
fetch ("/users")
    .then((r) => r.json())
    .then((data) => setFetchedUsers(data))

}, [])

    if (!FetchedUsers) return null
    if (CurrentUser === undefined) return <LandingPage />
    console.log(FetchedUsers)
    return (
        <UserContainer>

            {FetchedUsers.map((user)=> 
            <div className="card">
            <h2>{user.name}</h2>
                    <h2>Role: {user.role}</h2>
                    <p>Level: {user.level}</p>
                    {user.boss?  <p>Boss</p>:null}
                    {user.highest_impact_ticket? <p> {user.highest_impact_ticket.urgency * user.highest_impact_ticket.priority   }</p>:null}
                    <p>goals missed: {user.assigned_to_goal_exceeded}</p>
                    <p>completed_sprints_count{user.completed_sprints_count}</p>
                    <p>assigned_to_count: {user.assigned_to_count}</p>
                
            </div>
            )}
        </UserContainer>
    )
}

export default AllUsers
const UserContainer = styled.div`
width: 100%;
display: grid;
grid-template-columns:repeat(3, 1fr );
border: solid;
height: 100vh;

.card{
padding:1em;
border: solid;
padding: 1px;
text-align: center;
}`