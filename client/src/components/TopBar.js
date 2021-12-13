import React, { useContext} from 'react'
import Login from './Login'
import { CurrentUserContext } from '../custom/CurrentUser';
import styled from 'styled-components';

function TopBar({  handleLogout }) {
    const { CurrentUser, setCurrentUser } = useContext(CurrentUserContext);


    return (
        <TopNav>
           <Login />
            {CurrentUser ? <button onClick={handleLogout}>  Logout: {CurrentUser.name } </button> : null }
        </TopNav>
    )
}

export default TopBar

const TopNav= styled.nav `

background-color: #e5e9ed;
`