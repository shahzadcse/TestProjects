import React from 'react'
import Photo from './Photo'

function PhotoFrame(props) {
    return (
        <div className="photo-grid">
            {props.photoBlock.map((singlephoto, index) => <Photo key={index} finalPhoto={singlephoto} onPhotoRemove ={props.onRemovePhoto} />)}
        </div>
    );
} 

export default PhotoFrame 