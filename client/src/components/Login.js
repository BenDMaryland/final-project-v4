import { useState, useContext } from 'react'
import { CurrentUserContext } from '../custom/CurrentUser';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";

function Login({ setDOMUpdater}) {
    const { CurrentUser, setCurrentUser } = useContext(CurrentUserContext);
    let navigate = useNavigate();


    const [UserLogin, setUserLogin] = useState({
        username: "BenDMaryland",
        password: "123"
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
            setDOMUpdater(Math.random())
        } else {
            alert(data.error)
        }
    }




    function handleLoginChange(e) {
        setUserLogin({ ...UserLogin, [e.target.name]: e.target.value });
    }




    return (
        <Signer>
            <h2>Login!</h2>
            < form onSubmit={handleLoginSubmit}>

                <input  type='text' name="username" value={UserLogin.username} onChange={handleLoginChange} required></input>
                <input type='password' name="password" value={UserLogin.password} onChange={handleLoginChange} required></input>
                <button >Login</button>

            </form>
        </Signer>
    )
}

export default Login

const Signer = styled.div`
margin-bottom:2em;
form{
    /* display: inline flow-root list-item; */

}

 /* input {
  border: none;
  -webkit-appearance: none;
  -ms-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: #f2f2f2;
  padding: 12px;
  border-radius: 3px;
  width: 250px;
  font-size: 14px;
  display: block;
 
} */

`