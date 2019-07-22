import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const RecipeDetail = props => {
  if (!props.recipe) {
    return (
      <p
        style={props.style}
        className={classNames('h3 p2 bg-white italic center', props.className)}
      >
        Please select the racipe first to check the details
      </p>
    );
  }
  return (
    <div
      style={props.style}
      className={classNames('p2 bg-white', props.className)}
    >
      <span>{props.recipe.category}</span>
      <h2 className="h2">{props.recipe.name}</h2>
      <img alt={props.recipe.name} src={props.recipe.image} className="fit" />
      <span>{props.recipe.calories}</span>
      <h4 className="h4"> Ingredients</h4>
      <ul>
        {props.recipe.ingredients.map(ingredients => (
          <li key={ingredients}>{ingredients}</li>
        ))}
      </ul>
      <h4 className="h4"> Steps </h4>
      <ul>
        {props.recipe.steps.map(steps => (
          <li key={steps}>{steps}</li>
        ))}
      </ul>
      <Link to={`/recipe/${props.recipe.id}`}>
          See More...
      </Link>
    </div>
  );
};

RecipeDetail.propTypes = {
  style: PropTypes.object,
  recipe: PropTypes.object,
  className: PropTypes.string,
};
export default RecipeDetail;
