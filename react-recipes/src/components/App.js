import React from 'react';
import Header from  './Header.js';
import RecipeList from  './RecipeList.js';
import RecipeDetails from  './RecipeDetails.js';





{/*    Class component */}
class App extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            recipes : [],
            currentRecipe : null,
        };

       this.onRecipeClick = this.onRecipeClick.bind(this);
    }

    componentDidMount() {
        fetch(`${API_URL}/v1/recipes`)
        .then(res => res.json())
        .then(recipes => {
            this.setState({ recipes });
        });
    }
    
    onRecipeClick = (id) => {
        fetch(`${API_URL}/v1/recipes/${id}`)
        .then(res => res.json())
        .then(recipe => {
            this.setState({ currentRecipe : recipe });
        });
    }
    
    render() {

        const {recipes, currentRecipe} = this.state;
        return (
            <div> 
        <Header />
        <main style={{display:'flex'}} >
        <RecipeList 
        recipes={recipes}
        onClick={this.onRecipeClick}
        style={{flex:3}}
        />
        <RecipeDetails 
        recipe={currentRecipe} 
        style={{flex:5}}
        />    
        </main>
                 
   </div>
        );
    }

}



{/* functional component  
const App = () => (
    <div> 
        <Header />
        <main style={{display:'flex'}} >
        <RecipeList style={{flex:3}}/>
        <RecipeDetails style={{flex:5}}/>    
        </main>
                 
   </div>
);
*/}

export default App;