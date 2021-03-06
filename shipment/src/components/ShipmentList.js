import React from 'react';
import { Link } from "react-router-dom";

// var renderTableHeader = function(props)  {    
//     let header = Object.keys(props.shipments[0])
//     return header.map((key, index) => {
//        return <th key={index}>{key.toUpperCase()}</th>
//     })
    
//  }

 var  renderTableData = function(props) {
    return props.shipments.map((shipment, index) => {
       const { id, name, cargo, mode, type, destination,origin, services, total, status, userId  } = shipment //destructuring
        
       return (
          <tr key={index} >
               <td data-label='id'>
                  <Link to={`/shipments/${id}`}>{id}</Link>  
               </td>
              <td data-label='name'> {name}  </td>   
              {/* <td  data-label='cargo'>
              
              { cargo.length > 0 && cargo.map( (item, index) => {
                     return (
                      <div key={index}>                            
                        <p>{item.type}/{item.description}/{item.volume} </p>
                     </div>
                     )
              })}
              </td>            */}
              {/* <td data-label='mode'> {mode}  </td>                  
              <td data-label='type'> {type}  </td>                  */}
              <td data-label='destination'>  {destination} </td>    
              <td data-label='origin'>{origin}</td> 
              {/* <td data-label='services'>{ services.length > 0 && services.map( (item, index) => {
                     return (
                      <div key={index}>                            
                        <p>{item.type}  </p>
                     </div>
                     )
              })}</td>      
              <td data-label='total'>{total}   </td>                
              <td data-label='status'> {status}  </td>               
              <td data-label='User Id'>  {userId} </td>                   */}
          </tr>
       )
    })
 }

class ShipmentList extends Component {
   state = {
      search: ""
   } 
}
 

const ShipmentList = (props) => {
    return(
    <div className="container"> 
         <div className="clearfix lg-col-12 px2 right">
            <input type="text" label="Search" icon="search"   />
         </div>
         <div class="px2 clearfix lg-col-12">
         { props.shipments &&  <table className='shipments'>
                         <thead>
                         {/* <tr>{renderTableHeader(props)}</tr>      */}
                         <tr>
                            <th width='10%'>ID</th>
                            <th>NAME</th>
                            <th>DESTINATION</th>
                            <th>ORIGIN</th>
                         </tr>
                        </thead>   
                         <tbody> 
                                {renderTableData(props)}
                         </tbody>
                         </table>}  
                         </div>     
</div>
    );
            }

export default ShipmentList;
