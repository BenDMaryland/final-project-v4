import React from 'react'

function CompletedFeatures({DOMHandler,Completedtasks:{task,priority,completed,id,category}}) {
    return (
        <div>
            <p>{task}</p> 
        </div>
    )
}

export default CompletedFeatures

