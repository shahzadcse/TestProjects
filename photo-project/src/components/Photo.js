import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

function Photo(props) {
    console.log(props.allPhotos)
    const frame = props.finalPhoto;
    return (
        <figure className="figure">
            <img className="photo" src={frame.imageLink} alt="{frame.description}" />
            <figcaption>{frame.description}</figcaption>
            <div className="button-container">
                <button className="button" onClick={
                    () => {
                        props.onRemovePhoto(frame)
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


function mapStoreToProps (state){
    return {
        allPhotos  : state
    }
}
 

export default connect(mapStoreToProps)(Photo)