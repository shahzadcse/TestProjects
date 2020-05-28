import React, { Component } from 'react';
import Card from './Card.js';

 
class App extends Component {

  constructor(props){
    super(props);
    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleRemove = this.handleRemove.bind(this);
    // this.handleEdit = this.handleEdit.bind(this);
   
      this.state = {
        headingtitle : "React Crud App",
        act:0,
        index: '',
        data : []
      }  
  }
 
 
 
 
componentDidMount(){
  
  this.cardData = JSON.parse(sessionStorage.getItem('cards'));
  
  if(sessionStorage.getItem('cards')) {
      this.setState({
        cdate : this.cardData.cdate,
        title : this.cardData.title,
        desc : this.cardData.desc
      })
  } else {
      this.setState({
        cdate : new Date(),
        title : '',
        desc : ''

      })

  }
  this.setState({ data : this.cardData})
  this.refs.cdate.focus();
  
}


handleSubmit =(e)=> {
  e.preventDefault();
  console.log("click")

  let carddata = this.state.data  || [];
     let cdate =  this.refs.cdate.value;
     let title = this.refs.title.value;
     let desc = this.refs.desc.value;

      if(cdate === "" || title === "" || desc === "" ) {
          alert("Field can't be blank");
          return false;
      }
      
     if(this.state.act === 0){
       //add new 
      carddata.push({
        cdate : cdate,
        title : title,
        desc : desc
       });           
      
     }
     else{
        let index = this.state.index;
        carddata[index].cdate = cdate;
        carddata[index].title = title;
        carddata[index].desc = desc
        this.refs.cdate.readOnly = false;
        this.refs.formbtn.innerHTML = "Add New Idea";
     }

 
     this.setState({
      data : carddata,
      act : 0
    } , () => {
    sessionStorage.setItem('cards',JSON.stringify(this.state.data));
    });
    
     this.refs.myForm.reset();
    this.refs.cdate.focus();
} 

handleRemove = (i) => {
  // eslint-disable-next-line no-restricted-globals
  let confirmation = confirm("Want to remove this card?"? "Do you want to remove this card?" : false); 
  if(confirmation) {
  let data = this.state.data;
  data.splice(i,1);

  this.setState({
    data : data
  }, () => {
    sessionStorage.setItem('cards',JSON.stringify(this.state.data));
    });
  }

  this.refs.myForm.reset();
  this.refs.cdate.focus();

}

handleEdit = (i) => {
  let data = this.state.data[i];
  this.refs.cdate.value =  data.cdate;
  this.refs.title.value =  data.title;
  this.refs.desc.value =  data.desc;
  this.refs.cdate.readOnly = true;
  this.refs.formbtn.innerHTML = "Edit the Idea";
  this.setState({     
    act : 1,
    index : i
  })
 
  this.refs.title.focus();
    
} 
 
 

 render(){

  let cardData = this.state.data;  

    return(      
      
      <div className="container">
            <h2>{this.state.headingtitle}</h2>
        <div className="row justify-content-md-center">
          <div className="col-md-auto">
          <form ref="myForm"  method="post" required> 
          <div className="form-group">
          <label >Date</label>
            <input   type="date"    ref="cdate" name="cdate" className="form-control"  placeholder="Date"   />
            <label >Idea Title</label>
            <input   type="text" ref="title" name="title"  className="form-control" placeholder="Idea Title"   />
            <label >Idea Description</label>
            <input type="textarea" ref="desc" name="desc"  className="form-control " placeholder="Idea description"     />
             <button ref="formbtn" className="btn btn-primary" onClick={(e)=>this.handleSubmit(e)}>Add New Idea</button> 
           </div>

          </form>
          </div>
          <div className="row"> 
             <Card card={cardData} /> 
          </div>
         
          </div>
      </div>

    )
 
}
 
  
}
 
export default App;
