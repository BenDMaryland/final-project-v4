import {  useState, useContext } from 'react'
import { CurrentUserContext } from '../custom/CurrentUser';

function Login() {
    const { CurrentUser, setCurrentUser } = useContext(CurrentUserContext);



    const [UserLogin, setUserLogin] = useState({
        username: "",
        password: ""
    });

    async function handleLoginSubmit(e) {
        e.preventDefault();
        const response = await fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(UserLogin),
            
        })
        const data = await response.json();

        if (response.ok) {
            setCurrentUser(data)
        } else {
            alert(data.error)
        }
    }




    function handleLoginChange(e) {
        setUserLogin({ ...UserLogin, [e.target.name]: e.target.value });
    }




    return (
        <>
        <h2>Login!</h2>
        < form onSubmit={handleLoginSubmit}>
            <label >Username:</label>
            <input type='text' name="username" value={UserLogin.username} onChange={handleLoginChange} required></input>
            <label >Password:</label>
            <input type='password' name="password" value={UserLogin.password} onChange={handleLoginChange} required></input>
            <button >Login</button>
        </form>
</>
    )
}

export default Login
