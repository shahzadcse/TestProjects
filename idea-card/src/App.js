import React, { Component } from 'react';

class App extends Component {

  constructor(props){
    super(props);
      this.state = {
        title : "React Crud App",
        act:0,
        index: '',
        data : []
      }  
  }

componentDidMount(){
  this.refs.title.focus();
  
}

 fSubmit =(e)=> {
  e.preventDefault();
  console.log("click")

     let data = this.state.data;
     let cdate =  this.refs.cdate.value;
     let title = this.refs.title.value;
     let desc = this.refs.desc.value;

    

     if(this.state.act === 0){
       //add new
       let idea = {
        cdate, title, desc
       }
      data.push(idea);      
     
     }
     else{
        let index = this.state.index;
        data[index].cdate = cdate;
        data[index].title = title;
        data[index].desc = desc;
      
     }

     this.setState({
      data : data,
      act : 0
    });
    

     this.refs.myForm.reset();
     this.refs.title.focus();
} 

fRemove = (i) => {
  let data = this.state.data;
  data.splice(i,1);
  this.setState({
    data : data
  });

  this.refs.myForm.reset();
  this.refs.title.focus();

}

fEdit = (i) => {
  let data = this.state.data[i];
  this.refs.cdate.value =  data.cdate;
  this.refs.title.value =  data.title;
  this.refs.desc.value =  data.desc;

  this.setState({     
    act : 1,
    index : i
  })
 
  this.refs.title.focus();

}

  render(){
    let data = this.state.data;
    return( 
      <div className="container">
            <h2>{this.state.title}</h2>
        <div className="row justify-content-md-center">
          <div className="col-md-auto">
          <form ref="myForm">
          <div className="form-group">
          <label >Date</label>
            <input type="text" ref="cdate"  className="form-control"  placeholder="Date" defaultValue={Date()}/>
            <label >Idea Title</label>
            <input type="text" ref="title"  className="form-control" placeholder="Idea Title" />
            <label >Idea Description</label>
            <input type="textarea" ref="desc"  className="form-control " placeholder="Idea description" />
             <button  className="btn btn-primary" onClick={(e)=>this.fSubmit(e)}>Add New Idea</button> 
           </div>

          </form>
          </div>
          <div className="row">
          
            {data.map((data, i) => 
                <div className="idea-card col col-sm-3 col-md-3" key={i}>
                    <h3>{data.title}</h3>
                    <p>{data.desc}</p>  
                   <em>{data.cdate}</em> 
                  <button className="btn btn-warning"  onClick={()=>this.fEdit(i)}>Edit</button> 
                  <button className="btn btn-danger"  onClick={()=>this.fRemove(i)}>Remove</button> 
                </div>
            )}

          </div>
         
          </div>
      </div>

    )
  }
}
 
export default App;
