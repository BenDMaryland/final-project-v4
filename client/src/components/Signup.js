import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components';
import { CurrentUserContext } from '../custom/CurrentUser';
import { useNavigate } from "react-router-dom";
function Signup({ setDOMUpdater }) {

    let navigate = useNavigate();
    const [FetchedTeams, setFetchedTeams] = useState(null)
    const [newTeam, setnewTeam] = useState(false)
    const { CurrentUser, setCurrentUser } = useContext(CurrentUserContext);
    const [UserSignUp, setUserSignUp] = useState({
        username: "",
        password: "",
        email: "",
        member_of_id: 0,
        role: "",
        name: ''
    });
    const [TeamSignUp, setTeamSignUp] = useState({
        name: '',
        description:""
    });

    useEffect(() => {
        {
            fetch('/teams')
                .then((r) => r.json())
                .then((data) => setFetchedTeams(data));
        }

    }, [newTeam]);

    async function handleSignUpSubmit(e) {
        e.preventDefault();

        const response = await fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(UserSignUp),
        })
        const data = await response.json();

        if (response.ok) {
            console.log("ok")
        } else {
            console.log(data)
            alert(data.errors)
        }

        setDOMUpdater(Math.random())
 
    }

    async function handleNewTeamSubmit(e){
console.log(TeamSignUp)
        const response = await fetch("/teams", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(TeamSignUp),
        }
          
    
        )
        if (response.ok) { }
        else { console.log(response) }
        setDOMUpdater(Math.random())

        setnewTeam(false)


    }

    function handleSignUpChange(e) {
        setUserSignUp({ ...UserSignUp, [e.target.name]: e.target.value });
    }

    function handlerNewTeamChange(e) {
        setTeamSignUp({ ...TeamSignUp, [e.target.name]: e.target.value });
    }
    console.log("herer")
    if (!FetchedTeams) return null
    console.log("not gonna run ")

    return (
        <Signer   >
            <h2>SignUp </h2>
            < form onSubmit={handleSignUpSubmit}>
                <div className='form'>
                    <input type='text' name="name" placeholder='Name' value={UserSignUp.name} onChange={handleSignUpChange} required></input>
                    <input type='text' name="username" placeholder='UserName' value={UserSignUp.username} onChange={handleSignUpChange} required></input>
                    <input type='text' name="role" placeholder='Role' value={UserSignUp.role} onChange={handleSignUpChange} required></input>
                    <input type='text' name="email" placeholder='Email' value={UserSignUp.email} onChange={handleSignUpChange} required></input>
                    <input type='password' name="password" placeholder='Password' alue={UserSignUp.password} onChange={handleSignUpChange} required></input>

                    <label className='checkbox'>New team<input className='checkbox' type="checkbox"  checked={newTeam} onChange={() => setnewTeam(!newTeam)} ></input></label>
                    {newTeam ?
                        <div className='new_team '>
                         <h2>New Team</h2>
                            <input placeholder='new team name' name='name' value={TeamSignUp.name} onChange={handlerNewTeamChange}            ></input>
                            <input placeholder='new team summary' name='description' value={TeamSignUp.description} onChange={handlerNewTeamChange}      ></input>
                            <button type='button' onClick={handleNewTeamSubmit}>SignUp</button>
                        </div>
                        :
                        <select name="member_of_id" onChange={handleSignUpChange}>
                            <option value={0}>Please Select your team</option>
                            {FetchedTeams.map((team) =>
                                <option key={team.id} value={team.id}>{team.name}</option>
                            )}
                        </select>}




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

.checkbox{

display: grid;
grid-template-columns:repeat(2, 1fr );
position: relative;
 appearance: auto;
}
.new_team{
    position: absolute;
    z-index:9999;
      transform: translate(-50%,-50%);
    top: 50%;
    left: 50%;
    width:650px;
     opacity: 1;
 
    border: 2px solid rgba(255,255,255,0.1);
    box-shadow: 0 0 40px rgba(8,7,16,0.6);
    padding: 50px 35px;
    padding-top:1em;
    background: #323232 ;
}
`