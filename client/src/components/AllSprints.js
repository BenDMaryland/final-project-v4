import React, { useParams, useCallback } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { useSpring, animated } from 'react-spring'


function AllSprints({ dragHandler, sprint }) {

    const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } })

    if (!sprint)return null 
    console.log(sprint.goal_date, sprint.was_goal_date_exceeded )
    return (
        <Card draggable={true}  onDragStart={e => dragHandler(e, sprint.id)} name={sprint.id} >
            <div id={sprint.completed ? "green" : sprint.was_goal_date_exceeded ? "red": "blue"}>
            <animated.div  style={props} >
                <Link className="nav-link" to={`./${sprint.slug}`}   >


                    <h4> {sprint.sprint_title} </h4>
                    <p>Impact:  {sprint.impact}</p>
                    {sprint.assigned_to_name ? <p>{sprint.assigned_to_name}</p> : <p>No one is Working This!</p>}

                </Link>
            </animated.div>
            </div>
        </Card>
    )
}

export default AllSprints


const Card = styled.div`

border: solid;
    border: 1px;
    padding: 0;
box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;

padding: 0;
    margin: 1px;
    height: 100px;
    overflow:hidden;

a{
color: black;
}

h4{
  margin-top:0;
  margin-bottom:0;
}
p{
  margin-top:0;   
}

#green{
background-color:#81c784;
width:100%;
height:100%;
    border: solid;
    box-shadow: rgb(38 57 77) 0px 20px 30px -10px;
    
} 
#red{
background-color:#e34f4c;
width:100%;
height:100%;
    border: solid;
    box-shadow: rgb(38 57 77) 0px 20px 30px -10px;

}

#blue{
background-color:#cae7f1;
width:100%;
height:100%;
    border: solid;
    box-shadow: rgb(38 57 77) 0px 20px 30px -10px;

}





`
