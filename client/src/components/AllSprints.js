import React, { useParams } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { useSpring, animated } from 'react-spring'

function AllSprints({ sprint }) {

    const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } })


    return (
        <Card onClick={() => console.log(sprint.slug)} className="cards">
            <animated.div style={props}  >
            <Link className="nav-link" to={`./${sprint.slug}`}    >


            <h3> {sprint.sprint_title} </h3>
            <p>Impact:  {sprint.impact}</p>
                
                
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
