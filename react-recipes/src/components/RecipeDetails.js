import React from 'react';

const RacipeDetails = (props) => {
    if(!props.recipe) {
        return(
        <p  style={props.style}>Please select the racipe first to check the details</p>
        );
    }


    return ( 
    <div style ={props.style}>
        <span>{props.recipe.category}</span>
       <h2>{props.recipe.name}</h2>
            <img src={props.recipe.image} />
            <span>{props.recipe.calories}</span>
           <h4> Ingredients</h4>
           <ul>
               {props.recipe.ingredients.map( ingredients => (
                   <li key={ingredients}>
                        {ingredients}
                    </li>
               ) )}
            </ul>
            <h4> Steps </h4>
           <ul>
               {props.recipe.steps.map( steps => (
                   <li  key={steps}>
                        {props.recipe.steps} 
                    </li>
               ) )}
            </ul>
 
    </div> 
    );

};

export default RacipeDetails;