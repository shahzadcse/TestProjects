import React from 'react';
import {
        BrowserRouter, Route, Switch
        } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Favorites from './Favorites';
import Contact from './Contact';
import NotFound from './NotFound';

const App = () => (
    <BrowserRouter>   
        <main>  
        <Header />       
            <Switch>
                {/*<Redirect from="/home" to="/" />*/}
                <Route exact path="/" component={Home} />
                <Route exact path="/favorites" component={Favorites} />
                <Route exact path="/contact" component={Contact} />
                <Route component={NotFound} />
            </Switch>
        </main>
    </BrowserRouter>
);

export default App;
