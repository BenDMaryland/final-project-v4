import { useState, useEffect } from "react";
import Sprints from "./components/Sprints";
import {Routes, Route} from "react-router-dom"



function App() {
  const [count, setCount] = useState(0);
  const [fetchedSprints, setFetchedSprints] = useState();
  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);




  // Grabing Sprints Index 
  useEffect(() => {
    fetch("/sprints")
      .then((r) => r.json())
      .then((data) => setFetchedSprints(data));
  }, []);

 
if (!fetchedSprints) return <p>Loading</p>
console.log(fetchedSprints)

  return (
    <>
   <Routes>
  <Route path="new" element={<Sprints />} />
   </Routes>  

    <div className="App">

      <h1>Page Count: {count}</h1>
    </div>
    </>
  );
}

export default App;