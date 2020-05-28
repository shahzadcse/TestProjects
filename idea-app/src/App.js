import React, { Component } from 'react';
import Header from './components/Header';
import IdeaList from './components/IdeaList';

const ideaList = [
  {id: 1, created_date: '12/12/2019', title: "First Idea", body: "Body of first idea"},
  {id: 2, created_date: '12/12/2019', title: "Second Idea", body: "Body of Second idea"},
  {id: 3, created_date: '12/12/2019', title: "Third Idea", body: "Body of Third idea"},
  {id: 4, created_date: '12/12/2019', title: "Fourth Idea", body: "Body of Fourth idea"},
  {id: 5, created_date: '12/12/2019', title: "Fifth Idea", body: "Body of Fifth idea"}

];

if (localStorage.getItem("ideas") === null) {
  localStorage.setItem('ideas', JSON.stringify(ideaList));
}


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      ideaList : []
      }
    this.editIdeaSubmit = this.editIdeaSubmit.bind(this);
    this.deleteIdea = this.deleteIdea.bind(this);
    this.addNewIdea = this.addNewIdea.bind(this);
  }

  componentDidMount() {
    let ideaList = JSON.parse(localStorage.getItem("ideas"));
    this.setState((prevState, props) => (
      {
        ideaList: ideaList
      })
    );
  }

  addNewIdea() {
    this.setState((prevState, props) => ({
      ideaList: [...prevState.ideaList, {  
        id: Math.max(...prevState.ideaList.map(function(o){
          return o.id
        })) + 1, created_date: new Date(), title: '', body: '' 
      }]
    }));
  }

  deleteIdea(id) {
    let r = window.confirm("Do you want to delete this item");
    if (r === true) {
      let filteredIdeaList = this.state.ideaList.filter(
        x => x.id !== id
      );
       this.setState((prevState, props) => ({
          ideaList: filteredIdeaList
       }));
       localStorage.setItem(
         'ideas',
         JSON.stringify(filteredIdeaList)
       );
    }
  }


  editIdeaSubmit(id, title, body) {
    let ideaListCopy = this.state.ideaList.map((idea) => {
    
      if (idea.id === id) {           
        idea.title = title;
        idea.body = body;
      }
      return idea;
    });
    this.setState((prevState, props) => ({
      ideaList: ideaListCopy
    }));
    localStorage.setItem(
      'ideas',
      JSON.stringify(ideaListCopy)
    );
  }


  render() {
    return (
     <section>
      <div className="App">
         <Header />
         <div className="card-body">
         <table className="table table-hover">
                <thead className="thead-dark">
                  <tr><th>Date Created</th><th>Title</th><th>Idea Body</th><th>Edit/Save</th><th>Delete</th></tr></thead>
              
         <IdeaList
                    deleteIdea={this.deleteIdea}
                    ideaList={this.state.ideaList}
                    editIdeaSubmit={this.editIdeaSubmit}
                  />
          </table>
          <button
              className="btn btn-dark pull-left"
              onClick={this.addNewIdea}>
              Add New
          </button>   
         </div>
      </div>  
      </section>   
    );
  }

}
 
export default App;
