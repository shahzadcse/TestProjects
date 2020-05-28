import React from 'react'
import ReactDOM from 'react-dom'

const element = React.createElement("ol", null,
    React.createElement("li", null, "Get up early in the morning"),
    React.createElement("li", null, "Go to Gym"),
    React.createElement("li", null, "Start your day")    
);


ReactDOM.render(element, document.getElementById('root'))