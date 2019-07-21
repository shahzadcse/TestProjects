import React from 'react';
import PropTypes from 'prop-types';

const RecipeList = props => (
  <div style={props.style}>
    <h2 className="h2"> Recipes</h2>
    <ul className="list-reset">
      {props.recipes.map(recipe => (
        <li
          className="py2 border-bottom border-bottom-dotted pointer"
          key={recipe.id}
          onClick={() => props.onClick(recipe.id)}
        >
          <span>{recipe.name}</span>
          <span>{recipe.category}</span>
        </li>
      ))}
    </ul>
  </div>
);

RecipeList.propTypes = {
  style: PropTypes.object,
  recipe: PropTypes.object,
  onClick: PropTypes.func,
};

export default RecipeList;
