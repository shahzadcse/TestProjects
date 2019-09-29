import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Header from './Header';
import NotFound from './NotFound';
import ShipmentDetails from './ShipmentDetails';
import Contact from './Contact';


class App extends React.Component {

    constructor(props) {
        super(props);

            this.state = {
                onShipmentClick: null,
                    };
      
    };
      
    componentDidMount() {
        fetch(`${API_URL}/shipments`)
          .then(res => res.json())
          .then(shipments => {
            
            this.setState({ shipments });
          });
    }

    
    onShipmentClick(id) {
        fetch(`${API_URL}/shipments/${id}`)
          .then(res => res.json())
          .then(shipment => {
            this.setState({ currentShipment: shipment });
          });
      };

     
        render() {

            return (
                <div>
                        <BrowserRouter>
                            <main>
                                <Header /> 
                                <Switch>
                                    <Route exact path="/" component={Home}></Route>
                                    {/* <Route path="/shipments/:id" component={ShipmentDetails}></Route> */}
                                    <Route path="/shipments/:id" component={ShipmentDetails}></Route>
                                    <Route path="/contact" component={Contact}></Route>
                                    <Route component={NotFound} ></Route>
                                </Switch>
                            </main>
                        </BrowserRouter>
                    
                </div>
            );
}   
}

export default App;
