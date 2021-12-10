import { useState, useEffect } from "react";
import MainPage from "./components/MainPage";
import SideBar from "./components/SideBar";
import TopBar from "./components/TopBar";
import Footer from "./components/Footer";


function App() {
  const [count, setCount] = useState(0);
  const [fetchedSprints, setFetchedSprints] = useState();


  useEffect(() => {
    fetch("/sprints")
      .then((r) => r.json())
      .then((data) => setFetchedSprints(data));
  }, []);


  // Grabing Sprints Index 

  return (
    <>
      <TopBar />
      <SideBar />
      <MainPage fetchedSprints={fetchedSprints} />
      <Footer />
    </>
  );
}

export default App;