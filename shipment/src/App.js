import React from 'react';
import Header from './components/Header';
import ShipmentList from './components/ShipmentList';
 
// fetch(`${API_URL}/db`)
// .then(res => res.json())
// .then(resData  => {
//     // console.log(resData);
//     resData.shipments.map((first, ind)=> {
//         console.log(first.name);
//         Object.values(first).map((sec, ind2)=> {
//           if(Array.isArray(sec)) {
//             console.log(sec);
//           }
//         })
//       })
      
// })
 
 class App extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            error : null,
            isLoaded : false,
            shipments : []       
            
        };
      
    }

    componentDidMount() {       
        fetch(`${API_URL}/db`)
            .then(res => res.json())
            .then((result) => {
                this.setState({
                    isLoaded : true,
                    shipments : result
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
  

    renderTableHeader() {
        let header = Object.keys(this.state.shipments[0])
        return header.map((key, index) => {
           return <th key={index}>{key.toUpperCase()}</th>
        })
     }

     renderTableData() {
        return this.state.shipments.map((shipment, index) => {
           const { id, name, mode, type, destination, total, status, userId  } = shipment //destructuring
           return (
              <tr key={index}>
                 <td>{id}</td>
                  <td> {name}  </td>              
                  <td> {mode}  </td>                  
                  <td> {type}  </td>                 
                  <td>  {destination} </td>           
                  <td>{total}   </td>                
                  <td> {status}  </td>               
                  <td>  {userId} </td>                  
              </tr>
           )
        })
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
                    <Header />
                   
                    {/*                   
                         {this.state.shipments.map( (shipment, key) => {
                            return (
                                <div key={key}>
                                    <p>{shipment.id}</p>
                                    <p>{shipment.name}</p> 
                                    <p>{shipment.mode}</p> 
                                    <p>{shipment.type}</p>
                                    <p>{shipment.destination}</p> 
                                    <p>{shipment.total}</p>
                                    <p>{shipment.status}</p>
                                    <p>{shipment.userId}</p>
                                </div>
                                )                            
                        })
                    } */}

                    <table id='shipments'>
                        <tbody>
                            <tr>{this.renderTableHeader()}</tr>
                            {this.renderTableData()}
                        </tbody>
                        </table>
                        
                    {/* <ShipmentList shipments={ shipments } /> */}
                </div>
        )
     } 
         
 
    };  
}

export default App;

