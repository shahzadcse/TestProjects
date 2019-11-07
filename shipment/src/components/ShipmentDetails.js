import React from 'react';
import ShipmentList from './ShipmentList';
import { Link } from "react-router-dom";



var renderTableHeader = function(currentShipment)  {    
    let header = Object.keys(currentShipment)
    
    return header.map((key, index) => {
       return <th key={index}>{key.toUpperCase()}</th>
    })
    
 }

 var  renderTableData = function(currentShipment) {
      
    
        
       return (
          <tr >
               <td data-label='id'>
                  {currentShipment.id}  
               </td>
              <td data-label='name'> {currentShipment.name}  </td>   
               <td  data-label='cargo'>
              
              { currentShipment.cargo.length > 0 && currentShipment.cargo.map( (item, index) => {
                     return (
                      <div key={index}>                            
                        <p>{item.type}/{item.description}/{item.volume} </p>
                     </div>
                     )
              })}
              </td>            
              <td data-label='mode'> {currentShipment.mode}  </td>                  
              <td data-label='type'> {currentShipment.type}  </td>                 
              <td data-label='destination'>  {currentShipment.destination} </td>    
              <td data-label='origin'>{currentShipment.origin}</td> 
               <td data-label='services'>{ currentShipment.services.length > 0 && currentShipment.services.map( (item, index) => {
                     return (
                      <div key={index}>                            
                        <p>{item.type}  </p>
                     </div>
                     )
              })}</td>       
              <td data-label='total'>{currentShipment.total}   </td>                
              <td data-label='status'> {currentShipment.status}  </td>               
              <td data-label='User Id'>  {currentShipment.userId} </td>                  
          </tr>
       )
     
 }

class ShipmentDetails extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            error: null,
            isLoaded: false,
            shipments: [],
            currentShipment: null, 
            isEmptyShipment: true,
        };
    }
    componentDidMount() {
        this.loadShipmentData();
    }
    loadShipmentData() {
        const id = this.props.match.params.id ? this.props.match.params.id : null;
        if (id) {
            fetch(`${API_URL}/shipments/${id}`)
                .then(res => res.json())
                .then((result) => {
                    console.log(result);
                    this.setState({

                        isLoaded: true,
                        currentShipment: result,
                        isEmptyState: false,
                        onShipmentClick: true

                    });
                    // this.props.history.push(`/shipments/${id}`);
                },
                // Handle error 
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    })
                },
            );
        }
    }


    

    render() {
        const { error, isLoaded, currentShipment } = this.state;
        return (
            <div>
                {this.state.currentShipment && <table className='shipments-details'>
                         <thead>
                         <tr>{renderTableHeader(currentShipment)}</tr>     
                        </thead>   
                         <tbody> 
                                 {renderTableData(currentShipment)} 
                         </tbody>
                         </table>}
                
                {error && 'NO result found'}
               
                <Link to='/' className='back-to-home' >Back to Home</Link>  
                 
            </div>
        )
    };

}

export default ShipmentDetails;
