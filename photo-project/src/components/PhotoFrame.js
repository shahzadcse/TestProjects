import React, { Component } from 'react'
import Photo from './Photo'

class PhotoFrame extends Component {
    render(){
        return (
            <div>
                {this.props.photoBlock.map((singlephoto, index)=> <Photo key={index}  finalPhoto={singlephoto} />)}
             </div>
        );
    }
}

export default PhotoFrame 