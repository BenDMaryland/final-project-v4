import React,{useEffect, useState, useContext} from 'react'
import AllSprints from './AllSprints'
import styled from 'styled-components'
import { useSpring, animated } from 'react-spring'
import { CurrentUserContext } from '../custom/CurrentUser'
import LandingPage from './LandingPage'

function Home({ fetchedSprints }) {
    
    const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } })
    const { CurrentUser, setCurrentUser } = useContext(CurrentUserContext)


    if (CurrentUser === undefined) return <LandingPage />
    if (!fetchedSprints) return null
    if (fetchedSprints.length == undefined) return null
    else {
        console.log(fetchedSprints.length)
        return (

            <SectionContainer>
               
                <animated.div className="section"  style={props}>
                    <p> Haven't started </p>
                    <div className="CardContainer"  >
                        {fetchedSprints.filter(sprint => sprint.progress === 0).map((sprint) => <AllSprints key={sprint.id} sprint={sprint} />)}
                    </div>
                </animated.div>

                <animated.div className="section"  style={props}>
                    <p> Working On  </p>
                    <div className="CardContainer"  >
                        {fetchedSprints.filter(sprint => sprint.progress ===1 ).map((sprint) => <AllSprints key={sprint.id} sprint={sprint} />)}
                    </div>
                </animated.div>

                <animated.div  className="section" style={props}>
                    <p> Completed </p>
                    <div className="CardContainer" >
                        {fetchedSprints.filter(sprint => sprint.progress === 2).map((sprint) => <AllSprints key={sprint.id} sprint={sprint} />)}
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