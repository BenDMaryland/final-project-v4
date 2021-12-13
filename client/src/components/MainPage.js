import { useState, useEffect } from "react";

import { Routes, Route } from "react-router-dom"
import Home from "./Home";
import SprintForm from "./SprintForm";
import styled from "styled-components";

function MainPage({ fetchedSprints}) {
  
    return (
        <MainSection>
            <Routes>
                <Route exact path="/" element={<Home fetchedSprints={fetchedSprints} />               } />
                <Route exact path="/newsprint" element={<SprintForm />} />
            </Routes>
        </MainSection>
    )
}

export default MainPage

const MainSection = styled.div`
margin-left: 10%;


`