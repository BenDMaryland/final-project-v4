import React, { useEffect, useState, useContext, useCallback } from 'react'
import AllSprints from './AllSprints'
import styled from 'styled-components'
import { useSpring, animated } from 'react-spring'
import { CurrentUserContext } from '../custom/CurrentUser'
import LandingPage from './LandingPage'
import { useDropzone } from 'react-dropzone'

function Home({ fetchedSprints, setDOMUpdater }) {


    const [DroppedSprintId, setDroppedSprintId] = useState(null)
    const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } })
    const { CurrentUser, setCurrentUser } = useContext(CurrentUserContext)

    function dragHandler(e, id) {
        console.log("sprint is is ", id)
        setDroppedSprintId(id)
    }

    async function dropHandler(e, location) {
        e.preventDefault()
        let CompletedComment = null
        let completed = false
        let completedby = null

        if (location === 2) {

            CompletedComment = prompt('Please enter your completed comment')
            completed = true
            completedby = CurrentUser.id
        }


        const r = await fetch(`sprints/${DroppedSprintId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "progress": location,
                "completed_by_id": completedby,
                "completed": completed,
                "completed_comment": CompletedComment
            })
        });
        const data = r.json();

        if (r.ok) { }
        else { alert(data.error) }
        let variable = await data
        setDOMUpdater(variable)
    }


    function dragOverHandler(e, location) {
        e.preventDefault()

    }


    if (CurrentUser === undefined) return <LandingPage />
    if (!fetchedSprints) return null
    if (fetchedSprints.length == undefined) return null
    else {
        console.log(fetchedSprints.length)
        return (

            <SectionContainer   >

                <animated.div onDragOver={e => dragOverHandler(e)} onDrop={e => dropHandler(e, 0)} name="0" className="section" style={props}>
                    <p> Haven't started </p>
                    <div className="CardContainer"  >
                        {fetchedSprints.filter(sprint => sprint.progress === 0).map((sprint) => <AllSprints dragHandler={dragHandler} key={sprint.id} sprint={sprint} />)}
                    </div>
                </animated.div>

                <animated.div onDragOver={e => dragOverHandler(e)} onDrop={e => dropHandler(e, 1)} name="1" className="section" style={props}>
                    <p> Working On  </p>
                    <div className="CardContainer"  >
                        {fetchedSprints.filter(sprint => sprint.progress === 1).map((sprint) => <AllSprints dragHandler={dragHandler} key={sprint.id} sprint={sprint} />)}
                    </div>
                </animated.div>

                <animated.div onDragOver={e => dragOverHandler(e)} onDrop={e => dropHandler(e, 2)} name="2" className="section" style={props}>
                    <p> Completed </p>
                    <div className="CardContainer" >
                        {fetchedSprints.filter(sprint => sprint.progress === 2).map((sprint) => <AllSprints dragHandler={dragHandler} key={sprint.id} sprint={sprint} />)}
                    </div>
                </animated.div>

            </SectionContainer>

        )
    }
}

export default Home

const SectionContainer = styled.div`
width: 100%;
display: grid;
grid-template-columns:repeat(3, 1fr );
border: solid;
height: 100vh;

.CardContainer{
padding:1em;
border: solid;
display: grid;
grid-template-columns:repeat(2, 1fr );
padding: 1px;
text-align: center;
}
.section{
border: solid;
height: 100vh;

}

`