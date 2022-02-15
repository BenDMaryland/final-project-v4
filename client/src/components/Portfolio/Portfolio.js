import React from 'react'
import styled from 'styled-components'
import agile from "../assets/images/agile.png"
import blog from "../assets/images/blog.png"
import tick from "../assets/images/tick.png"
import car from "../assets/images/car.png"


function Portfolio({ scrollHander }) {




    return (


        <Portfol id="portfolio" onMouseEnter={() => scrollHander("portfolio")}  >

            <div className="bar" > </div>
            <h1 id='projects_title' >Here Are Some Of My Projects</h1>

            <div className="project_container_left">
                <h2 className="title" > Agile solutions  </h2>
                <div className='project_left'>
                    <div className="project" id="agile">
                        <h2>Description </h2>
                        <p className="descrip" >A project management application where teams can create projects track progress create KBA's and see live feedback of team members performance. My final project for FlatIron. For this I wanted to create a project where I could track my own progress as I built the application. || Currently a work in progress to be completed january 6th </p>
                       <h2>Difficulties  </h2>
                        <p className="descrip" >My two biggest challenges for this project were, figuring out how to create the methods to track progress in the backend, and adding the teams functionality.  </p>
                        <h2>Solutions </h2>
                        <p className="descrip" >For serving data in the correct format I had to learn some new Ruby methods for managing time. Mainly, this allowed me to segregate data based on the dates which then allowed me to create the graphs to track progress. As for the teams functonality, that is a work in progress</p>
                        <a className="links" href="https://bens-agile.herokuapp.com/" target="_blank" rel="noopener noreferrer">Live Site</a>
                        <a className="links" href="https://github.com/BenDMaryland/final-project-v4" target="_blank" rel="noopener noreferrer">github</a>
                    </div>
                    <div className='links_container'>
                        <img className="profile_image_left" src={agile} />
                        <p>To see all features of this page please use the default login / New accounts have limited access</p>
                        <h2>Features </h2>
                        <ul>
                            <li>The teams features allows multiple teams to work on independent projects separately  </li>
                            <li>KBA's allow teams to have one location for as a repository for all data </li>
                            <li>The Users and Projects tabs, allow managers to track User and project progress</li>
                            <li>Admin and Boss role allows for separation of duties</li>
                            <li>Email.js Allows for high visibility of high impact issues</li>
                            <li>Draft.Js allows user to format KBA's using rich text </li>
                        </ul>
                    </div>
                </div>
            </div>


            <div className="project_container_right">
                <h2 className="title" > The Goat Blog</h2>
                <div className='project_right'>
                                      <div className='links_container'>
                        <img className="profile_image_left" src={blog} />
                        <h2>Features </h2>
                        <ul>
                            <li>An online blog showcasing my time at FlatIron </li>
                            <li>To have OAUTH for user authentication </li>
                            <li>Uses React Markdown to allow for markdown text while making new posts. </li>
                            <li>Developed using  Fast API, ActiveRecord, Postgresql to manage database</li>
                        </ul>
                    </div>
                    <div className="project" id="blog">
                        <h2>Description </h2>
                        <p className="descrip" >A blog detailing my time at flatIron, created using created with react and rails . this was my first rails app so I did things  a bit diffrently than I do now, such as using Fast API and Axios.   </p>
                        <h2>Difficulties  </h2>
                        <p className="descrip" >The biggest challenge for me was going into this with no knowledge of rails at all.  So this is where I leanred about MVC, Serializers, and a whole lot more.   </p>
                        <h2>Solutions </h2>
                        <p className="descrip" >The solution to this was to just take it slow and figure it out on the way. One of the best choices I made here was to  make code that works, even if it isn't scalable or following  best practices. and refactor later. This really helped me progress the app and learn more. </p>
                        <a className="links" href="https://a-blog-on-rails.herokuapp.com/blogs" target="_blank" rel="noopener noreferrer">Live Site</a>
                        <a className="links" href="https://github.com/BenDMaryland/blog-on-rail" target="_blank" rel="noopener noreferrer">github</a>
                    </div>
                </div>
            </div>

            <div className="project_container_left">
                <h2 className="title" > Car Media  </h2>
                <div className='project_left'>
                    <div className="project" id="agile">
                        <h2>Description </h2>
                        <p className="descrip" >An app I worked on with two other team members. Here Users can show off their cars rate other people cars and more. </p>
                        <h2>Difficulties  </h2>
                        <p className="descrip" >As always with group projects one of the biggest issues is communication. It's often hard to understand what another team mebers code means and how best to communicate what your own code means.   </p>
                        <h2>Solutions </h2>
                        <p className="descrip" >We were able to work very cohesively as a group by first setting a schedule with hard deadlines. Having an open communication channel for all team mebers at all times. And leaving descriptive and helpful comments on our code whoever needed.  Also huge love for github.  </p>
                        <a className="links" href="https://carmedia.herokuapp.com/" target="_blank" rel="noopener noreferrer">Live Site not Avilable  ATM </a>
                        <a className="links" href="https://github.com/srizvyy/phase-4-project" target="_blank" rel="noopener noreferrer">github</a>
                    </div>
                    <div className='links_container'>
                        <img className="profile_image_left" src={car} />
                        <h2>Features </h2>
                        <ul>
                            <li>The teams featurres allows multiple teams to work on independent projects separately  </li>
                            <li>KBA's allow teams to have one location for as a repository for all data </li>
                            <li>The Users and Projects tabs, allow managers to track User and project progress</li>
                            <li>Admin and Boss role allows for separation of duties</li>
                            <li>Email.js Allows for high Visability of high impact issues</li>
                            <li>Draft.Js allows user to format KBA's using rich text </li>
                        </ul>
                    </div>
                </div>
            </div>


            <h1 id='resume_title' >Here is my Resume</h1>
        </Portfol>
    )
}

