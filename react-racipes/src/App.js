import React from 'react';
import Logo from './static/images/logo.png';


{/*
    Class component 
class App extends React.Component {

    render() {
        return (
            <h1> Hello world !</h1>
        );
    }

}
*/}

{/* functional component */}
const App = () => (
    <div>

        <h1>Hello World ! from functional component</h1>
        <img src={Logo} />
   </div>
);


export default App;