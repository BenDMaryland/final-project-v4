import React, { useState } from 'react'
import AddSubSprint from './AddSubSprint'
import Bugs from './Bugs'
import Comments from './Comments'
import Features from './Features'
import styled from 'styled-components'

function Sprints({ fetchedSprint: { sprint_title, progress, urgency, priority, impact, sprint_data, bugs, features, created_by, goal_date, comments, id } }) {
    const [addNewSubSprint, setaddNewSubSprint] = useState(false)
    const [SubSprintType, setSubSprintType] = useState("null")

    function subSprintSelector(e) {
        setSubSprintType(e.target.value)
        setaddNewSubSprint(true)
    }

    if (!sprint_title) return null

    return (
<>
       
          <SprintContainer>
                <div>
                    <h1>{sprint_title} </h1>
                    <h3>{sprint_data}</h3>
                    <p>Total Impact {impact}</p>
                    <p>{goal_date}</p>
                    <p> Created by: {created_by.name}</p>
                </div>

                <div>
                    <label>Add SubSprint </label>
                    <select name="subsprint" onChange={e => subSprintSelector(e)}>
                        <option value="0">please Select a SubSprint</option>
                        <option value="bug">Bug</option>
                        <option value="feature">Feature</option>
                        <option value="comment">Comment</option>
                    </select>
                    {addNewSubSprint ? <AddSubSprint id={id} SubSprintType={SubSprintType} setaddNewSubSprint={setaddNewSubSprint} /> : null}
                </div>
            </SprintContainer>

 <CardContainer>
                <div >
                    <h1> Comments </h1>
                    <div className="card">
    
                        {comments.map((comment) => <Comments key={comment.id} comment={comment} />)}
                    </div>
                </div>
          

            <div >
                <h1> Features  </h1>
                <div className="card">
                    {features.map((feature) => <Features key={feature.id} feature={feature} />)}
                </div>
            </div>

            <div>
                <h1> Bugs </h1>
                <div className="card">
                    {bugs.map((bug) => <Bugs key={bug.id} bug={bug} />)}
                </div >
            </div>
        </CardContainer>

        </>
    )
}

export default Sprints

const CardContainer = styled.div`
width: 100%;
display: grid;
grid-template-columns:repeat(3, 1fr );
border: solid;


.card{
border: solid;
display: grid;
grid-template-columns:repeat(2, 1fr );
}


`
const SprintContainer= styled.div`
 text-align:center;

`