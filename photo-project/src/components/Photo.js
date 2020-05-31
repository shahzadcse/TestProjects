import React from 'react'
import PropTypes from 'prop-types'

function Photo(props) {
    
    const frame = props.finalPhoto;
    return (
        <figure className="figure">
            <img className="photo" src={frame.imageLink} alt="{frame.description}" />
            <figcaption>{frame.description}</figcaption>
            <div className="button-container">
                <button className="button" onClick={
                    () => {
                        props.removePhoto(props.index) 
                    }
                }>Remove</button>
            </div>
        </figure>
    );
}

Photo.propTypes = {
   // onRemovePhoto : PropTypes.func.isRequired,
    finalPhoto: PropTypes.object.isRequired
}

export default Photo