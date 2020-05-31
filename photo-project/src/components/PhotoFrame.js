import React from 'react'
import Photo from './Photo'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

function PhotoFrame(props) {
    return (
        <div>
            <Link to="/AddPhoto" className="addIcon"></Link> 
            <div className="photo-grid">
                {props.allPhotos
                .sort(function(x,y) {
                        return y.id - x.id
                })
                .map((singlephoto, index) => <Photo key={index} finalPhoto={singlephoto}  {...props}  />)}
            </div>
        </div>
    );
} 

PhotoFrame.propTypes = {
    allPhotos: PropTypes.array.isRequired,
   // onRemovePhoto: PropTypes.func.isRequired  
}

export default PhotoFrame 