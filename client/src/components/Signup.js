import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
function Signup({ setDOMUpdater}) {

    let navigate = useNavigate();
    const [FetchedTeams, setFetchedTeams] = useState(null)
    const [UserSignUp, setUserSignUp] = useState({
        username: "",
        password: "",
        email: "",
        member_of_id:0,
        role: "",
        name: ''
    });

    useEffect(() => {
        {
            fetch('/teams')
                .then((r) => r.json())
                .then((data) => setFetchedTeams(data));
        }

    }, []);


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
       setDOMUpdater(Math.random())
    }




    function handleSignUpChnage(e) {
        setUserSignUp({ ...UserSignUp, [e.target.name]: e.target.value });
    }
    if(!FetchedTeams) return null
console.log(FetchedTeams)
    return (




        <Signer   >
            <h2>SignUp </h2>
            < form onSubmit={handleSignUpChange}>
                <div className='form'>
                    <input type='text' name="name" placeholder='Name' value={UserSignUp.name} onChange={handleSignUpChnage} required></input>
                    <input type='text' name="username" placeholder='UserName' value={UserSignUp.username} onChange={handleSignUpChnage} required></input>
                    <input type='text' name="role" placeholder='Role' value={UserSignUp.role} onChange={handleSignUpChnage} required></input>
                    <input type='text' name="email" placeholder='Email' value={UserSignUp.email} onChange={handleSignUpChnage} required></input>
                    <input type='password' name="password" placeholder='Password' alue={UserSignUp.password} onChange={handleSignUpChnage} required></input>


                    <select name="member_of_id" onChange={handleSignUpChnage}>
                        <option value={0}>Please Select your team</option>
                        {FetchedTeams.map((team)=>
                        <option  key={team.id}value={team.id}>{team.name}</option>
    )}
                    </select>




                </div>
                <p>Please note new users have limited access until approved by a manager</p>
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
label{
margin-top: 1em;
}


`