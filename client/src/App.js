
import { useContext, useEffect, useState } from 'react';
import {  useLocation, useNavigate } from 'react-router-dom'
import MainPage from "./components/MainPage";
import SideBar from "./components/SideBar";
import { CurrentUserContext } from './custom/CurrentUser';
import styled from 'styled-components';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import TopNav from './components/TopNav';


function App() {
  console.log = console.warn = console.error = () => {};
  const navigate = useNavigate()
  const [fetchedSprints, setFetchedSprints] = useState();  // Where we keep the sprints 
  const { CurrentUser, setCurrentUser } = useContext(CurrentUserContext); /// Use context this is where we keep the user
  const location = useLocation()
  const [FetchedProjects, setFetchedProjects] = useState([])
  const [ActiveProjectid, setActiveProjectid] = useState(1)
  const [currentUserFilter, setCurrentUserFilter] = useState(true)
  const [changeBackground, setchangeBackground] = useState(1)
  const [DOMUpdater, setDOMUpdater] = useState(0)

  const [FilteredSprints, setFilteredSprints] = useState();



  useEffect(() => {
    if (!CurrentUser) return
    if (CurrentUser.level === 0) return
    else {
      fetch('/sprints')
        .then((r) => r.json())
        .then((data) => {
          setFetchedSprints(data)
          setFilteredSprints(data.filter((sprint) => sprint.project.id === ActiveProjectid))
        }
        )


     
    }
  }, [location.pathname, CurrentUser, DOMUpdater]);



  /// Fetch request for projects. 
  useEffect(() => {
    
      if (!CurrentUser) return null
      fetch('/projects')
        .then((r) => r.json())
        .then((data) => setFetchedProjects(data));
    

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
    setFilteredSprints(fetchedSprints.filter((sprint) => sprint.project.id === props))
 
  }
  function userOnlyFilter() {
    setCurrentUserFilter(!currentUserFilter)
    if (currentUserFilter) {
      setFilteredSprints(fetchedSprints.filter((sprint) => sprint.project.id === ActiveProjectid && sprint.assigned_to_id === CurrentUser.id))
    }
    else {
      setFilteredSprints(fetchedSprints.filter((sprint) => sprint.project.id === ActiveProjectid))

    }

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




  return (

    <FullPage style={{ "backgroundImage": `url(../assets/images/${changeBackground}.bmp)` }}>
    
      <DndProvider backend={HTML5Backend}>
        <TopNav handleLogout={handleLogout} />
        <SideBar changeBackgroundHandler={changeBackgroundHandler} projectFilter={projectFilter} currentUserFilter={currentUserFilter} userOnlyFilter={userOnlyFilter} FetchedProjects={FetchedProjects} handleLogout={handleLogout} />
        <div>
          <MainPage FetchedProjects={FetchedProjects} setDOMUpdater={setDOMUpdater} fetchedSprints={FilteredSprints} />
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