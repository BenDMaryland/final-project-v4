import React,{useState,useEffect} from 'react'

function MyProgress({fetchedTasks})  {
 
const [CompletedCount, setCompletedCount] = useState(0)
const [NotCompletedCount, setNotCompletedCount] = useState(0)
const [PriorityNotCompleted, setPriorityNotCompleted] = useState(0)
const [PriTask, setPriTask] = useState("")
let NotCompletednum  =0
let CompletedNum =0 
let HighPriority=0 


useEffect(() => {
    
    console.log("run")
    let result = fetchedTasks.sort((a,b)=> {
        console.log(a.priority)
    if (a.priority>b.priority) return -1
    if (b.priority>a.priority) return 1 
    if (a.priority=b.priority) return 0 
    console.log(result)
    
   
    
})
setPriTask(result[0])
}, [fetchedTasks])


console.log(PriTask)


useEffect(() => {
    fetchedTasks.filter(task=>{
        if (task.completed === true) CompletedNum= CompletedNum +1
        else  {NotCompletednum =NotCompletednum+1
               if(task.priority >= 7)  {HighPriority=HighPriority+1}
            
        
        }
        setPriorityNotCompleted(HighPriority)
        setCompletedCount(CompletedNum)
        setNotCompletedCount(NotCompletednum)
        })
}, [fetchedTasks])


    return (
        <div >
          <h4  >Completed: {CompletedCount}</h4>
          <h4>Not Completed: {NotCompletedCount}</h4>
          <h4>High Priority Tasks Not Completed: {PriorityNotCompleted}</h4>
          <h4>Highest priority Task: {PriTask.task}  </h4>

        </div>
    )
}

export default MyProgress