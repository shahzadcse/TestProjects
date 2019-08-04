import React from 'react';


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
          <tr key={index}>
             <td>{id}</td>
              <td> {name}  </td>   
              <td>
              
              { cargo.length > 0 && cargo.map( (item, index) => {
                     return (
                      <div key={index}>                            
                        <p>{item.type}/{item.description}/{item.volume} </p>
                     </div>
                     )
              })}
              </td>           
              <td> {mode}  </td>                  
              <td> {type}  </td>                 
              <td>  {destination} </td>    
              <td>{origin}</td> 
              <td>{ services.length > 0 && services.map( (item, index) => {
                     return (
                      <div key={index}>                            
                        <p>{item.type}  </p>
                     </div>
                     )
              })}</td>      
              <td>{total}   </td>                
              <td> {status}  </td>               
              <td>  {userId} </td>                  
          </tr>
       )
    })
 }


const ShipmentList = (props) => {
    return(
    <div>
         { props.shipments &&  <table className='shipments'>
                         <tbody>
                             <tr>{renderTableHeader(props)}</tr>
                                {renderTableData(props)}
                         </tbody>
                         </table>}       
</div>
    );
            }

export default ShipmentList;
