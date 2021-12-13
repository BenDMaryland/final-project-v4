import React, { useParams } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

function NewSprints({ sprint }) {
    console.log(sprint)



    return (
        <Card onClick={() => console.log(sprint.slug)} className="cards">
            <Link className="nav-link" to={`./${sprint.slug}`}    >


            <h2> {sprint.sprint_title} </h2>
                
                
        </Link>
        </Card>
    )
}

export default NewSprints


const Card = styled.div`

border: solid;

`
