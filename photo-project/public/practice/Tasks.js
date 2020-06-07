import React, { Component } from 'react'

class Task extends Component {
    render() {
        return (
            <ol>
                {this.props.tasks.map((task, index) => <li key={index}>{task}</li>)}

                {/* "build": "react-scripts build",
    "dev-server": "webpack-dev-server --open --hot --mode development", */}
            </ol>
        )
    }
}

export default Task