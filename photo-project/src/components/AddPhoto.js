import React, { Component } from 'react'

import PhotoForm from './PhotoForm'


class AddPhoto extends Component {

    constructor(props) {
        super(props)
       
        this.onSubmit = this.onSubmit.bind(this)
        
     
    }

    onSubmit(photo) {
       
            this.props.startAddingPhoto(photo)
            this.props.history.push('/')
            this.props.onSubmit({
                id: Number(new Date()),
                description: this.state.description ,
                imageLink : this.state.imageLink
                
            });
       
    }

    render(){ 

        return(
            <div>
                <h1>Add New Photo</h1>
                <PhotoForm  {...this.props} onSubmit={this.onSubmit}/>
            </div>
        )
    }
}

export default AddPhoto