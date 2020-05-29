import React from 'react'
import Photo from './Photo'
import PropTypes from 'prop-types'

function PhotoFrame(props) {
    return (
        <div className="photo-grid">
            {props.photoBlock.map((singlephoto, index) => <Photo key={index} finalPhoto={singlephoto} onRemovePhoto ={props.onRemovePhoto} />)}
        </div>
    );
} 

PhotoFrame.propTypes = {
    photoBlock: PropTypes.array.isRequired,
    onRemovePhoto: PropTypes.func.isRequired  
}

export default PhotoFrame 