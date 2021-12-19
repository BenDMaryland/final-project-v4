import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";


import { CurrentUserContext } from '../custom/CurrentUser'
function SideBar({ changeBackgroundHandler, handleLogout, FetchedProjects, projectFilter, setCurrentUserFilter, currentUserFilter }) {
    const { CurrentUser, setCurrentUser } = useContext(CurrentUserContext)
    const [showSprintOptions, setshowSprintOptions] = useState(false)
    const [showFilterOptions, setshowFilterOptions] = useState(false)
    const [showKbaOptions, setshowKbaOptions] = useState(false)
    const [showBossOptions, setshowBossOptions] = useState(false)

    if (!FetchedProjects) return null

    return (
        <SideNav >





            {CurrentUser ?

                <div className='currentUser'>
                    <Link className="nav-link" to="/"><button color="inherit">Landing Page</button></Link>
                    <div className='dropdowncontainer'>
                        <label>Sprints</label>   <select onClick={() => setshowSprintOptions(!showSprintOptions)} className='dropdown' ></select>
                    </div>
                    {showSprintOptions ?
                        <div className='dropeddown'>
                            <Link className="nav-link" to="/newsprint"><button color="inherit">Add Sprint </button></Link>
                            <Link className="nav-link" to="/sprints"><button color="inherit">Sprints </button></Link>
                        </div>

                        : null}
                    <div className='dropdowncontainer'>
                        <label>Filtering</label> <select onClick={() => setshowFilterOptions(!showFilterOptions)} className='dropdown' ></select>
                    </div>
                    {showFilterOptions ?
                        <div className='dropeddown'>

                            {FetchedProjects.map((project) => <button key={project.id} onClick={() => projectFilter(project.id)}>{project.name}</button>)}

                            <button value={currentUserFilter} onClick={() => setCurrentUserFilter(!currentUserFilter)} >Just you?</button>

                        </div>
                        :
                        null}
                    <div className='dropdowncontainer'>
                        <label>kba </label>     <select onClick={() => setshowKbaOptions(!showKbaOptions)} className='dropdown' >kba options</select>
                    </div>
                    {showKbaOptions ?
                        <div className='dropeddown'>
                            <Link className="nav-link" to="/newkba"><button color="inherit">Add a Kba</button></Link>
                            <Link className="nav-link" to="/kbas"><button color="inherit">KBAS </button></Link>
                        </div>
                        : null
                    }



                    {CurrentUser.boss ?

                        <div className='boss_menu'>
                            <div className='dropdowncontainer'>
                                <label>Boss </label>     <select onClick={() => setshowBossOptions(!showBossOptions)} className='dropdown' >s</select>
                            </div>
                            {showBossOptions ?
                                <div>
                                    <Link className="nav-link" to="/projects"><button color="inherit">Projects  </button></Link>
                                    <Link className="nav-link" to="/users"><button color="inherit">Users  </button></Link>
                                </div>
                                : null}
                        </div>
                        : null}
                </div> :
                <>



                </>



            }




            <button onClick={() => changeBackgroundHandler()}>Cycle Background</button>

        </SideNav>
    )
}

export default SideBar

const SideNav = styled.nav`



position: fixed;
left: 2px;
top:20%;
height: 50%;
width: 12%;
background-color: #323232;
color: white;
display: block;
    box-shadow: 0 0 40px rgba(8,7,16,0.6);


button{
padding: 20px;
    width: 100%;
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


 .dropdowncontainer{
display: grid;
grid-template-columns: 4fr 1fr;
   }


label{
display: block;
padding: 20px;
    width: 100%;
    padding: 12px 0;
    font-size: 18px;
    font-weight: 600;
  background: #323232;
  border:none;
  color: #999;


}
.dropdown{
display: block;
    width: 100%;

  background: #323232;
  border:none;
  color: #999;

}

`