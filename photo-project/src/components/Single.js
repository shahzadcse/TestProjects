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
        console.log(photo)
        return (
            <div className="single-photo">
                <Photo finalPhoto={photo} />
                <Comments addComment={this.props.addComment} />
            </div>
        )
    }
}

export default Single