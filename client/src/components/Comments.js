import React from 'react'
import styled from 'styled-components'

function Comments({comment}) {
    console.log(comment)
    return (
        <Card>
            <h2>{comment.comment_details}</h2>
            <p>{comment.created_by.name} </p>
            <p>impact: {comment.impact}</p>
            <p> Progress: {comment.progress} </p>
        </Card>
    )
}

export default Comments


const Card=styled.div`
border: solid;


`