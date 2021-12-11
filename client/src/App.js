import { useContext, useState, useEffect } from 'react'

import MainPage from "./components/MainPage";
import SideBar from "./components/SideBar";
import TopBar from "./components/TopBar";
import Footer from "./components/Footer";


function App() {
  const [count, setCount] = useState(0);
  const [fetchedSprints, setFetchedSprints] = useState();
  const [CurrentUser, setCurrentUser] = useState(null);


  useEffect(() => {
    fetch("/sprints")
      .then((r) => r.json())
      .then((data) => setFetchedSprints(data));
  }, []);

  useEffect(() => {
    fetch('/me')
      .then(resp => {
        if (resp.ok) resp.json().then(data => setCurrentUser(data))
        else resp.json().then(errors => console.log(errors))
      })
  }, [])

  function handleLogout() {
    fetch("/logout",
      { method: "DELETE" })
      .then((r) => {
        if (r.ok) { setCurrentUser(null); }
      });
  }

      

  console.log(CurrentUser)

  // Grabing Sprints Index 

  return (
    <>
      <TopBar handleLogout={handleLogout}  CurrentUser={CurrentUser} />
      <SideBar />
      <MainPage fetchedSprints={fetchedSprints} />
      <Footer />
    </>
  );
}

export default App;