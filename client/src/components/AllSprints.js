import React, { useParams, useCallback } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { useSpring, animated } from 'react-spring'
import { useDropzone } from 'react-dropzone'

function AllSprints({ dragHandler, sprint }) {

    const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } })

    return (
        <Card onDragStart={e=>dragHandler(e,sprint.id)} name={sprint.id}  className="cards">
            <animated.div  style={props}  >
            <Link className="nav-link" to={`./${sprint.slug}`}    >


            <h3> {sprint.sprint_title} </h3>
            <p>Impact:  {sprint.impact}</p>
                <p>{sprint.progress}</p>
                
        </Link>
                </animated.div>
        </Card>
    )
}

export default AllSprints


const Card = styled.div`

border: solid;
margin: 1px;

a{
color: black;


}

`
