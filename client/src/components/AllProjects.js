import React from 'react'
import styled from "styled-components";


function AllProjects({FetchedProjects}) {

let count = 8

    if(!FetchedProjects) return null
    console.log(FetchedProjects)
    return (
        <ProjectContainer>
            {FetchedProjects.map((project)=> 

                <div className="project_card"> 



<h2>{project.name}</h2>
<h4>{project.summary}</h4>
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