import React, { Component } from 'react';

export default class IdeaCard extends Component {
    constructor(props){
      super(props);
      this.state ={isEdit:false}
      this.editIdea = this.editIdea.bind(this);
      this.editIdeaSubmit = this.editIdeaSubmit.bind(this);
      this.deleteIdea = this.deleteIdea.bind(this);
    }

    deleteIdea(){
        const {id} = this.props.idea;
        this.props.deleteIdea(id);
      }
    
    editIdea(){
        this.setState((prevState,props) => ({
          isEdit : !prevState.isEdit
        }))
      }
    
    editIdeaSubmit(){
        const {id} = this.props.idea;
        this.setState((prevState,props) => ({
          isEdit : !prevState.isEdit
        }));
         
        this.props.editIdeaSubmit(
          id, 
          this.dateInput.value,         
          this.titleInput.value,
          this.bodyInput.value
        );
      }

      render() {
        const {cdate,title,body} = this.props.idea;
        return (
            this.state.isEdit === true ? (
                <tr className="bg-warning" key={this.props.index}>
          <td>
            <input ref={dateInput => this.dateInput = dateInput} defaultValue ={cdate}/>
          </td>
          <td><input defaultValue={title} ref={titleInput => this.titleInput = titleInput}/>
          </td>
          <td>
            <input ref={bodyInput => this.bodyInput = bodyInput} defaultValue={body}/>
          </td>
          <td><i className="far fa-save" onClick={this.editIdeaSubmit}></i>
          </td>
          <td><i className="fas fa-trash"></i></td>
        </tr>

            ) : (
        <tr key={this.props.index}>
          <td>{cdate}</td>
          <td>{title}</td>
          <td>{body}</td>
          <td><i className="far fa-edit" onClick={this.editIdea}></i></td>
          <td><i className="fas fa-trash" onClick={this.deleteIdea}></i></td>
</tr>
            )
        );
        }
        
}

