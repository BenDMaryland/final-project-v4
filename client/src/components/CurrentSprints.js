import React from 'react'

function CurrentSprints({ sprint }) {
    console.log(sprint)
    return (
        <div>
            <h2> {sprint.sprint_title} </h2>
        </div>
    )
}

export default CurrentSprints
