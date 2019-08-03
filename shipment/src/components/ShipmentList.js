import React from 'react';

const ShipmentList = (props) => {
    return(
    <div>
        <h2>ShipmentList from json</h2>
        <table width="100%" border="1">
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>cargo</th>
                    <th>mode</th>
                    <th>type</th>
                    <th>destination</th>
                    <th>origin</th>
                    <th>services</th>
                    <th>total</th>
                    <th>status</th>
                    <th>userid</th>
                </tr>
        </thead>	
        <tbody>
        
            
      
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>     
  </tbody>
</table>

{props.shipments.map((shipment, ind)=> {               
                 <div key={ind}>     
                    {shipment.name}
                
                </div>
                                 
                })}       
</div>
    );
            }

export default ShipmentList;
