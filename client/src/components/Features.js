import React, { useContext } from 'react'
import styled from 'styled-components'
import { CurrentUserContext } from '../custom/CurrentUser';


function Features({ feature, setDOMUpdater }) {
    const { CurrentUser, setCurrentUser } = useContext(CurrentUserContext);






    async function FeatureDeleteHandler() {
        const r = await fetch(`/features/${feature.id}`, {
            method: "DELETE",
        })
        const data = await r.json()
        if (r.ok) {
            setDOMUpdater(Math.random())
        }
        else { alert(data.error) }
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

color: #e3e4e6;

    
    background-color: #323232;
   opacity: 1;
    backdrop-filter: blur(10px);
    border: 2px solid rgba(255,255,255,0.1);
    box-shadow: 0 0 40px rgba(8,7,16,0.6);
    padding: 50px 35px;
    padding-top:1em;
    border-radius: 20px;

`