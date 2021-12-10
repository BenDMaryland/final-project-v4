import React, { useState } from 'react'

function Sprints({ fetchedSprints }) {
    console.log(fetchedSprints)
    if(!fetchedSprints) return null
    return (

        fetchedSprints.map(sprint => {
            return (
                <div>
                    <h1>{sprint.sprint_title}</h1>
                </div>
            )
        })
    )






}

export default Sprints
