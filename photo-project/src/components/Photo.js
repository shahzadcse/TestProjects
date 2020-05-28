import React, { Component } from 'react'

class Photo extends Component {
    render() {
        const frame = this.props.finalPhoto;
        return (
            <figure className="figure">
                <img className="photo" src={frame.imageLink} alt="{frame.description}" />
                <p>{frame.description}</p>
                <div className="button-container">
                    <button className="button">Remove</button>
                </div>
            </figure>
        );
    }
}

export default Photo