import React, { Component } from 'react'
import PhotoFrame from './PhotoFrame'
import AddPhoto from './AddPhoto'
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import Single from './Single'
import EditPhoto from './EditPhoto'


class Main extends Component {
    constructor() {
        super()

        this.state = {
            loading: true
        }
    }


    componentDidMount() {
        this.props.startLoadingPhotos().then(() => {
            this.setState({
                loading: false
            })
        })

        this.props.startLoadingComments().then(() => {
            this.setState({
                loading: false
            })
        })

    }

    render() {
        
        return (
            <Router>
                <div>

                    <Link to="/">
                        <h1>PhotoApp</h1>
                    </Link>

                    
                        <Route exact path="/AddPhoto" render={({ history }) => (
                            <AddPhoto {...this.props} onHistory={history} />

                        )} />

                        <Route exact path="/single/:id" render={(params, history) => (
                            <Single {...this.props} loading={this.state.loading}  {...params} onHistory={history} />
                        )} />

                        <Route exact path="/EditPhoto/:id" render={(params, history) => (
                            <div className="wrapper">
                                <EditPhoto {...this.props} onHistory={history}  {...params} />
                            </div>
                        )} />
                        <Route exact path="/" render={({ history }) => ( 
                                <PhotoFrame {...this.props} loading={this.state.loading} history={history} /> 
                            
                        )} /> 
                </div>
            </Router>

        );
    }
}
/*
function SimulateDB() {
    return (
        [{
            id: "0",
            description: "beautiful sea",
            imageLink: "https://picsum.photos/800/600?image=14"
        }, {
            id: "1",
            description: "Coffee cup",
            imageLink: "https://picsum.photos/800/600?image=30"
        }, {
            id: "2",
            description: "Freedom",
            imageLink: "https://picsum.photos/800/600?image=50"
        }, {
            id: "3",
            description: "Farm",
            imageLink: "https://picsum.photos/800/600?image=85"
        }]
    );
}
*/

export default Main