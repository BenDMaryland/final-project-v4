import React, { useContext} from 'react'
import Login from './Login'
import { CurrentUserContext } from '../custom/CurrentUser';

function TopBar({  handleLogout }) {
    const { CurrentUser, setCurrentUser } = useContext(CurrentUserContext);


    return (
        <div>
           <Login />
            {CurrentUser ? <button onClick={handleLogout}>  Logout: {CurrentUser.name } </button> : null }
        </div>
    )
}

export default TopBar
