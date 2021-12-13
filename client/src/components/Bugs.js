import React from 'react'

function Bugs({bug}) {
    console.log(bug)
    return (
        <div>
            <h2>{bug.bug_title}</h2>
        </div>
    )
}

export default Bugs
