import React from 'react';

class CardEdit extends React.Component {

   

    render(){
        
        return(

            <button 
            className={this.props.className} 
            
            onClick={this.props.onClick} 
            >
                Edit
            </button>          
        )
    }
}

export default CardEdit;

