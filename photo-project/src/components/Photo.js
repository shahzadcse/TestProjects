import React from 'react'

function Photo(props) {
    const frame = props.finalPhoto;
    return (
        <figure className="figure">
            <img className="photo" src={frame.imageLink} alt="{frame.description}" />
            <figcaption>{frame.description}</figcaption>
            <div className="button-container">
                <button className="button">Remove</button>
            </div>
        </figure>
    );
}

export default Photo