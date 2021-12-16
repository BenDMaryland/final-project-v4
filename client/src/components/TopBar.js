import React, { useContext} from 'react'
import Login from './Login'
import { CurrentUserContext } from '../custom/CurrentUser';
import styled from 'styled-components';

function TopBar({ changeBackgroundHandler,handleLogout, FetchedProjects, projectFilter, setCurrentUserFilter, currentUserFilter }) {


    const { CurrentUser, setCurrentUser } = useContext(CurrentUserContext);

    if (!FetchedProjects) return null 
    console.log(FetchedProjects)
    return (
        <TopNav>
            {CurrentUser ? <button onClick={handleLogout}>  Logout: {CurrentUser.name } </button> : null }
            {FetchedProjects.map((project) => <button  key={project.id} onClick={() => projectFilter(project.id)}>{project.name}</button>)}
            {CurrentUser ? <label>Just you?<input value={currentUserFilter}onChange={() => setCurrentUserFilter(!currentUserFilter)} type="checkbox"></input></label>  :null }
            <button onClick={() => changeBackgroundHandler()}>cycle background</button>
        </TopNav>
    )
}

export default TopBar

const TopNav= styled.nav `

background-color: #e5e9ed;
`