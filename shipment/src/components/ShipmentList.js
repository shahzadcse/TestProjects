import React from 'react';
import { Link } from "react-router-dom";

var renderTableHeader = function(props)  {    
    let header = Object.keys(props.shipments[0])
    return header.map((key, index) => {
       return <th key={index}>{key.toUpperCase()}</th>
    })
    
 }

 var  renderTableData = function(props) {
    return props.shipments.map((shipment, index) => {
       const { id, name, cargo, mode, type, destination,origin, services, total, status, userId  } = shipment //destructuring
        
       return (
          <tr key={index} >
               <td data-label='id'>
                  <button onClick={() => props.onShipmentClick(shipment)}>{id}</button>  
               </td>
              <td data-label='name'> {name}  </td>   
              <td  data-label='cargo'>
              
              { cargo.length > 0 && cargo.map( (item, index) => {
                     return (
                      <div key={index}>                            
                        <p>{item.type}/{item.description}/{item.volume} </p>
                     </div>
                     )
              })}
              </td>           
              <td data-label='mode'> {mode}  </td>                  
              <td data-label='type'> {type}  </td>                 
              <td data-label='destination'>  {destination} </td>    
              <td data-label='origin'>{origin}</td> 
              <td data-label='services'>{ services.length > 0 && services.map( (item, index) => {
                     return (
                      <div key={index}>                            
                        <p>{item.type}  </p>
                     </div>
                     )
              })}</td>      
              <td data-label='total'>{total}   </td>                
              <td data-label='status'> {status}  </td>               
              <td data-label='User Id'>  {userId} </td>                  
          </tr>
       )
    })
 }


const ShipmentList = (props) => {
    return(
    <div className="flex px2"> 
         { props.shipments &&  <table className='shipments'>
                         <thead>
                         <tr>{renderTableHeader(props)}</tr>     
                        </thead>   
                         <tbody> 
                                {renderTableData(props)}
                         </tbody>
                         </table>}       
</div>
    );
            }

export default ShipmentList;
