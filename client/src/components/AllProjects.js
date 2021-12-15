import React, { useEffect, useState, useContext, useCallback, PureComponent } from 'react'
import styled from "styled-components";
import Projects from './Projects';
import { CurrentUserContext } from '../custom/CurrentUser'
import LandingPage from './LandingPage';

import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart } from 'recharts';
import { Chart } from "react-google-charts";

function AllProjects({ FetchedProjects }) {
    const { CurrentUser, setCurrentUser } = useContext(CurrentUserContext)


    if (!FetchedProjects) return null
    if (CurrentUser === undefined) return <LandingPage />
    console.log(FetchedProjects)
    return (
        <ProjectContainer>
            {FetchedProjects.map((project) =>

                <div className="project_card">



                    <h2> {project.name}</h2>
                    <h4>{project.summary}</h4>
                    <p>Total sprints: {project.all_sprints} </p>
                    <p> Completed Sprints:  {project.completed_sprints} </p>
                    <p> Goal Dates Missed: {project.missed_goals}</p>
                    <p> Goals not yet missed : {project.all_sprints - project.missed_goals - project.completed_sprints }</p>
               
                    <BarChart
                        width={500}
                        height={300}
                        data={project.created_and_completed_this_week}
                        margin={{
                            top: 11,
                            right: 30,
                            left: 20,
                            bottom: 5
                        }}
                    >
                        <CartesianGrid strokeDasharray="2 9" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="created" fill="#8884d8" />
                        <Bar dataKey="completed" fill="#82ca9d" />
                    </BarChart>
                  


                    <Chart
                        width={'500px'}
                        height={'300px'}
                        chartType="PieChart"
                        loader={<div>Loading Chart</div>}
                        data={[
                            ['Task', 'Hours per Day'],
                            ['Goal has not yet Occured', project.goal_not_yet_occured],
                            ['Goal  Missed',  project.missed_goals ],
                            ['Goals achieved', project.goals_acheieved],

                        ]}
                        options={{
                            title: 'My Daily Activities',
                        }}
                        rootProps={{ 'data-testid': '1' }}
                    />








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