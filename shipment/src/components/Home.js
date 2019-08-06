import React from 'react';
import ShipmentList from './ShipmentList';
 
class Home extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            error : null,
            isLoaded : false,
            shipments : []       
            
        };
      
    }

    componentDidMount() {     
        fetch(`${API_URL}db`)
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

        const {error, isLoaded, shipments} = this.state;

        if(error){
            return <div>Error in loading</div>
        }else if (!isLoaded) {
            return <div>Loading ...</div>
        }else{ 
            return (
                <div>
                   
                    <ShipmentList shipments={shipments} />
                </div>
        )
     } 
         
 
    };  
}

export default Home;
