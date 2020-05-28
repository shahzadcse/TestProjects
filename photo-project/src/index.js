import React from 'react'
import ReactDOM from 'react-dom'
//creating array for elements
const tasks = ["Get up early in the morning", "Go to Gym", "Start your day"]

const element =

    <ol>
        {tasks.map((task, index) => <li key={index}>{task}</li>)}
    </ol>


ReactDOM.render(element, document.getElementById('root'))