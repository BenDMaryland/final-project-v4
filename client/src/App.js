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

  useEffect(() => {
    if (location.pathname.includes("sprints")) {
      fetch(`${location.pathname}`)
        .then((r) => r.json())
        .then((data) => setFetchedSprints(data));
    }

  }, [location.pathname, CurrentUser]);



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




  console.log("user is ", CurrentUser)

  // Grabing Sprints Index 

  return (
    <DndProvider backend={HTML5Backend} >
      <FullPage >
        <TopBar handleLogout={handleLogout} />
        <SideBar />
        <MainPage fetchedSprints={fetchedSprints} />
        <Footer />
      </FullPage>
    </DndProvider >
  );
}


export default App;

const FullPage = styled.div`
font-family: 'Roboto', sans-serif;
height: 100vh;
`