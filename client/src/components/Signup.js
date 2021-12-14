import React, { useEffect, useState } from 'react'

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



        
        <div>
            <h2>SignUp </h2>
            < form onSubmit={handleSignUpChange}>

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

                <button >SignUp</button>
            </form>
        </div>
    )
}

export default Signup
