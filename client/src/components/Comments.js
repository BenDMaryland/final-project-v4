import React, { useContext } from 'react'
import styled from 'styled-components'
import { CurrentUserContext } from '../custom/CurrentUser';


function Comments({ comment, setDOMUpdater}) {
    const { CurrentUser, setCurrentUser } = useContext(CurrentUserContext);

  async   function CommentDeleteHandler(){
        const r = await fetch(`/comments/${comment.id}`, {
            method: "DELETE",
        })
        const data = await r.json()
        if (r.ok) {
      
        }
        else { alert(data.error) }
      setDOMUpdater(Math.random())
    }

async function commentEditHandler(e){

    console.log("old n busted", comment.completed)
    console.log("new hotness",!comment.completed)

    const response = await fetch(`/comments/${comment.id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ "completed": !comment.completed,
    "completed_by_id": CurrentUser.id})
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
            <h2>{comment.comment_details}</h2>
            <p>{comment.created_by.name} </p>

            {CurrentUser.level >= 1 ? <><label>completed</label>  <input onChange={e => commentEditHandler(e)}  defaultChecked={comment.completed} type="checkbox" ></input> </>:<p> no edit </p>}
            {CurrentUser.level === 2 || comment.created_by.id === CurrentUser.id ? <button onClick={() => CommentDeleteHandler()}>you can delete</button> : <p>You can't delete </p>}
        </Card>
    )
}

export default Comments


const Card=styled.div`
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