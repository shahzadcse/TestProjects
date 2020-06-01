import React, { Component } from 'react'
import allPhotos from '../data/allPhotos'
import Photo from './Photo'
import Comments from './Comments'

class Single extends Component {
    render() {
        
        const { match, photos } = this.props
        const id = Number(match.params.id)
        //fetching single photo
        const photo = allPhotos.find((photo) => photo.id === id)
        const comments = this.props.comments[match.params.id] || []
        const index = this.props.allPhotos.findIndex((photo) => photo.id === id)
        return (
            <div className="single-photo">
                <Photo finalPhoto={photo} {...this.props} index={index} />
                <Comments addComment={this.props.addComment} comments={comments} id= {id} />
            </div>
        )
    }
}

export default Single