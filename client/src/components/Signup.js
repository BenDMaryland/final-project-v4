import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
function Signup() {


    const [UserSignUp, setUserSignUp] = useState({
        username: "",
        password: "",
        email: "",
        role: "",
        name: ''
    });

    async function handleSignUpChange(e) {
        e.preventDefault();

        console.log(UserSignUp)
        const response = await fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(UserSignUp),
        })
    }




    function handleSignUpChnage(e) {
        setUserSignUp({ ...UserSignUp, [e.target.name]: e.target.value });
    }

    return (




        <Signer   > 
            <h2>SignUp </h2>
            < form onSubmit={handleSignUpChange}>
                <div className='form'>
                    <label >Name:</label>
                    <input type='text' name="name" value={UserSignUp.name} onChange={handleSignUpChnage} required></input>

                    <label >Username:</label>
                    <input type='text' name="username" value={UserSignUp.username} onChange={handleSignUpChnage} required></input>

                    <label >Role:</label>
                    <input type='text' name="role" value={UserSignUp.role} onChange={handleSignUpChnage} required></input>

                    <label >Email:</label>
                    <input type='text' name="email" value={UserSignUp.email} onChange={handleSignUpChnage} required></input>

                    <label >Password:</label>
                    <input type='password' name="password" value={UserSignUp.password} onChange={handleSignUpChnage} required></input>
                </div>
                <button >SignUp</button>
            </form>
        </Signer>
    )
}

export default Signup


const Signer = styled.div`



    h2{
padding: 0;
margin: 0;
margin-top:2em;
    }
    .form{
      display: grid;
grid-template-columns: 1fr  4fr;
}
label{

margin-top: 1em;
}

 input {
  border: none;
  -webkit-appearance: none;
  -ms-appearance: none;
  -moz-appearance: none;
  appearance: none;
    background-color: rgba(255,255,255,0.07);
  padding: 12px;
  border-radius: 3px;
  width: 250px;
  height:2em;
  font-size: 14px;
  margin-top: 1em;
 
}
button{
    margin-top: 50px;
    width: 100%;
    background-color: #ffffff;
    color: #080710;
    padding: 15px 0;
    font-size: 18px;
    font-weight: 600;
    border-radius: 5px;
    cursor: pointer;
}
`