import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { CurrentUserContext } from '../custom/CurrentUser';


function Comments({ comment, setDOMUpdater}) {
    const { CurrentUser, setCurrentUser } = useContext(CurrentUserContext);

  async   function CommentDeleteHandler(){
        const r = await fetch(`comments/${comment.id}`, {
            method: "DELETE",
        })
        const data = await r.json()
        if (r.ok) {
            setDOMUpdater(Math.random())
        }
        else { alert(data.error) }
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


`