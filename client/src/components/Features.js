import React from 'react'
import styled from 'styled-components'

function Features({feature}) {
    console.log(feature)
    return (
        <Card>
            <h2>{feature.feature_title}</h2>
            <p>{feature.feature_data} </p>
            <p>{feature.created_by.name} </p>
            <p>impact: {feature.impact}</p>
            <p> Progress: {feature.progress} </p>
        </Card>
    )
}

export default Features
const Card = styled.div`
border: solid;


`