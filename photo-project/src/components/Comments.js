import React, { Component }  from 'react'

class Comments extends Component {
    constructor(){
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e){
        e.preventDefault()
        console.log(e.target.elements.comment.value)
    }


    render() {        
        return (
            <div className="comment"> 
                <form className="comment-form" onSubmit={this.handleSubmit}>
                    <input type="text" name="comment" />
                    <input type="submit" hidden />
                </form>
            </div>
        )
    }
}

export default Comments