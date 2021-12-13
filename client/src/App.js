import { useContext, useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom'
import MainPage from "./components/MainPage";
import SideBar from "./components/SideBar";
import TopBar from "./components/TopBar";
import Footer from "./components/Footer";
import { CurrentUserContext } from './custom/CurrentUser';

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
  
  }, [location.pathname]);



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

      


  console.log(CurrentUser)

  // Grabing Sprints Index 

  return (
    < >
      <TopBar handleLogout={handleLogout}   />
      <SideBar />
      <MainPage fetchedSprints={fetchedSprints} />
      <Footer />
    </>
  );
}

export default App;