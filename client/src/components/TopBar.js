import React, { useContext} from 'react'
import Login from './Login'
import { CurrentUserContext } from '../custom/CurrentUser';
import styled from 'styled-components';

function TopBar({ handleLogout, FetchedProjects, projectFilter }) {


    const { CurrentUser, setCurrentUser } = useContext(CurrentUserContext);

    return (
        <TopNav>
            {CurrentUser ? <button onClick={handleLogout}>  Logout: {CurrentUser.name } </button> : null }
            {FetchedProjects.map((project) => <button  key={project.id} onClick={() => projectFilter(project.id)}>{project.name}</button>)}
        </TopNav>
    )
}

export default TopBar

const TopNav= styled.nav `

background-color: #e5e9ed;
`