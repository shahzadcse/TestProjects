import React, { Component } from 'react'

class PhotoForm extends Component {
    constructor(props) {
        super(props)
        
        this.state = {            
            imageLink: props.editPhoto ? props.editPhoto.imageLink : '',
            description: props.editPhoto ? props.editPhoto.description : '',
            error : '' 
        }
        this.onLinkChange = this.onLinkChange.bind(this)
        this.onDescriptionChange = this.onDescriptionChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    onDescriptionChange(e) {
        const description = e.target.value;
        this.setState( { description });
        
    };

    onLinkChange(e) {
        const imageLink = e.target.value;
        this.setState( { imageLink });
        
    };


    onSubmit (e) { 

        if (!this.state.description) {
            this.setState({ error: 'Please provide description.' });
        } else {
            this.setState({ error: '' });
            this.props.onSubmit({
                id: Number(new Date()),
                description: this.state.description ,
                imageLink : this.state.imageLink
                
            });
        }
         
    };
    // I have created form that is calling on Add and Edit page.
    render() {
        return (
            <div className="form">
                <h2>Photo Form</h2>
                <form  onSubmit={this.onSubmit} >
                    <input type="text"  placeholder="Photo Link" name="link" value={this.state.imageLink} 
                     onChange={this.onLinkChange}  />
                    <input type="text"  placeholder="Photo Description" name="description"
                        value={this.state.description}
                        onChange={this.onDescriptionChange}  />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default PhotoForm