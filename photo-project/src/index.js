import React from 'react'
import ReactDOM from 'react-dom'
//creating array for elements
const tasks = ["Get up early in the morning", "Go to Gym","Start your day"  ]

const element = React.createElement("ol", null,
    (tasks).map( ( task ) => React.createElement("li", null, task)  )
);


ReactDOM.render(element, document.getElementById('root'))