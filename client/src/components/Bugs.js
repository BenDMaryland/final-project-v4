import React from 'react'
 import styled from 'styled-components'
function Bugs({bug}) {
    return (
        <Card>
            <h2>{bug.bug_title}</h2>
            <p>{bug.bug_data} </p>
            <p>{bug.created_by.name} </p>
            <p>impact: {bug.impact}</p>
           <p> Progress: {bug.progress} </p>
        </Card>
    )
}

export default Bugs
const Card = styled.div`
border: solid;


`