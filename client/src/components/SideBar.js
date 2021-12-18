import React, { useContext } from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";

import { CurrentUserContext } from '../custom/CurrentUser'
function SideBar({ changeBackgroundHandler, handleLogout, FetchedProjects, projectFilter, setCurrentUserFilter, currentUserFilter }) {
    const { CurrentUser, setCurrentUser } = useContext(CurrentUserContext)


    if(!FetchedProjects) return null
    console.log(FetchedProjects)
    return (
        <SideNav>
           
            <Link className="nav-link" to="/"><button color="inherit">Landing Page</button></Link>
            <Link className="nav-link" to="/newkba"><button color="inherit">Add a Kba</button></Link>
            <Link className="nav-link" to="/kbas"><button color="inherit">KBAS </button></Link>
            <Link className="nav-link" to="/sprints"><button color="inherit">Home Page </button></Link>
            {CurrentUser ?
                <div className='dataFilters'>

                    {FetchedProjects.map((project) => <button key={project.id} onClick={() => projectFilter(project.id)}>{project.name}</button>)}
                   <button value={currentUserFilter} onClick={() => setCurrentUserFilter(!currentUserFilter)} >Just you?</button>
                </div>
                : null}
            {CurrentUser ?
                <>

                    <Link className="nav-link" to="/newsprint"><button color="inherit">Add Sprint </button></Link>

                    {CurrentUser.boss ?
                        <div className='boss_menu'>
                         
                            <Link className="nav-link" to="/projects"><button color="inherit">Projects  </button></Link>
                            <Link className="nav-link" to="/users"><button color="inherit">Users  </button></Link>
                        </div> :
                        null}
                </> :
                null}

           

         
            <button onClick={() => changeBackgroundHandler()}>cycle background</button>

        </SideNav>
    )
}

export default SideBar

const SideNav = styled.nav`
position: fixed;
left: 2px;
top:20%;
height: 50%;
width: 10%;
background-color: #323232;
color: white;
display: block;
    box-shadow: 0 0 40px rgba(8,7,16,0.6);


button{
padding: 20px;
    width: 100%;
    padding: 12px 0;
    font-size: 18px;
    font-weight: 600;
  background: #323232;
  border:none;
  color: #999;
    cursor: pointer;
}
button:hover,button:focus {
text-decoration:none;
background:#5fa2db;
color: #ffffff;
}

`