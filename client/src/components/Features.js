import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { CurrentUserContext } from '../custom/CurrentUser';


function Features({ feature }) {
    const { CurrentUser, setCurrentUser, setDOMUpdater } = useContext(CurrentUserContext);






    async function FeatureDeleteHandler() {
        const r = await fetch(`/features/${feature.id}`, {
            method: "DELETE",
        })
        const data = await r.json()
    ///// add someway to rerender dom 
        setDOMUpdater(Math.random())
        
    }

    async function featureEditHandler(e) {

        console.log("old n busted", feature.completed)
        console.log("new hotness", !feature.completed)

        const response = await fetch(`/features/${feature.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "completed": !feature.completed,
                "completed_by_id": CurrentUser.id
            })
        });
        const data = await response.json();

        if (response.ok) {
            console.log("ok")
        } else {
            alert(data.errors)
        }
        setDOMUpdater(Math.random())
    }
    return (
        <Card>
            <h2>{feature.feature_title}</h2>
            <p>{feature.feature_data} </p>
            <p>{feature.created_by.name} </p>
            <p>impact: {feature.impact}</p>
            <p> Progress: {feature.progress} </p>
            {CurrentUser.level >= 1 ? <><label>completed</label>  <input onChange={e => featureEditHandler(e)} defaultChecked={feature.completed} type="checkbox" ></input> </> : <p> no edit </p>}
            {CurrentUser.level === 2 || feature.created_by.id === CurrentUser.id ? <button onClick={() => FeatureDeleteHandler()}>you can delete</button> : <p>You can't delete </p>}
        </Card>
    )
}

export default Features
const Card = styled.div`
border: solid;


`