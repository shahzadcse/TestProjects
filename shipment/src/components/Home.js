import React from 'react';
import ShipmentList from './ShipmentList';
import ShipmentDetails from './ShipmentDetails';

 
class Home extends React.Component {

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

    componentDidMount() {
        fetch(`${API_URL}/db`)
            .then(res => res.json())
            .then((result) => {
                this.setState({
                    isLoaded : true,
                    shipments : result.shipments
                });
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
                 <ShipmentList 
                        shipments={shipments} 
                        onShipmentClick={ (id) => this.onShipmentClick(id)}
                        />
                 
                </div>
        )
     } 
         
 
    };  
}

export default Home;
