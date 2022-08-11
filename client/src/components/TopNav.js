import { useContext } from 'react';
import styled from 'styled-components'
import { CurrentUserContext } from '../custom/CurrentUser';
import { Link } from "react-router-dom";


function TopNav({ handleLogout }) {
    const { CurrentUser, setCurrentUser } = useContext(CurrentUserContext);



    return (
        <TopBar>
            {CurrentUser ?
                <>
                    <div className='signin'>
                        <p> Welcome {CurrentUser.name} </p>
                        <button onClick={() => handleLogout()}>Sign out</button>
                    </div>
                    {CurrentUser.assigned_to_count == 0 ?
                        <></>
                        :
                        <>
                            {CurrentUser.highest_impact_ticket ? <p className='impactticket'>Highest impact ticket: {CurrentUser.highest_impact_ticket.sprint_title}</p> : null}
                            <p className='opentickets'>You have {CurrentUser.user_evaluation_data.assigned_tickets - CurrentUser.user_evaluation_data.completed_tickets} Open tickets </p>
                        </>}
                </>
                : <Link className="nav-link" to="/"><button color="inherit">Sign in page </button></Link>}
        </TopBar>
    )
}

export default TopNav

const TopBar = styled.div`
position: absolute;
top: 0;
width: 100%;
height: 2rem;
background: #323232;
display:grid;
grid-template-columns:repeat(3, 1fr );
padding-bottom:.3rem;

overflow: hidden;
p{
padding:2px;

margin:8px;
    font-size: 18px;
    font-weight: 600;
  background: #323232;
  border:none;
  color: #999;}


button{
    padding-right: 30px;
padding: 20px;
padding: 12px 0;
 font-size: 18px;
font-weight: 600;
  background: #323232;
  border:none;
  color: #999;
    cursor: pointer;
}
button:hover,button:focus {
text-decoration:none;
background:#5fa2db;
color: #ffffff;
}

.signin{
display: flex;
      height: 2vh;

}
.impactticket{
text-align:center;
height: 2vh;
}
.opentickets{
    text-align:right;
        padding-right: 30px;
        height: 2vh;
}


`