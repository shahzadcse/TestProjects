import React, { Component } from 'react'




class AddPhoto extends Component {

    constructor(){
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event){
        event.preventDefault();
        const link = event.target.elements.link.value
        const description =event.target.elements.description.value 
        const photo = {
            id : Number(new Date()),
            description : description,
            imageLink : link   
        }
        if( link && description) {
            this.props.addPhoto(photo)
            this.props.onHistory.push('/')
        }
    }

    render(){
        return(
            <div>
                <h1>Add New Photo</h1>
                <div className="form">
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" placeholder="Photo Link" name="link"/>
                        <input type="text" placeholder="Photo Description" name="description" />
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default AddPhoto