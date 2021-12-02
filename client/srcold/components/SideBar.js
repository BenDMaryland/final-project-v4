import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

function SideBar() {
    return (
       
      
      <SideNav   className="sidenav" >
    <div id="sidebar">
        <br/>
    <NavLink className="sidebarlink" to="/bugs">Bugs</NavLink>
    <br/>
    <NavLink  to="/features">Features</NavLink>
    <br/>
    <NavLink  to="/sprints">Sprints</NavLink>
    <br/>
    <NavLink  to="/MyProgress">My Progress</NavLink>
    <br/>

    <NavLink  to="/CompletedBugs"> Completed Bugs </NavLink>
    <br/>
    <NavLink to="/CompletedFeatures"> Completed Features </NavLink>
    <br/>
    <NavLink to="/CompletedSprints"> Completed Sprints </NavLink>
</div>
    </SideNav >
    )
}

export default SideBar

const SideNav = styled.nav`

 {
    height: 100%; 
    width: 160px; 
    position: fixed;
    z-index: 1; 
    top: 0; 
    left: 0;
    background-color: #111; 
    overflow-x: hidden; 
    padding-top: 20px;
  }
  a {
    padding: 6px 8px 6px 16px;
    text-decoration: none;
    font-size: 25px;
    color: #818181;
    display: block;
  }


`