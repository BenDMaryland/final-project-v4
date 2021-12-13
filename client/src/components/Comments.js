import React from 'react'

function Comments({comment}) {
    console.log(comment)
    return (
        <div>
            <h2>{comment.comment_details}</h2>
        </div>
    )
}

export default Comments
