import React, { Component } from 'react'

class AddPhoto extends Component {
    render(){
        return(
            <div>
                <h1>Add New Photo</h1>
                <div className="form">
                    <input type="text" placeholder="Photo Link" />
                    <input type="text" placeholder="Photo Description" />
                    <button>Submit</button>
                </div>
            </div>
        )
    }
}

export default AddPhoto