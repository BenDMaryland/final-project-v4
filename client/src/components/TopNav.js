import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components'
import { CurrentUserContext } from '../custom/CurrentUser';
import { Link } from "react-router-dom";

function TopNav({ handleLogout }) {
    const { CurrentUser, setCurrentUser } = useContext(CurrentUserContext);

    console.log(CurrentUser)
    return (
        <TopBar>
            {CurrentUser ?
                <>
                    <p> Welcome {CurrentUser.name} </p>
                    <button onClick={() => handleLogout()}>Sign out</button>
                </>
                : <Link className="nav-link" to="/"><button color="inherit">Sign in page </button></Link>}
        </TopBar>
    )
}

export default TopNav

const TopBar = styled.div`
position: absolute;
top: 0;
width: 100%;
height: 3vh;
background: #323232;
display:flex;
p{
padding-bottom:2px;
margin:8px;
    font-size: 18px;
    font-weight: 600;
  background: #323232;
  border:none;
  color: #999;


}
button{
padding: 20px;
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