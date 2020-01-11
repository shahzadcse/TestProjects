import React, { Component } from 'react';

class App extends Component {

  constructor(props){
    super(props);
    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleRemove = this.handleRemove.bind(this);
    // this.handleEdit = this.handleEdit.bind(this);
   
      this.state = {
        title : "React Crud App",
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
  this.refs.title.focus();
  
}


handleSubmit =(e)=> {
  e.preventDefault();
  console.log("click")

  let carddata = this.state.data  || [];
     let cdate =  this.refs.cdate.value;
     let title = this.refs.title.value;
     let desc = this.refs.desc.value;

       
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
         
     }

 
     this.setState({
      data : carddata,
      act : 0
    } , () => {
    sessionStorage.setItem('cards',JSON.stringify(this.state.data));
    });
    
     this.refs.myForm.reset();
    this.refs.title.focus();
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
  else{
    return false;
  }
  this.refs.myForm.reset();
  this.refs.title.focus();

}

handleEdit = (i) => {
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

handleDisplay = ( cardData) => {
   
  if(cardData) {
    return (
      cardData.map((data, i) => 
        <div className="idea-card col-3 col-xs-6 " key={i}>
            <h3>{data.title}</h3>
            <p>{data.desc}</p>  
           <em>{data.cdate}</em> 
          <button className="btn btn-warning"  onClick={()=>this.handleEdit(i)}>Edit</button> 
          <button className="btn btn-danger"  onClick={()=>this.handleRemove(i)}>Remove</button> 
        </div> )
    )
  }

}

 render(){
  let cardData = this.state.data;
  
    return( 
      <div className="container">
            <h2>{this.state.title}</h2>
        <div className="row justify-content-md-center">
          <div className="col-md-auto">
          <form ref="myForm">
          <div className="form-group">
          <label >Date</label>
            <input required  type="text" ref="cdate" name="cdate"  className="form-control"  placeholder="Date" defaultValue={Date()} />
            <label >Idea Title</label>
            <input required  type="text" ref="title" name="title"  className="form-control" placeholder="Idea Title"   />
            <label >Idea Description</label>
            <input type="textarea" ref="desc" name="desc"  className="form-control " placeholder="Idea description"     />
             <button className="btn btn-primary" onClick={(e)=>this.handleSubmit(e)}>Add New Idea</button> 
           </div>

          </form>
          </div>
          <div className="row">
           
            { this.handleDisplay(cardData)}

          </div>
         
          </div>
      </div>

    )
 
}
 
  
}
 
export default App;
