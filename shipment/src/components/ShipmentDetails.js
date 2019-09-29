import React from 'react';

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

    }
    onShipmentClick(id) {
        
        fetch(`${API_URL}/shipments/${id}`)
        .then(res => res.json())
        .then((result) => {
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
            return <div>Loading ...</div>
        }else{ 
            return (
                <div>
                   
                    

                </div>
        )
     } 
         
 
    };

}



 
export default ShipmentDetails;
