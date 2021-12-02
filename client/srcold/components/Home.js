import React, { useState } from 'react'

function Home({UserLoginInfo:{username,password},logInHandler,logIn}) {





    return (
        <div>
            <h1>Home: </h1>
            <form onSubmit={logInHandler}    >


            <input type="text" onChange={logIn} name='username' value={username} ></input>
            <br/>
            <input type="password" onChange={logIn} name="password" value={password} ></input>
            <button type="submit">ddd</button>
            </form>
        </div>
    )
}

export default Home
