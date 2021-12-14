import React from 'react'
import styled from "styled-components";
import Projects from './Projects';


function AllProjects({ FetchedProjects }) {

    let count = 8

    if (!FetchedProjects) return null
    console.log(FetchedProjects)
    return (
        <ProjectContainer>
            {FetchedProjects.map((project) =>

                <div className="project_card">



                    <h2> {project.name}</h2>
                    <h4>{project.summary}</h4>
                    <p>Total sprints: {project.all_sprints} </p>
                    <p> Completed Sprints:  {project.completed_sprints} </p>
                    <p> Goal Dates Missed: {project.missed_goals.length}</p>
                    <p> Goals not yet missed : {project.all_sprints - project.missed_goals.length - project.completed_sprints }</p>
                </div>

            )}
        </ProjectContainer>
    )
}

export default AllProjects

const ProjectContainer = styled.div`
width: 100%;
display: grid;
grid-template-columns:repeat(2, 1fr );
border: solid;
height: 50vh;

.project_card{

padding:1em;
border: solid;
padding: 1px;
text-align: center;
}


`