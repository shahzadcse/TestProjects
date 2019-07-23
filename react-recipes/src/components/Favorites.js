import React from 'react';
import PropTypes from 'prop-types';
import RecipeList from './RecipeList';

const Favorites = ({ state, toggleFavorite }) => (
        <div className="px4">
        <h2 className="h2">Favorite Recipes</h2>
        <RecipeList
         recipes={state.recipes.filter(r => state.favorites.includes(r.id))}
         favorites={state.favorites}
         onFavorited={toggleFavorite}
        />
        </div>
);

Favorites.propTypes = {
        toggleFavorite: PropTypes.func,
        state: PropTypes.object,
};

export default Favorites;
