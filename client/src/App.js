import { useContext, useEffect, useState } from 'react';
import { Routes, useLocation, useNavigate } from 'react-router-dom'
import MainPage from "./components/MainPage";
import SideBar from "./components/SideBar";
import { CurrentUserContext } from './custom/CurrentUser';
import styled from 'styled-components';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import TopNav from './components/TopNav';


function App() {
  const navigate = useNavigate()
  const [fetchedSprints, setFetchedSprints] = useState();  // Where we keep the sprints 
  const { CurrentUser, setCurrentUser } = useContext(CurrentUserContext); /// Use context this is where we keep the user
  const location = useLocation()
  const [showSideBar, setshowSideBar] = useState(false)  /// Not in use, might be worth coming back to 
  const [FetchedProjects, setFetchedProjects] = useState([])
  const [ActiveProjectid, setActiveProjectid] = useState(1)
  const [currentUserFilter, setCurrentUserFilter] = useState(false)
  const [changeBackground, setchangeBackground] = useState(1)
  const [DOMUpdater, setDOMUpdater] = useState(0)

  // the Mian fetch to grab the needed sprints. 
  /// Currently this grabs alll sprints for a team, can be refactored to only grab sprints from one particular project. 
  useEffect(() => {
    /// Conditionals to only run when the pathname is correct and trhe user has permisiion. 
    if (!CurrentUser) return
    if (CurrentUser.level === 0) return
    if (location.pathname === "/sprints" || location.pathname === "/sprints/") {
      if (currentUserFilter) {
        fetch(`${location.pathname}`)
          .then((r) => r.json())
          .then((data) => setFetchedSprints(data.filter((sprint) => sprint.project.id === ActiveProjectid && sprint.assigned_to_id === CurrentUser.id)))
        /// Here we set the fetched sprints to only be for the active project     
        // We also filter for only sprints assigned to the current user, if the user has set it to be that way. 
      }
      ///  this is if we don't have the filter set to true 
      else if (!currentUserFilter) {
        fetch(`${location.pathname}`)
          .then((r) => r.json())
          .then((data) => setFetchedSprints(data.filter((sprint) => sprint.project.id === ActiveProjectid)))
      }

    }
    /// No idea what this is for 
    else if (location.pathname.includes("sprints")) {
      fetch(`${location.pathname}`)
        .then((r) => r.json())
        .then((data) => setFetchedSprints(data))
    }


  }, [location.pathname, CurrentUser, DOMUpdater, ActiveProjectid, currentUserFilter]);

  // Yet again it seems ineffecient to do a new fetch everytime. I think the best change to improve speed would be to set filtered to a diffrent state and not mutate fetched sprints. 


  /// Fetch request for projects. 
  useEffect(() => {
    {
      if (!CurrentUser) return null
      fetch('/projects')
        .then((r) => r.json())
        .then((data) => setFetchedProjects(data));
    }

  }, [CurrentUser, DOMUpdater]);


  // fetch requests for users 
  useEffect(() => {
    fetch('/me')
      .then(r => {
        if (r.ok) r.json()
          .then(data => setCurrentUser(data))
        else r.json().then(errors => console.log(errors))
      })
  }, [DOMUpdater])



  function handleLogout() {
    fetch("/logout",
      { method: "DELETE" })
      .then((r) => {
        if (r.ok) { setCurrentUser(); }
      });
    navigate('/')
  }

  /// This is just where we set an actyive project, so only that project runs. 
  function projectFilter(props) {
    setActiveProjectid(props)
  }

  // background changer, wopuld be nice to make this dynamic, allow users to add their own background. 
  function changeBackgroundHandler() {
    if (changeBackground == 8) {
      setchangeBackground(1)
    }
    else {
      setchangeBackground((changeBackground) => changeBackground = changeBackground + 1)
    }

  }




  // 


  // Grabing Sprints Index 

  return (

    <FullPage style={{ "backgroundImage": `url(../assets/images/${changeBackground}.bmp)` }}>
      <DndProvider backend={HTML5Backend}>
        <TopNav handleLogout={handleLogout} />
        <SideBar changeBackgroundHandler={changeBackgroundHandler} projectFilter={projectFilter} currentUserFilter={currentUserFilter} setCurrentUserFilter={setCurrentUserFilter} FetchedProjects={FetchedProjects} handleLogout={handleLogout} />
        <div>
          <MainPage FetchedProjects={FetchedProjects} setDOMUpdater={setDOMUpdater} fetchedSprints={fetchedSprints} />
        </div>
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