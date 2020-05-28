import React from 'react';
import CardEdit from './CardEdit';
import CardRemove from './CardRemove';

class Card extends React.Component {
  
  handleEdit = (i) => {
    let data =  this.props.card[i];
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

   
    render() {
      let cardData = this.props.card || [];  
      console.log(cardData)
         
  if(cardData) {
    return (
      cardData.map((data, i) => 
        <div className="idea-card col-3 col-md-4" key={i}>
            <h3>{data.title}</h3>
            <p>{data.desc}</p>  
           <em>{data.cdate}</em> 
          {/* <button className="btn btn-warning"  onClick={()=>this.handleEdit(i)}>Edit</button> 
          <button className="btn btn-danger"  onClick={()=>this.handleRemove(i)}>Remove</button>  */}
          <CardEdit className="btn btn-warning"   onClick={()=>this.handleEdit(i)} />
          <CardRemove className="btn btn-danger" data={this.state.data[i] || []}/>
        </div> )
    )
  }
    }
  
  
  
}




export default Card;