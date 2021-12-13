import { useState, useEffect } from "react";

import { Routes, Route } from "react-router-dom"
import Home from "./Home";
import SprintForm from "./SprintForm";

function MainPage({ fetchedSprints}) {
  
    return (
        <div>
            <Routes>
                <Route exact path="/" element={<Home fetchedSprints={fetchedSprints} />               } />
                <Route exact path="/newsprint" element={<SprintForm />} />
            </Routes>
        </div>
    )
}

export default MainPage
