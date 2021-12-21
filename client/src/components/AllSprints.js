
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { useSpring, animated } from 'react-spring'


function AllSprints({ dragHandler, sprint }) {

    const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } })

    console.log(sprint)
    if (!sprint) return null
    console.log(sprint)
    return (
        <Card draggable={true} onDragStart={e => dragHandler(e, sprint.id)} name={sprint.id} >
            <div id={sprint.completed ? "green" : sprint.was_goal_date_exceeded ? "red" : "blue"}>
                <animated.div style={props} >
                    <Link  draggable={false} className="nav-link" to={`./${sprint.slug}`}   >
                        <h4> {sprint.sprint_title.slice(0, 40)} </h4>
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
height: 100%;
border: solid;
    border: 1px;
    padding: 0;
box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;

padding: 0;
    margin: 1px;
    height: 100px;
    overflow:hidden;
    font-weight: 600;
  background: #323232;
  border:none;
  color: #999;

a{
color: black;
 text-decoration: none;
   


    

}
a:hover,a:focus {
text-decoration:none;
background:#5fa2db;
color: #ffffff;
   text-shadow: 2px 2px 4px #000000;
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
background-color:#fb607f;
width:100%;
height:100%;
    border: solid;
    box-shadow: rgb(38 57 77) 0px 20px 30px -10px;

}

#blue{
background-color:#4474d7;
width:100%;
height:100%;
    border: solid;
    box-shadow: rgb(38 57 77) 0px 20px 30px -10px;

}





`
