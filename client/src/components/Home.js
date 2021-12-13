import React,{useEffect, useState} from 'react'
import AllSprints from './AllSprints'
import styled from 'styled-components'
import { useSpring, animated } from 'react-spring'


function Home({ fetchedSprints }) {
    
    const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } })


    if (!fetchedSprints) return null
    if (fetchedSprints.length == undefined) return null
    else {
        console.log(fetchedSprints.length)
        return (

            <SectionContainer>
               
                <animated.div style={props}>
                    <p> Haven't started </p>
                    <div className="CardContainer"  >
                        {fetchedSprints.filter(sprint => sprint.progress === 0).map((sprint) => <AllSprints key={sprint.id} sprint={sprint} />)}
                    </div>
                </animated.div>

                <animated.div style={props}>
                    <p> Working On  </p>
                    <div className="CardContainer"  >
                        {fetchedSprints.filter(sprint => sprint.progress > 0 && sprint.progress < 100).map((sprint) => <AllSprints key={sprint.id} sprint={sprint} />)}
                    </div>
                </animated.div>

                <animated.div style={props}>
                    <p> Completed </p>
                    <div className="CardContainer" >
                        {fetchedSprints.filter(sprint => sprint.progress == 100).map((sprint) => <AllSprints key={sprint.id} sprint={sprint} />)}
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

.CardContainer{
padding:1em;
border: solid;
display: grid;
grid-template-columns:repeat(2, 1fr );
padding: 1px;
text-align: center;
}

`