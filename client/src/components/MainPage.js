import { useState, useEffect } from "react";
import LandingPage from "./LandingPage";
import { Routes, Route } from "react-router-dom"
import Home from "./Home";
import SprintForm from "./SprintForm";
import styled from "styled-components";
import Sprints from "./Sprints"

function MainPage({ fetchedSprints, setDOMUpdater}) {
  
    return (
        <MainSection>
            <Routes>
         
                <Route exact path="/sprints/" element={<Home setDOMUpdater={setDOMUpdater} fetchedSprints={fetchedSprints} />} />
                <Route exact path="/sprints/*" element={<Sprints setDOMUpdater={setDOMUpdater} fetchedSprint={fetchedSprints} />} />
                <Route exact path="/newsprint" element={<SprintForm />} />
                <Route exact path="/" element={<LandingPage />} />
            </Routes>
        </MainSection>
    )
}

export default MainPage

const MainSection = styled.div`
margin-left: 10%;


`