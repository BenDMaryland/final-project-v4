import React,{useState} from 'react'
import styled from 'styled-components'

function Features({DOMHandler,task:{task,priority,completed,id,category,date,urgency}}) {
const [EditRequest, setEditRequest] = useState(true)
const [EditPriorityRequest, setEditPriorityRequest] = useState(true)
const [EditUrgencyRequest, setEditUrgencyRequest] = useState(true)
const [CompletedRequest,setCompletedRequest]= useState(true)
const [CompletedUser, setCompletedUser] = useState("")

const[NewTask, setNewTask]= useState(task) 




console.log(new Date(date).toDateString())






function DeleteHandler(){
    fetch(`http://localhost:3000/tasks/${id}`,{
        method:"DELETE",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify({
                })})
                DOMHandler()}







function editHandler(e){           //////// May want to change name this handles edits to the Tasks 
fetch(`http://localhost:3000/tasks/${id}`,{
method:"PATCH",
headers:{"Content-type":"application/json"},
body:JSON.stringify({
    task:NewTask
})})
.then(response => response.json())
.then(json => console.log(json))
setEditRequest(!EditRequest)
DOMHandler()
}

function priorityEditHandler(e){
    fetch(`http://localhost:3000/tasks/${id}`,{
        method:"PATCH",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify({
            priority:e.target.value
        })})
        .then(response => response.json())
        .then(json => console.log(json))
        setEditPriorityRequest(!EditPriorityRequest)
        DOMHandler()
}



function urgencyEditHandler(e){
    fetch(`http://localhost:3000/tasks/${id}`,{
        method:"PATCH",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify({
            urgency:e.target.value
        })})
        .then(response => response.json())
        .then(json => console.log(json))
        setEditUrgencyRequest(!EditUrgencyRequest)
        DOMHandler()
}









function completeHandler(e){ //////////// this handles when a user hits the completed checkmark 

let completedDate= Date.now()

console.log(date)

    fetch(`http://localhost:3000/completedtasks`,{
        method:"POST",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify({

            
            task:task,
            priority:priority,
            id:id,    
            urgency:urgency,
            date:date,
            completed:true,
            category: category,
            completedDate:completedDate,
            CompletedUser:CompletedUser
        })})
        .then(response => response.json())
        .then(json => console.log(json))
        DOMHandler()
        DeleteHandler()


}

    return (
        <Card  > 
        <nav className="card"  >
        {/* Turerary operator When the user clicks the task it changes to an input and then then sends the data to the edit handler where it can do its thing.  */}
        
           <div className="header"  >
            {EditRequest? <p onClick={()=>setEditRequest(!EditRequest)} >{task}   </p>:
           <> <input placeholder={task} onChange={(e)=>setNewTask(e.target.value)} value={NewTask}></input>
            <button onClick={editHandler}>Edit</button>
            </>
            }
            </div>

            <div className="container"  >


  {EditPriorityRequest? <p  className="container" onClick={()=>setEditPriorityRequest(!EditPriorityRequest)} >Priority: {priority}</p>:
          <>
            <label>Priority </label>
             <select name="priority" onChange={priorityEditHandler}>
                 <option value="0">please Select a Priority</option>
                <option value="1">Low</option>
                <option value="2">Medium</option>
                <option value="3">High</option>
            </select>

            </>

            
            
            } 




{EditUrgencyRequest? <p  className="container" onClick={()=>setEditUrgencyRequest(!EditUrgencyRequest)} >Urgency: {urgency}</p>:

           <> 
           
           <label>    Urgency:</label>
        <select name="urgency" onChange={urgencyEditHandler}>
        <option value="0">please Select a Urgency</option>
                <option value="1">Low</option>
                <option value="2">Medium</option>
                <option value="3">High</option>
            </select>


            
            </>
            } 

<p>{new Date(date).toUTCString()}</p>



{CompletedRequest?
<>
            <label>Completed: </label>
<input type="checkbox" onClick={()=>setCompletedRequest(!CompletedRequest)} defaultChecked={false} ></input>
</>:
<>
<label> Please specify user who completed task: </label>
<input onChange={(e)=>setCompletedUser(e.target.value)} type="text"/>
<button onClick={(e)=>completeHandler()} >Submit</button>
</>


}

            
<br />
<br />
     </div>
     <br />
        </nav>
        </Card>
    )
}
export default Features




const Card = styled.div `
`