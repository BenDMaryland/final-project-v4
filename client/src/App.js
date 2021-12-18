import { useContext, useEffect, useState } from 'react';
import {  useLocation } from 'react-router-dom'
import MainPage from "./components/MainPage";
import SideBar from "./components/SideBar";


import { CurrentUserContext } from './custom/CurrentUser';
import styled from 'styled-components';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";


function App() {
  const [fetchedSprints, setFetchedSprints] = useState();
  const { CurrentUser, setCurrentUser } = useContext(CurrentUserContext);
  const location = useLocation()
  const [FetchedProjects, setFetchedProjects] = useState([])
  const [FilteredSprints, setFilteredSprints] = useState([])
const [ActiveProjectid, setActiveProjectid] = useState(1)
const[currentUserFilter, setCurrentUserFilter] =useState(false)
const [changeBackground, setchangeBackground] = useState(1)
const [DOMUpdater, setDOMUpdater] = useState(0)

  useEffect(() => {
    console.log(currentUserFilter)
    if (location.pathname === "/sprints" || location.pathname === "/sprints/") {
      if (currentUserFilter){
      fetch(`${location.pathname}`)
        .then((r) => r.json())
        .then((data) => setFetchedSprints(data.filter((sprint) => sprint.project.id === ActiveProjectid && sprint.assigned_to_id === CurrentUser.id ))                           )
        .then((console.log("active")))
}
      else if (!currentUserFilter){
        fetch(`${location.pathname}`)
          .then((r) => r.json())
          .then((data) => setFetchedSprints(data.filter((sprint) => sprint.project.id === ActiveProjectid))) }      
                
    }
    else if (location.pathname.includes("sprints")){
      fetch(`${location.pathname}`)
        .then((r) => r.json())
        .then((data) => setFetchedSprints(data))
    }

  }, [location.pathname, CurrentUser, DOMUpdater, ActiveProjectid, currentUserFilter]);



  useEffect(() => {
     {
      fetch('/projects')
        .then((r) => r.json())
        .then((data) => setFetchedProjects (data));
    }

  }, [CurrentUser, DOMUpdater]);



  useEffect(() => {
    fetch('/me')
      .then(r => {
        if (r.ok) r.json()
          .then(data => setCurrentUser(data))
        else r.json().then(errors => console.log(errors))
      })
  }, [])



  function handleLogout() {
    fetch("/logout",
      { method: "DELETE" })
      .then((r) => {
        if (r.ok) { setCurrentUser(); }
      });
  }

function projectFilter(props){
console.log(props)
setActiveProjectid(props)

}

function changeBackgroundHandler(){
  setchangeBackground((changeBackground) => changeBackground = changeBackground+1)


}




  // Grabing Sprints Index 

  return (
      <FullPage style={{ "background-image": `url(../assets/images/${changeBackground}.bmp)` }}>
      
    <DndProvider backend={HTML5Backend}>
        <SideBar changeBackgroundHandler={changeBackgroundHandler} projectFilter={projectFilter} currentUserFilter={currentUserFilter} setCurrentUserFilter={setCurrentUserFilter} FetchedProjects={FetchedProjects} handleLogout={handleLogout} />
        <MainPage FetchedProjects={FetchedProjects} setDOMUpdater={setDOMUpdater} fetchedSprints={fetchedSprints} />
   
   </DndProvider >
     </FullPage >
  );
}


export default App;

const FullPage = styled.div`
font-family: 'Montserrat', sans-serif;
height: 100vh;
.scrollbar-hidden::-webkit-scrollbar {
  display: none;
}

  background-repeat: no-repeat;
  background-size: cover;
`