import React from 'react'
import styled from 'styled-components'

function NewSprints({ sprint }) {
    console.log(sprint)
    return (
        <Card className="cards">

          
                <h2> {sprint.sprint_title} </h2>
          

        </Card>
    )
}

export default NewSprints


const Card = styled.div`

border: solid;

`
