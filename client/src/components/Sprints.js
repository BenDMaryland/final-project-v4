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
        <CardContainer>
            <div className="card"> 
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

                <div>
                    <h1> Comments </h1>
                    {comments.map((comment) => <Comments key={id} comment={comment} />)}
                </div>
            </div>

            <div className="card">
                <h1> Features  </h1>
                {features.map((feature) => <Features key={id} feature={feature} />)}
            </div>

            <div className="card">
                <h1> Bugs </h1>
                {bugs.map((bug) => <Bugs key={id} bug={bug} />)}
            </div >

        </CardContainer>
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

}


`