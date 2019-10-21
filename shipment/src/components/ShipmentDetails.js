import React from 'react';
import ShipmentList from './ShipmentList';
class ShipmentDetails extends React.Component {

    
    constructor(props) {
        super(props);
        
        this.state = {
            error : null,
            isLoaded : false,
            shipments : [] ,
            currentShipment : null,  
            isEmptyShipment: true,          
        }; 
        alert('hi');
    }
    onShipmentClick(id) {
        
        fetch(`${API_URL}/shipments/${id}`)
        .then(res => res.json())
        .then((result) => {
           console.log(result);
            this.setState({

                isLoaded : true,
                currentShipment : result,
                isEmptyState: false,
                onShipmentClick: true
                
            });
            this.props.history.push(`/shipments/${id}`);
        },
        // Handle error 
        (error) => {
            this.setState({
                isLoaded: true,
                error
            })
        },
        )        
       
    }

    render() { 

        const {error, isLoaded, shipments, currentShipment} = this.state;

        if(error){
            return <div>Error in loading</div>
        }else if (!isLoaded) {
            return  <div>  
               {this.state.currentShipment && <ShipmentList 
                    shipments={shipments.id} details={this.state.currentShipment}           
               />} </div>

               

        } 
         
 
    };

}



 
export default ShipmentDetails;
