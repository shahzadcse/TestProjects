import React, { Component }  from 'react'

class Comments extends Component {
    constructor(){
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e){
        e.preventDefault()
        const comment = e.target.elements.comment.value
        this.props.addComment(comment, this.props.id)
        e.target.elements.comment.value  = ''
    }


    render() {   
        
        return (
            <div className="comment"> 
                {this.props.comments.map((comment, index) => {
                        return (
                            <p key={index}>
                                {comment}
                            </p>
                        )
                })}           
                <form className="comment-form" onSubmit={this.handleSubmit}>
                    <input type="text" name="comment" placeholder="Add comments here" />
                    <input type="submit" hidden />
                </form>
            </div>
        )
    }
}

export default Comments