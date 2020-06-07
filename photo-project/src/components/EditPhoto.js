import React, { Component } from 'react'
import PhotoForm from './PhotoForm'
import Single from './Single'
import { withRouter } from 'react-router'


class EditPhoto extends Component {

    constructor(props) {
        super(props) 
        this.onSubmit = this.onSubmit.bind(this)
     
    } 
    
    onSubmit(photo) { 
        const id = Number(this.props.match.params.id)
        this.props.startEditPhoto(photo, id) 
        this.props.history.push('/')
    }


    render() {
        const { match, photos } = this.props
        const id = Number(match.params.id)
          
        const photo = this.props.allPhotos.find((photo) => photo.id === id)
        //  const comments = this.props.comments[match.params.id] || []
        const index = this.props.allPhotos.findIndex((photo) => photo.id === id)
        console.log("index"+ index)
        return (
            <div >
                <h2> Edit the photo </h2>
                <PhotoForm  {...this.props}
                 editPhoto={photo}
                 id={id}
                    onSubmit={this.onSubmit}  />                    
            </div>
        );
    }
}

EditPhoto = withRouter(EditPhoto);
export default EditPhoto