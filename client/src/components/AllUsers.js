import { useState, useContext, useEffect } from 'react'
import { CurrentUserContext } from '../custom/CurrentUser';
import LandingPage from './LandingPage';
import styled from 'styled-components';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart } from 'recharts';

function AllUsers() {
    const [FetchedUsers, setFetchedUsers] = useState([])
    const { CurrentUser, setCurrentUser } = useContext(CurrentUserContext);
    const [GraphData, setGraphData] = useState([])

useEffect(() => {
fetch ("/users")
    .then((r) => r.json())
    .then((data) => setFetchedUsers(data))
 
}, [])
    useEffect(() => {
    setGraphData(FetchedUsers.map((user) => user.user_evaluation_data))
    }, [FetchedUsers])


    
    if (!FetchedUsers) return null
    if (CurrentUser === undefined) return <LandingPage />
    if (!CurrentUser.boss) return <LandingPage />
    console.log(GraphData)
    return (
        <>
        <UserContainer>

            {FetchedUsers.map((user)=> 
            <div key={user.id} className="card">
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
           
<div>
                <BarChart
                    width={1000}
                    height={300}
                    data={GraphData}
                    margin={{
                        top: 11,
                        right: 30,
                        left: 20,
                        bottom: 5
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="assigned_tickets" fill="#8884d8" />
                    <Bar dataKey="goals_exceeded" fill="#f26d70" />
                    <Bar dataKey="completed_tickets" fill="#82ca9d" />
                </BarChart>

</div>
        </>
    )
}

export default AllUsers
const UserContainer = styled.div`
width: 100%;
display: grid;
grid-template-columns:repeat(3, 1fr );
border: solid;
height: 50vh;

.card{
padding:1em;
border: solid;
padding: 1px;
text-align: center;
}`