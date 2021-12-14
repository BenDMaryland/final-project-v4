import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";
function SideBar() {
    return (
        <SideNav>
            <Link className="nav-link" to="/"><button color="inherit">Landing Page</button></Link>
            <Link className="nav-link" to="/sprints"><button color="inherit">Home Page </button></Link>
            <Link className="nav-link" to="/newsprint"><button color="inherit">Add Sprint </button></Link>
            <Link className="nav-link" to="/projects"><button color="inherit">Projects  </button></Link>
        </SideNav>
    )
}

export default SideBar

const SideNav = styled.nav `
position: absolute;
left: 0;
height: 100%;
width: 10%;
background-color: #323232;
color: white;

`