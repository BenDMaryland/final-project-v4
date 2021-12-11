import {  useState } from 'react'


function Login() {

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
    }




    function handleLoginChange(e) {
        setUserLogin({ ...UserLogin, [e.target.name]: e.target.value });
    }




    return (
        < form onSubmit={handleLoginSubmit}>
            <label >Username:</label>
            <input type='text' name="username" value={UserLogin.username} onChange={handleLoginChange} required></input>
            <label >Password:</label>
            <input type='password' name="password" value={UserLogin.password} onChange={handleLoginChange} required></input>
            <button >Login</button>
        </form>
    )
}

export default Login
