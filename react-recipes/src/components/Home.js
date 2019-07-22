import React from 'react';
import RecipeList from './RecipeList';
import RecipeDetail from './RecipeDetail';
import PropTypes from 'prop-types';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {     
      currentRecipe: null,
    };
  }

  onRecipeClick = id => {
    fetch(`${API_URL}/v1/recipes/${id}`)
      .then(res => res.json())
      .then(recipe => {
        this.setState({ currentRecipe: recipe });
      });
  };



  render() {
    const { currentRecipe } = this.state;
    const { recipes, favorites } = this.props.state;
    return (
      <div>
        <main className="flex px4">
        <div  style={{ flex: 3 }}>
        <h2 className="h2"> Recipes</h2>
        <RecipeList
            recipes={recipes}
            favorites={favorites}
            onClick={this.onRecipeClick}
            className="pl4"           
            onFavorited={this.props.toggleFavorite}             
          />
        </div>          
          <RecipeDetail
            className="ml4"
            recipe={currentRecipe}
            style={{ flex: 5 }}
          />
        </main>
      </div>
    );
  }
}

Home.propTypes = {
  toggleFavorite : PropTypes.func,
  recipes : PropTypes.object,
  favorites : PropTypes.func,
  state : PropTypes.object,
}
export default Home;
