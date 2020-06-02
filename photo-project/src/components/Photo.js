import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function Photo(props) {

    const frame = props.finalPhoto ;
     
    if (props.loading === true) {
        return (
            <div className="loader">Loading...</div>
        )
    }
    else {

        return (
            <figure className="figure">
                <Link to={`/single/${frame.id}`}>
                    <img className="photo" src={frame.imageLink} alt="{frame.description}" />
                </Link>
                <figcaption>{frame.description}</figcaption>
                <div className="button-container">
                    <button className="button" onClick={
                        () => {
                            props.startRemovingPhoto(props.index, frame.id)
                           // props.history.push('/')
                        }
                    }>Remove</button>
                    <Link to={`/single/${frame.id}`}>
                        <div className="button">
                            <div className="comment-count">
                                <div className="speech-bubble"></div>
                                {props.comments[frame.id] ? props.comments[frame.id].length : 0}
                            </div>
                        </div>
                    </Link>
                </div>
            </figure>
        );
    }
}

Photo.propTypes = {
    // onRemovePhoto : PropTypes.func.isRequired,
    finalPhoto: PropTypes.object.isRequired
}

export default Photo