import { useContext, useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom'
import MainPage from "./components/MainPage";
import SideBar from "./components/SideBar";
import TopBar from "./components/TopBar";
import Footer from "./components/Footer";
import { CurrentUserContext } from './custom/CurrentUser';
import styled from 'styled-components';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";


function App() {
  const [fetchedSprints, setFetchedSprints] = useState();
  const { CurrentUser, setCurrentUser } = useContext(CurrentUserContext);
  const location = useLocation()
const [DOMUpdater, setDOMUpdater] = useState(0)
  useEffect(() => {
    if (location.pathname.includes("sprints")) {
      fetch(`${location.pathname}`)
        .then((r) => r.json())
        .then((data) => setFetchedSprints(data));
    }

  }, [location.pathname, CurrentUser,DOMUpdater]);






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





  // Grabing Sprints Index 

  return (
  
      <FullPage >
        <TopBar handleLogout={handleLogout} />
        <SideBar />
      <MainPage setDOMUpdater={setDOMUpdater} fetchedSprints={fetchedSprints} />
        <Footer />
      </FullPage>
   
  );
}


export default App;

const FullPage = styled.div`
font-family: 'Roboto', sans-serif;
height: 100vh;
`