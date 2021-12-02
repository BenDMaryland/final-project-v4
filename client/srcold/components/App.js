/////////HEY YOU WHY DIDNT YOU COMMENT THAT CODE YOU JUST ADDED 
////////// BAD DEV! VERY BAD!
import { Route, Routes } from "react-router-dom";
import Header from "./Header"
import MyProgress from './MyProgress'
import Features from './Features'
import Sprints from "./Sprints"
import Bugs from "./Bugs"
import Home from "./Home"
import { useEffect, useState } from 'react';
import MainComponent from "./MainComponent"
import "./App.css"
import CompletedSprints from "./CompletedSprints"
import CompletedBugs from "./CompletedBugs";
import CompletedFeatures from "./CompletedFeatures";
import SideBar from "./SideBar";


function App() {
const [fetchedTasks, setFetchedTask] = useState(null)  // This is where we store the get requests
const [DOMUpdater, setDOMUpdater]  = useState(0)  /// just a tool to update the DOM
const [sorted,setsorted]=useState(true) //// Used to sort 
const [FetchedCompletedTask, setFetchedCompletedTask] =useState(null) /////////This is where we grab completed tasks 
 const [Loggedin, setLoggedin] = useState(false)   
const [UserLoginInfo, setUserLoginInfo]=useState({username:"", password:""}) ////////////////////// user login------ currently plaintext... bad idea 

const [FormOBJ, setFormOBJ] = useState({              /// Variable where we store form Data
task: "",
category: "bugs",
priority: "1",
completed: "false",
urgency:"1",
id:""


})
/// grabs all the data from the JSON
useEffect(() => {
fetch("http://localhost:3000/tasks")
.then (r=> r.json())
.then (data =>setFetchedTask(data))

}, [DOMUpdater]) /// grabs new info whenever the DOMHandler function is run 



 /////////Her we grab completed tasks 
useEffect(() => {
  fetch("http://localhost:3000/completedtasks")      
  .then (r=> r.json())
  .then (data =>setFetchedCompletedTask(data))
  
  }, [DOMUpdater]) /// grabs new info whenever the DOMHandler function is run 


////////// login funcion  this is what handles the user putting in the login 
function logIn(e){
  console.log(e.target)
  setUserLoginInfo(data=> data={...data,[e.target.name] :e.target.value})
}
///////////////sets login state to true ----- biggest thing this does is that it allows users to login and yay they're able to see the site 
/////////////// atm it just takes them from the homepage and also hides the sidebar 
 function logInHandler(e){
  e.preventDefault()
console.log(UserLoginInfo)
setLoggedin(true)

 }


//////////////////////when the user submits a new sprnt/bug/ of feature 
function formChangeHandler(e){
setFormOBJ(data=> data={...data,[e.target.name] :e.target.value})
}





////////////////////////////////// posts that bug/feature/sprint to the db 
function formHanlder(e){
  e.preventDefault()
 
let date =Date.now()
  fetch(`http://localhost:3000/tasks`,{
    method:"POST",
    headers:{"Content-type":"application/json"},
    body:JSON.stringify({
      task:FormOBJ.task,
      category:FormOBJ.category,
      priority:FormOBJ.priority,
      urgency:FormOBJ.urgency,
      completed:false,
      date:date,
      id:FormOBJ.id //////////////don't need at some point 
    })})
    .then(response => response.json())
    .then(json => console.log(json))
 
    DOMHandler()
}






function sortHandler(){ /////// Sorts data based on priority or ID  --- a checkbox in the header allow the user to toggle 
setsorted(!sorted)
let sortKey = "id"
if (sorted ===false) {sortKey= "id"}
if (sorted ===true){ sortKey= "priority"}

let result = fetchedTasks.sort((a,b)=> {
if (a[sortKey]>b[sortKey]) return -1
if (b[sortKey]>a[sortKey]) return 1 
if (a[sortKey]=b[sortKey]) return 0 


})
setFetchedTask(result) 

}

useEffect(() => { ///////////// Used to update the DOM 
  setFetchedTask(fetchedTasks)
  
}, [DOMUpdater])




if(!fetchedTasks) return <p>Loading</p> /////// Loading so the fetch doesn't screw things up 
 if(!FetchedCompletedTask) return <p>Loading</p> 
function DOMHandler(){ //////////// Used to update the DOM 
  console.log("dom updater")
  setDOMUpdater(DOMUpdater+1)
}









 return (
   
 <div>

  {Loggedin?  
  <>
  <Header  ////// Header - this is where users submit new tasks and can sort by priority 
    sortHandler={sortHandler}
    sorted={sorted}
    FormOBJ={FormOBJ}
    formChangeHandler={formChangeHandler}
    formHanlder={formHanlder} />
    
    <SideBar
  
    />
     </>
    : <p></p> }
    
      <Routes >
        <Route path="/home">
       
        </Route>
        {/* <Route exact path="/"  element={  fetchedBlogs.reverse().map((fetchedBlog)=> {return (       <Blogs key={fetchedBlog.id} slugHandler={slugHandler}  fetchedBlog={fetchedBlog}  /> )}  ) }  /> */}
      
      {/* Bugs is where I am doing most of my new code, I will copy over the data once completed */}
        <Route path ="/bugs"    element={   fetchedTasks.filter(task=>task.category ==="bugs").map(task=> <Bugs id="bugs" DOMHandler={DOMHandler} key={task.id} task={task} />)}        />                                               >  
        
        {/* {fetchedTasks.filter(task=>task.category ==="bugs").map(task=> <Bugs id="bugs" DOMHandler={DOMHandler} key={task.id} task={task} />)} 
        </Route> */}
        <Route path="/sprints"        element={       fetchedTasks.filter(task=>task.category ==="sprints").map(task=> <Sprints DOMHandler={DOMHandler} key={task.id} task={task} />)} />                                                            >
        {/* {fetchedTasks.filter(task=>task.category ==="sprints").map(task=> <Sprints DOMHandler={DOMHandler} key={task.id} task={task} />)}
        </Route> */}
        <Route path ="/features"    element={fetchedTasks.filter(task=>task.category ==="features").map(task=> <Features DOMHandler={DOMHandler} key={task.id} task={task} />)}     />
        {/* {fetchedTasks.filter(task=>task.category ==="features").map(task=> <Features DOMHandler={DOMHandler} key={task.id} task={task} />)}
        </Route> */}
        <Route path="/myprogress"  element= {<MyProgress  fetchedTasks={fetchedTasks} />}       />
        {/* <MyProgress  fetchedTasks={fetchedTasks} />
        </Route> */}









        {/* Completed  Tasks   */}
        <Route path ="/CompletedSprints"  element= {FetchedCompletedTask.filter(task=>task.category ==="sprints").map(task=> <CompletedSprints DOMHandler={DOMHandler} key={task.id} Completedtasks={task} />)}
            />
        {/* {FetchedCompletedTask.filter(task=>task.category ==="sprints").map(task=> <CompletedSprints DOMHandler={DOMHandler} key={task.id} Completedtasks={task} />)}
        </Route> */}








        <Route path ="/CompletedBugs"  element= {FetchedCompletedTask.filter(task=>task.category ==="bugs").map(task=> <CompletedBugs DOMHandler={DOMHandler} key={task.id} Completedtasks={task} />)}     />
        {/* {FetchedCompletedTask.filter(task=>task.category ==="bugs").map(task=> <CompletedBugs DOMHandler={DOMHandler} key={task.id} Completedtasks={task} />)}
        </Route> */}




        <Route path ="/CompletedFeatures" element=   {FetchedCompletedTask.filter(task=>task.category ==="features").map(task=> <CompletedFeatures DOMHandler={DOMHandler} key={task.id} Completedtasks={task} />)}/>
        {/* {FetchedCompletedTask.filter(task=>task.category ==="features").map(task=> <CompletedFeatures DOMHandler={DOMHandler} key={task.id} Completedtasks={task} />)}
        </Route> */}









        <Route exact path="/"   element={       <Home logIn={logIn} UserLoginInfo={UserLoginInfo} logInHandler={logInHandler} logIn={logIn} />}           />
        {/* <Home logIn={logIn} UserLoginInfo={UserLoginInfo} logInHandler={logInHandler} logIn={logIn} />
        </Route> */}




        <Route path= "*"     element={  <p>404!!!!</p>}      />
       
      </Routes>

    



      <MainComponent />



    </div>
 
  )


}

export default App;