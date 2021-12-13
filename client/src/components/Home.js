import React from 'react'
import CompletedSprints from './CompletedSprints'
import CurrentSprints from './CurrentSprints'
import NewSprints from './NewSprints'
import styled from 'styled-components'

function Home({ fetchedSprints }) {

    if (!fetchedSprints) return null
    return (

        <SectionContainer>

            <div>
                <p> Haven't started </p>
                <div className="CardContainer"  >
                    {fetchedSprints.filter(sprint => sprint.progress === 0).map((sprint) => <NewSprints key={sprint.id} sprint={sprint} />)}
                </div>
            </div>

            <div>
                <p> Working On  </p>
                <div className="CardContainer"  > 
                    {fetchedSprints.filter(sprint => sprint.progress > 0 && sprint.progress < 100).map((sprint) => <CurrentSprints key={sprint.id} sprint={sprint} />)}
                </div>
            </div>

            <div>
                <p> Completed </p>
                <div className="CardContainer" >
                    {fetchedSprints.filter(sprint => sprint.progress == 100).map((sprint) => <CompletedSprints key={sprint.id} sprint={sprint} />)}
                </div>
            </div>

        </SectionContainer>
    )
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
grid-template-columns:repeat(3, 1fr );

}

`