import React, { Component } from 'react'
import ReactDOM from 'react-dom'
//creating array for elements
//const tasks = ["Get up early in the morning", "Go to Gym", "Start your day"]
  
class Title extends Component {
    render() {
        return (
            <h1>Task List</h1>
        );
    }
}

class Task extends Component {
    render() {
        return (
            <ol>
                {this.props.tasks.map((task, index) => <li key={index}>{task}</li>)}
            </ol>
        )
    }
}

class Main extends Component {
    render() {
        return (
            <div>
                <Title />
                <Task tasks={["Get up early in the morning", "Go to Gym"]} /> 
                <Task tasks={["Got to Gym", "Start your Work"]} /> 

            </div>
        );
    }
}

ReactDOM.render(<Main />, document.getElementById('root'))