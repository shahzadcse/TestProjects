import React from 'react';
import Header from './components/Header';
import ShipmentList from './components/ShipmentList';

fetch(`${API_URL}/shipments`)
    .then(res => res.json)
    .then(json => console.log(json));

class App extends React.Component {
    render() {
        return (
                <div>
                    <Header />
                    <ShipmentList />
                </div>
        )
    };
}

export default App;

