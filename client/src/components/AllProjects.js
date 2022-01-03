import React, { useEffect, useState, useContext, useCallback, PureComponent } from 'react'
import styled from "styled-components";
import Projects from './Projects';
import { CurrentUserContext } from '../custom/CurrentUser'
import LandingPage from './LandingPage';

import { LineChart, Line, BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Chart } from "react-google-charts";

function AllProjects({ FetchedProjects }) {
    const { CurrentUser, setCurrentUser } = useContext(CurrentUserContext)


    if (!FetchedProjects) return null
    if (CurrentUser === undefined) return <LandingPage />
    if (!CurrentUser.boss) return <LandingPage />
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
                    <p> Goals not yet missed : {project.goal_not_yet_occured}</p>

<div className='charts'>
    <div>
        <h1>Progress over time</h1>
                    <LineChart
                        width={500}
                        height={300}
                        data={project.completed_over_time_graph}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="day" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                         <Line type="monotone" dataKey="created" stroke="#8884d8" activeDot={{ r: 8 }} /> 
                        <Line type="monotone" dataKey="completed" stroke="#82ca9d" />
                    </LineChart>
                        </div>

                        <div>
                            <h1>Progress per  day </h1>
                    <BarChart
                        width={600}
                        height={300}
                        data={project.created_and_completed_sprints_total_amount}
                        margin={{ top: 11, right: 30, left: 20, bottom: 5 }}    >
                        <CartesianGrid strokeDasharray="2 9" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="created" fill="#8884d8" />
                        <Bar dataKey="completed" fill="#82ca9d" />
                    </BarChart>
                    </div>
                    </div>



                    <Chart
                        width={'500px'}
                        height={'300px'}

                        chartType="PieChart"
                        loader={<div>Loading Chart</div>}
                        data={[
                            ['Task', 'Hours per Day'],
                            ['Goal has not yet Occured', project.goal_not_yet_occured],
                            ['Goal  Missed', project.missed_goals],
                            ['Goals achieved', project.goals_acheieved],]}
                        options={{
                            titleTextStyle: {
                                color: 'white'
                            },
                            legend: {
                                textStyle: {
                                    color: 'white'
                                }
                            },
                            color: "white",
                            title: 'Project performance',
                            backgroundColor: {
                                fill: '#323232',
                                fillOpacity: 0.8
                            }

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
grid-template-columns:repeat(1, 1fr );
border: solid;
height: 100%;
overflow-y:scroll;
.charts{
display: grid;
grid-template-columns:repeat(2, 1fr );

}

.project_card{
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

`