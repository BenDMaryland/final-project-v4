import React, { useState, useContext, useEffect } from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";

import { CurrentUserContext } from '../custom/CurrentUser'
function SideBar() {
    const { CurrentUser, setCurrentUser } = useContext(CurrentUserContext)

  
    return (
        <SideNav>
            <Link className="nav-link" to="/"><button color="inherit">Landing Page</button></Link>
            <Link className="nav-link" to="/sprints"><button color="inherit">Home Page </button></Link>
{ CurrentUser?   <>      <Link className="nav-link" to="/newsprint"><button color="inherit">Add Sprint </button></Link>
            {CurrentUser.boss ? <> <Link className="nav-link" to="/projects"><button color="inherit">Projects  </button></Link>
                    <Link className="nav-link" to="/users"><button color="inherit">Users  </button></Link>    </> : null}    </>                :null}
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