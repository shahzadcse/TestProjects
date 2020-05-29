import React from 'react'
import Photo from './Photo'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

function PhotoFrame(props) {
    return (
        <div>
            <Link to="/AddPhoto" className="addIcon"></Link> 
            <div className="photo-grid">
                {props.photoBlock.map((singlephoto, index) => <Photo key={index} finalPhoto={singlephoto} onRemovePhoto ={props.onRemovePhoto} />)}
            </div>
        </div>
    );
} 

PhotoFrame.propTypes = {
    photoBlock: PropTypes.array.isRequired,
    onRemovePhoto: PropTypes.func.isRequired  
}

export default PhotoFrame 