import { useState, useEffect } from "react";
import LandingPage from "./LandingPage";
import { Routes, Route } from "react-router-dom"
import Home from "./Home";
import SprintForm from "./SprintForm";
import styled from "styled-components";
import Sprints from "./Sprints"
import AllProjects from "./AllProjects";
import AllUsers from "./AllUsers";

import KBAform from "./KBAform"
import AllKbas from "./AllKbas";
import Kbas from "./Kbas";
function MainPage({ fetchedSprints, setDOMUpdater, FetchedProjects}) {

    return (
        <MainSection >
 
            <Routes>
         
                <Route exact path="/sprints/" element={<Home setDOMUpdater={setDOMUpdater} fetchedSprints={fetchedSprints} />} />
                <Route exact path="/sprints/*" element={<Sprints setDOMUpdater={setDOMUpdater} fetchedSprint={fetchedSprints} FetchedProjects={FetchedProjects}/>} />
                <Route exact path="/newsprint" element={<SprintForm FetchedProjects={FetchedProjects}/>} />
                <Route exact path="/" element={<LandingPage />} />
                <Route exact path="/projects" element={<AllProjects FetchedProjects={FetchedProjects} />}    />
                <Route exact path="/users/" element={<AllUsers  />} />
                <Route exact path="/newkba/" element={<KBAform />} />
                <Route exact path="/kbas/" element={<AllKbas />} />
                <Route exact path="/kbas/*" element={<Kbas />} />
            </Routes>
        </MainSection>
    )
}

export default MainPage

const MainSection = styled.div`
margin-left: 10%;
height: 100vh;

`