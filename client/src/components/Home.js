import React, { useEffect, useState, useContext } from 'react'
import AllSprints from './AllSprints'
import styled from 'styled-components'
import { useSpring, animated } from 'react-spring'
import { CurrentUserContext } from '../custom/CurrentUser'
import LandingPage from './LandingPage'


function Home({ fetchedSprints, setDOMUpdater }) {


    const [DroppedSprintId, setDroppedSprintId] = useState(null)
    const props = useSpring({ to: { opacity: 1 }, from: { opacity: 1 } })
    const { CurrentUser, setCurrentUser } = useContext(CurrentUserContext)


    function dragHandler(e, id) {

        setDroppedSprintId(id)
    }

    async function dropHandler(e, location) {
        e.preventDefault()
        let CompletedComment = null
        let completed = false
        let completedby = null

        if (location === 2) {

            CompletedComment = prompt('Please enter your completed comment')
            if (CompletedComment===null){return null}
console.log(CompletedComment)
            completed = true
            completedby = CurrentUser.id

        }


        const r = await fetch(`/sprints/${DroppedSprintId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "progress": location,
                "assigned_to_id": CurrentUser.id,
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
    if (CurrentUser === null) return <LandingPage />
    if (CurrentUser.level === 0) return <LandingPage />
    if (!fetchedSprints) return null

    if (fetchedSprints.length == undefined) return null

    else {
        return (

            <SectionContainer   >


                <animated.div onDragOver={e => dragOverHandler(e)} onDrop={e => dropHandler(e, 0)} name="0" className="section" style={props}>
                    <h2> Haven't started </h2>
                    <div className="CardContainer"  >
                        {fetchedSprints.filter(sprint => sprint.progress === 0).map((sprint) => <AllSprints dragHandler={dragHandler} key={sprint.id} sprint={sprint} />)}
                    </div>
                </animated.div>

                <animated.div onDragOver={e => dragOverHandler(e)} onDrop={e => dropHandler(e, 1)} name="1" className="section" style={props}>
                    <h2> Working On  </h2>
                    <div className="CardContainer"  >
                        {fetchedSprints.filter(sprint => sprint.progress === 1).map((sprint) => <AllSprints dragHandler={dragHandler} key={sprint.id} sprint={sprint} />)}
                    </div>
                </animated.div>

                <animated.div onDragOver={e => dragOverHandler(e)} onDrop={e => dropHandler(e, 2)} name="2" className="section" style={props}>
                    <h2> Completed </h2>
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
overflow: scroll;
height: 100%;
overflow-x:hidden;

h2{
         font-family: 'Montserrat', sans-serif;
           color: white;
           text-align:center;
           text-shadow: 2px 2px 4px #000000;
}

.CardContainer{
padding:1em;

display: grid;
grid-template-columns:repeat(2, 1fr );
padding: 1px;
text-align: center;


}
.section{

height: 100vh;

}


`