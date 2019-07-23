import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Favorites from './Favorites';
import Contact from './Contact';
import NotFound from './NotFound';
import Recipe from './Recipe';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes: [],
            favorites: [],
        };
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
            const index = favorites.indexOf(id);
            if (index > -1) {
                return {
                    ...state,
                    favorites: favorites.filter((idx) => idx !== id),
                                };
                            }
            return { ...state, favorites: [...favorites, id] };
       });
    }

    render() {
        return (
                <BrowserRouter>
                    <main>
                    <Header />
                        <Switch>
                            <Route
                                exact
                                path="/"
                                render={() => (
                                        <Home
                                            state={this.state}
                                            toggleFavorite={this.toggleFavorite}
                                        />
                                    )}
                            />
                            <Route
                                exact
                                path="/favorites"
                                render={() => (
                                        <Favorites
                                            state={this.state}
                                            toggleFavorite={this.toggleFavorite}
                                        />
                                    )}
                            />
                            <Route exact path="/recipe/:id" component={Recipe} />
                            <Route exact path="/contact" component={Contact} />
                            <Route component={NotFound} />
                        </Switch>
                    </main>
                </BrowserRouter>
            );
        }
}

export default App;
