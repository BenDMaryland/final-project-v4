import React from 'react'
import CompletedSprints from './CompletedSprints'
import CurrentSprints from './CurrentSprints'
import NewSprints from './NewSprints'

function Home({ fetchedSprints }) {

    if (!fetchedSprints) return null
    return (

        <div>
            <div>
                <p> Haven't started </p>
                {fetchedSprints.filter(sprint => sprint.progress === 0).map((sprint) => <NewSprints key={sprint.id} sprint={sprint} />)}
              
            </div>
            <div>
                <p> Working on  </p>
                {fetchedSprints.filter(sprint => sprint.progress > 0 && sprint.progress < 100).map((sprint) => <CurrentSprints key={sprint.id} sprint={sprint} />)}
            </div>
            <div>
                <p> Completed </p>
                {fetchedSprints.filter(sprint => sprint.progress == 100).map((sprint) => <CompletedSprints key={sprint.id} sprint={sprint} />)}
            </div>
        </div>
    )
}

export default Home

