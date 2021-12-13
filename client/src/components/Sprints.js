import React from 'react'

function Sprints({fetchedSprint}) {
    console.log(fetchedSprint)

    return (
        <div>
            <h1>We made it</h1>
            <h1>{fetchedSprint.sprint_title} </h1>
        </div>
    )
}

export default Sprints
