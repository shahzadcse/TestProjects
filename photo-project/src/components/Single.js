import React, { Component } from 'react'
import _allPhotos from '../data/allPhotos'
import Photo from './Photo'
import Comments from './Comments'

class Single extends Component {
    render() {
        
        const { match, photos } = this.props
        const id = Number(match.params.id) 
         
        const photo = this.props.allPhotos.find((photo) => photo.id === id)
        const comments = this.props.comments[match.params.id] || []
        const index = this.props.allPhotos.findIndex((photo) => photo.id === id)
        
       
        if(this.props.loading === true) {
            return (
                <div className="loader">Loading...</div>
            )
        }
        else if(photo){
          
            return (
                
                <div className="single-photo">  
                                        
                        <Photo {...this.props}  finalPhoto={photo} index={index} loading={this.props.loading}  id={id}/>
                        <Comments  {...this.props}  id={id} comments={comments} />
                </div>
            )
        }
        else {
            return <h1>No Photo Found...</h1>
        }

      
    }
}

export default Single