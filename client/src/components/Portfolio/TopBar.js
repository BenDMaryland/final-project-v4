import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';
import styled from 'styled-components';
import Portfolio from './Portfolio';


function TopBar({ wheelLocation, scrollHander}) {

    return (
        <Top>

            <Link onClick={() => scrollHander("intro")} className="toplinks" id={wheelLocation === "intro" ? "activeloc":"notactive"}     to="/#intro">Intro</Link>
            <Link onClick={() => scrollHander("portfolio")}  className="toplinks" id={wheelLocation === "portfolio" ? "activeloc" : "notactive"}     to="/#portfolio">Portfolio</Link>
            <Link onClick={() => scrollHander("resume")}  className="toplinks" id={wheelLocation === "resume" ? "activeloc" : "notactive"}   to="/#resume">Resume</Link>
            <Link onClick={() => scrollHander("footer")}  className="toplinks" id={wheelLocation === "footer" ? "activeloc" : "notactive"}   to="/#footer">Contacts</Link>


            
        </Top>
    )
}




export default TopBar

const Top = styled.div`

background-color: #202020;
text-align: center;
bottom: 50px;
width: 100%;
padding: 0%;
position: fixed;
z-index: 2;
top: 0em;
bottom:auto;


.toplinks{
display: inline-flex;
text-align: center;
}
a:hover{
    background-color: #1a1a1a;
     color:  #c093eb; 
    

}

#activeloc{
color:  #c093eb;



}




`