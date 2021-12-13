import React from 'react'

function Features({feature}) {
    console.log(feature)
    return (
        <div>
            <h2>{feature.feature_title}</h2>
        </div>
    )
}

export default Features
