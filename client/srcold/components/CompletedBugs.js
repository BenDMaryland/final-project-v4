import React, { useState } from 'react'

function CompletedBugs({DOMHandler,Completedtasks:{task,priority,completed,id,category,urgency,date,completedDate,CompletedUser}}) {
const [TimeTakenToComplete, setTimeTakenToComplete] = useState("")

console.log(60000/(completedDate-date))

    return (
        <div>
            <p>{task}</p>
            <p> Priority: {priority}  </p>
            <p> urgency:{urgency}    </p>
            <p> Total value: {urgency * priority}     </p>
            <p>    Date Submited: {new Date(date).toUTCString()}   </p>
            <p>    Date Completed: {new Date(completedDate).toUTCString()}     </p>
            <p>                  </p>
            <p>   Completed by: {CompletedUser}     </p>

            <br/>
        </div>
    )
}

export default CompletedBugs



// "task": "Testing feature that adds date and user to completed json ",
// "priority": "1",
// "id": 37,
// "urgency": "1",
// "date": 1635702680086,
// "completed": true,
// "category": "bugs",
// "completedDate": 1635702715876,
// "CompletedUser": "Ben"