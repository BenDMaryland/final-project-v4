import React, { useState, useContext, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { CurrentUserContext } from '../custom/CurrentUser'
import styled from 'styled-components'
function User() {
    const [FetchedUser, setFetchedUser] = useState(null)

    const { CurrentUser, setCurrentUser } = useContext(CurrentUserContext)
    const [UserFormData, setUserFormData] = useState(null)
    const [showform, setshowform] = useState(false)
    const [fireModalShow, setfireModalShow] = useState(false)
    const location = useLocation()
    const [sadCat, setsadCat] = useState("https://i.pinimg.com/originals/3e/84/09/3e8409dcdd012b4bcda84a710f2d1052.jpg")
    let navigate = useNavigate();

    useEffect(() => {
        fetch(`${location.pathname}`)
            .then((r) => r.json())
            .then((data) => setFetchedUser(data))
    }, [location.pathname, CurrentUser, showform]);



    function userChangeHandler(e) {

        setUserFormData(data => data = { ...data, [e.target.name]: e.target.value })

    }

    async function userSubmiteHandler(e) {
        e.preventDefault()
        const response = await fetch(`${FetchedUser.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(UserFormData)
        });
        const data = await response.json();

        if (response.ok) {
            setshowform(!showform)
        } else {
            alert(data.errors)
        }
        
    }
    async function UserFireHandler() {
        const r = await fetch(`/users/${FetchedUser.id}`, {
            method: "DELETE",
        })
        const data = await r.json()
        if (r.ok) {
            navigate('/users');
        }
        else { alert(data.error) }
        navigate('/users');
    }

    if (!FetchedUser) return null

    return (
        <UserPage>
            <div key={FetchedUser.id} className="card">

                <h2>{FetchedUser.name}</h2>
                <h2> {FetchedUser.role}</h2>
                <div className='user_facts'>
                    {FetchedUser.highest_impact_ticket ?
                        <p> Highest impact ticket: {FetchedUser.highest_impact_ticket.sprint_title}</p>
                        : <p>User has no active tickets!</p>}
                    <p>User has missed  {FetchedUser.assigned_to_goal_exceeded} goals </p>
          
                    <p>User has  {FetchedUser.assigned_to_count - FetchedUser.completed_sprints_count +1 } active tickets </p>
                    {FetchedUser.level === 0 ?
                        <p> New user please approve or deny </p>
                        :
                        FetchedUser.level === 1 ?
                            <p>Normal user</p>
                            :
                            <p>User is an admin</p>
                    }

                    {FetchedUser.boss ? <p>user is a boss</p> : <p>Not a boss</p>}
                </div>

                {showform ?

                    <div className='boss_area'>
                        {FetchedUser.level === 0 ? <h2>Please assign a user level </h2> : <h2>Change Users privlidges</h2>}
                        <form onSubmit={e => userSubmiteHandler(e)}>

                            <div className='form'>
                            
                                <div name="level" >
                                
                                    <p>Regular users can view and Edit all data, but can only delete their own posts </p>
                                    <p>Admins have full access and can delete all data </p>
                                   Regular User <input type="radio" onClick={e => userChangeHandler(e)} defaultChecked={FetchedUser.level === 1} value="1" name="level" />
                                    Admin <input type="radio" onClick={e => userChangeHandler(e)} defaultChecked={FetchedUser.level === 2} value="2" name="level" /> 
                                </div>

                                <div name="boss" >
                                  <p>Bosses are able to view information about projects, and users as well as change user permissions and fire users. </p>
                                    <input onClick={e => userChangeHandler(e)} defaultChecked={FetchedUser.boss} type="radio" value="true" name="boss" /> Boss
                                    <input onClick={e => userChangeHandler(e)} defaultChecked={!FetchedUser.boss} type="radio" value="false" name="boss" /> User

                                </div>
                            </div>
                            <button>Submit</button>
                        </form>
                    </div>
                    :
                    FetchedUser.level == 0 ?
                        <>
                            <button onClick={() => setshowform(!showform)}>Approve</button>
                        </>
                        :
                        <>
                            <button onClick={() => setshowform(!showform)}>change permissions  </button>
                        </>
                }


                {fireModalShow ?
                    <div className='fire_modal'>
                        <img src={sadCat}></img>
                        <p>Are you sure?</p>
                        <button className='fire' onClick={() => UserFireHandler()} onMouseLeave={() => setsadCat("https://i.pinimg.com/originals/3e/84/09/3e8409dcdd012b4bcda84a710f2d1052.jpg")} onMouseOver={() => setsadCat("https://pbs.twimg.com/profile_images/1163440365069901824/6K-65_Ja_400x400.jpg")}>Yes</button>
                        <button className='fire' onClick={() => setfireModalShow(false)} >No</button>
                    </div>
                    : <button onClick={() => setfireModalShow(true)}>Fire</button>}


            </div>
        </UserPage>
    )
}

export default User

const UserPage = styled.div`
  height: fit-content;
.user_facts{
display: grid;
grid-template-columns:repeat(5, 1fr );

}
.boss_area{
display: grid;
grid-template-columns:repeat(1, 1fr );
color: #e3e4e6;
   height: 400px;
    width: 500px;
    background-color: #323232;
    position: absolute;
    transform: translate(-50%,-50%);
    top: 60%;
    left: 50%;
   opacity: 1;
    backdrop-filter: blur(10px);
    border: 2px solid rgba(255,255,255,0.1);
    box-shadow: 0 0 40px rgba(8,7,16,0.6);
    padding: 50px 35px;
    padding-top:1em;
    border-radius: 20px;
}
.form{
display: grid;
grid-template-columns:repeat(2, 1fr );
input{
display:block;

  border-radius: 50%;
  width: 16px;
  height: 16px;

  border: 2px solid #999;
  transition: 0.2s all linear;
  margin-right: 5px;

  position: relative;
  top: 4px;

}
}



.card{
    height: 100%;
        border: 2px solid #292d3e;
    box-shadow: 0 0 40px rgba(8,7,16,0.6);
color: white;
background-color:#323232;
padding:1em;
border: solid;
padding: 1px;
text-align: center;
}
img{
      height: 300px;
    width: 300px;
}

.fire_modal{color: #e3e4e6;
   height: 500px;
    width: 500px;
    background-color: #323232;
    position: absolute;
    transform: translate(-50%,-50%);
    top: 50%;
    left: 55%;
   opacity: 1;
    backdrop-filter: blur(10px);
    border: 2px solid rgba(255,255,255,0.1);
    box-shadow: 0 0 40px rgba(8,7,16,0.6);
    padding: 50px 35px;
    padding-top:1em;
    border-radius: 20px;}

    .fire{
   
    width: 90%;
    background-color: #8b949e;
    color: #080710;
    padding: 15px 0;
    font-size: 18px;
    font-weight: 600;
    border-radius: 5px;
    cursor: pointer;
}
button{
padding: 20px;
    width: 20%;
    padding: 12px 0;
    font-size: 18px;
    font-weight: 600;
  background: inherit;

  color: #ffffff;
    cursor: pointer;
}
button:hover,button:focus {
text-decoration:none;
background:#5fa2db;
color: #ffffff;
}
`