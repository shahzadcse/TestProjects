import React from 'react';
import Header from  './Header.js';
import RecipeList from  './RecipeList.js';
import RecipeDetails from  './RecipeDetails.js';
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
        <Header />
        <main style={{display:'flex'}} >
        <RecipeList style={{flex:3}}/>
        <RecipeDetails style={{flex:5}}/>    
        </main>
                 
   </div>
);


export default App;