import React from 'react'
import Login from './Login'

function TopBar({ CurrentUser, handleLogout }) {



    return (
        <div>
           <Login />
            {CurrentUser ? <button onClick={handleLogout}>  Logout: {CurrentUser.name } </button> : null }
        </div>
    )
}

export default TopBar
