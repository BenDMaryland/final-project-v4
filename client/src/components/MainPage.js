import { useState, useEffect } from "react";
import Sprints from "./Sprints";
import { Routes, Route } from "react-router-dom"



function MainPage({fetchedSprints}) {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Sprints fetchedSprints={fetchedSprints} />} />
            </Routes>
        </div>
    )
}

export default MainPage
