import React, { useState, useContext, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import AddSubSprint from './AddSubSprint'
import Bugs from './Bugs'
import Comments from './Comments'
import Features from './Features'
import styled from 'styled-components'
import SprintEdit from './SprintEdit'
import LandingPage from "./LandingPage"


import { CurrentUserContext } from '../custom/CurrentUser'

function Sprints( ) {
    const [addNewSubSprint, setaddNewSubSprint] = useState(false)
    const [SubSprintType, setSubSprintType] = useState("null")
    const [EditSprint, setEditSprint] = useState(false)
    const [fetchedSprint, setFetchedSprint] = useState(null)
    const { CurrentUser, setCurrentUser } = useContext(CurrentUserContext)
    const [DOMUpdater, setDOMUpdater] = useState(0)
    const location = useLocation()


    useEffect(() => {
            fetch(`${location.pathname}`)
                .then((r) => r.json())
                .then((data) => setFetchedSprint(data))
        }, [location.pathname, CurrentUser, DOMUpdater]);


    
    function subSprintSelector(e) {
        setSubSprintType(e.target.value)
        setEditSprint(false)
        setaddNewSubSprint(true)
    }

    function sprintEditSelector(e) {
        setaddNewSubSprint(false)
        setEditSprint(true)
    }

    async function sprintDeleteHandler() {
        const r = await fetch(`/sprints/${fetchedSprint.id}`, {
            method: "DELETE",  })
       const  data = await r.json()
        if (r.ok) {
            setDOMUpdater(Math.random())
        }
        else { alert(data.error) }

    }

if (!fetchedSprint) return null
if (CurrentUser === undefined) return <LandingPage />

return (
  
    <FullContainer FullContainer>
        <SprintContainer>
            <div>
                <h1>{fetchedSprint.sprint_title} </h1>
                <h3>{fetchedSprint.sprint_data}</h3>
                <p>Total Impact {fetchedSprint.impact}</p>
                <p>{fetchedSprint.goal_date}</p>
                <p> Created by: {fetchedSprint.created_by.name}</p>
                {CurrentUser.level == 0 ? null : <button onClick={e => sprintEditSelector(e)}>Edit Sprint</button>}
                {EditSprint ? <SprintEdit setEditSprint={setEditSprint} fetchedSprint={fetchedSprint} /> : null}
                <p>Find a way to stop deleting by accident. </p>
                {/* {CurrentUser.level === 2 || created_by.id === CurrentUser.id ? <button onClick={() => sprintDeleteHandler()}>you can delete</button> : null} */}

            </div>
            {CurrentUser.level == 0 ? null :
                <div>
                    <label>Add SubSprint </label>
                    <select name="subsprint" onChange={e => subSprintSelector(e)}>
                        <option value="0">please Select a SubSprint</option>
                        <option value="bug">Bug</option>
                        <option value="feature">Feature</option>
                        <option value="comment">Comment</option>
                    </select>

                    {addNewSubSprint ? <AddSubSprint setDOMUpdater={setDOMUpdater} id={fetchedSprint.id} SubSprintType={SubSprintType} setaddNewSubSprint={setaddNewSubSprint} /> : null}
                </div>}
        </SprintContainer>

        <CardContainer>
            <div className='card' >
                <h1> Comments </h1>
                <div className="card">
                    {fetchedSprint.comments.map((comment) => <Comments setDOMUpdater={setDOMUpdater} key={comment.id} comment={comment} />)}
                </div>
            </div>

            <div >
                <h1> Features  </h1>
                <div className="card">
                    {fetchedSprint.features.map((feature) => <Features setDOMUpdater={setDOMUpdater} key={feature.id} feature={feature} />)}
                </div>
            </div>

            <div>
                <h1> Bugs </h1>
                <div className="card">
                    {fetchedSprint.bugs.map((bug) => <Bugs setDOMUpdater= { setDOMUpdater }  key={bug.id} bug={bug} />)}
                </div >
            </div>
        </CardContainer>
    </FullContainer>
)
}

export default Sprints

const FullContainer= styled.div`
position: absolute;
width: 90%;

h1{

           font-family: 'Montserrat', sans-serif;
           color: white;
           text-shadow: 2px 2px 4px #000000;
text-align:center;
}
`







const CardContainer = styled.div`
width: 100%;
display: grid;
grid-template-columns:repeat(3, 1fr );
height: 100%;
margin:auto;
height: 100%;
margin: auto;
top: 400px;
position: relative;
width: 100%;

.card{
margin: 2%;
display: grid;
grid-template-columns:repeat(1, 1fr );

}


`
const SprintContainer = styled.div`
 text-align:center;
color: #e3e4e6;
   height: 300px;
    width: 600px;
    background-color: #323232;
    position: absolute;
    transform: translate(-50%,-50%);
    top: 150%;
    left: 40%;
   opacity: 1;
    backdrop-filter: blur(10px);
    border: 2px solid rgba(255,255,255,0.1);
    box-shadow: 0 0 40px rgba(8,7,16,0.6);
    padding: 50px 35px;
    padding-top:1em;
    border-radius: 20px;
    
`