export default Portfolio

const Portfol = styled.div`

padding-bottom: 20px;
background-color: #cb8cc2;
h2{
    color: #cb8cc2;
      height: fit-content;
}

.bar{
    width: 100vw;
    border: solid;
    border-width: 1px;
    border-color: black;
    height: 0px;
}

.project_container_left{
display: grid;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
padding-bottom: 10px;
padding-top: 40px;
margin-left: 5%;
margin-top: 15px;
background-color: #f5f5f5;
}

.profile_image_left{

margin-left: 5%;
  background-color: #f5f5f5;
}


.project_container_right{
display: grid;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
padding-bottom: 40px;
background-color: #f5f5f5;
padding-top: 40px;
margin-right: 5%;
margin-top: 15px;
}
.profile_image_right{
margin-right: 5%;
height: 5%;
 background-color: #f5f5f5;
}

.project{
    /* text-align: center; */
   background-color: #f5f5f5;

   left: auto;
   right: auto;
    height: auto;
    padding:1%;
    p{
width: 95%;
color: black;
    }
}
.title {
    text-align: center;
}
.descrip{
  display: block;
  height: fit-content;
}

a:hover{
    background-color: #eaecec;
}

#projects_title{
text-align: center;
font-family: 'Montserrat', sans-serif;
margin-top: 0ch;
padding-top: 2%;

}
#resume_title{
text-align: center;
font-family: 'Montserrat', sans-serif;
margin-top: 2ch;
padding-top: 2%;
padding-bottom:0 ;
margin-bottom:0 ;
}

.project_left{
display: grid;
grid-template-columns:repeat(1, 2fr 1fr );
height: fit-content;
}
.project_right{
display: grid;
grid-template-columns:repeat(1, 1fr 2fr );
height: fit-content;
}
.links{

 width: auto;
   margin: auto;
}
img{
    width:20vw;
}

`