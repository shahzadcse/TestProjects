import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Header from './Header';
import NotFound from './NotFound';
import ShipmentDetails from './ShipmentDetails';
import Contact from './Contact';

const App = () => (
        
            <div>
                    <BrowserRouter>
                        <main>
                            <Header /> 
                            <Switch>
                                <Route exact path="/" component={Home}></Route>
                                <Route path="/shipments" component={ShipmentDetails}></Route>
                                <Route path="/contact" component={Contact}></Route>
                                <Route component={NotFound}></Route>
                            </Switch>
                        </main>
                    </BrowserRouter>
                
            </div>
       
);

export default App;
