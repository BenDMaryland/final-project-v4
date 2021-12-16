import React, { useState, useContext, useEffect } from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";

import { CurrentUserContext } from '../custom/CurrentUser'
function SideBar({ changeBackgroundHandler, handleLogout, FetchedProjects, projectFilter, setCurrentUserFilter, currentUserFilter }) {
    const { CurrentUser, setCurrentUser } = useContext(CurrentUserContext)


    return (
        <SideNav>
            <h3>Pages</h3>
            <Link className="nav-link" to="/"><button color="inherit">Landing Page</button></Link>
            <Link className="nav-link" to="/sprints"><button color="inherit">Home Page </button></Link>


            {CurrentUser ?
                <>
                    <Link className="nav-link" to="/newsprint"><button color="inherit">Add Sprint </button></Link>

                    {CurrentUser.boss ?
                        <div className='boss_menu'>
                            <h3>Boss Menu</h3>
                            <Link className="nav-link" to="/projects"><button color="inherit">Projects  </button></Link>
                            <Link className="nav-link" to="/users"><button color="inherit">Users  </button></Link>
                        </div> :
                        null}
                </> :
                null}

            {CurrentUser ?
                <div className='dataFilters'>
                    <h3>Data Filtering</h3>
                    {FetchedProjects.map((project) => <button key={project.id} onClick={() => projectFilter(project.id)}>{project.name}</button>)}
                    <label>Just you?<input value={currentUserFilter} onChange={() => setCurrentUserFilter(!currentUserFilter)} type="checkbox"></input></label>
                </div>
                : null}

            <h3>Theme</h3>
            <button onClick={() => changeBackgroundHandler()}>cycle background</button>

        </SideNav>
    )
}

export default SideBar

const SideNav = styled.nav`
position: absolute;
left: 0;
height: 100%;
width: 10%;
background-color: #323232;
color: white;
display: block;

button{

    width: 95%;
    padding: 1px 0;
    font-size: 18px;
    font-weight: 600;
  
    cursor: pointer;
}

`