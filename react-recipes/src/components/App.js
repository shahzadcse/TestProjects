import React from 'react';
import {
        BrowserRouter, Route, Switch
        } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Favorites from './Favorites';
import Contact from './Contact';
import NotFound from './NotFound';


class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            recipes: [],
            favorites: [],
        }
    }

    componentDidMount() {
        fetch(`${API_URL}/v1/recipes`)
          .then(res => res.json())
          .then(recipes => {
            this.setState({ recipes });
          });
      }
    
    toggleFavorite = id => {          
        this.setState(({ favorites, ...state }) => {
       
        if( favorites.includes(id)) {            
            return {...state, favorites: [favorites.filter( f => f.id !== id )]  }       
        }       
        return {...state, favorites: [...favorites, id] }

       });
    }

    render() {
        return(
            <BrowserRouter>   
                <main>  
                <Header />       
                    <Switch>
                        {/*<Redirect from="/home" to="/" />*/}
                        <Route
                        exact
                        path="/" 
                        render={ () => (
                                <Home state={this.state} toggleFavorite={this.toggleFavorite} />
                            )} />
                        <Route
                        exact
                        path="/favorites"
                        render={ () => (
                            <Favorites state={this.state} toggleFavorite={this.toggleFavorite} />)} />
                        <Route exact path="/contact" component={Contact} />
                        <Route component={NotFound} />
                    </Switch>
                </main>
            </BrowserRouter>
        );
    }
}
    

export default App;
