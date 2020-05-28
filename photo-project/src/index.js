import React from 'react'
import ReactDOM from 'react-dom'
//creating array for elements
const tasks = ["Get up early in the morning", "Go to Gym", "Start your day"]

const element =
    <div>
        <h1>Task List</h1>
    <ol>
        {tasks.map((task, index) => <li key={index}>{task}</li>)}
    </ol>
    </div>

ReactDOM.render(element, document.getElementById('root'))