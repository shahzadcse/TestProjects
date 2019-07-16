import React from 'react';

const RacipeDetails = (props) => (
    <div style ={props.style}>
       <h2>Jalapeno Popper Grilled Cheese Sandwich</h2>
            <img src="http://static.food2fork.com/Jalapeno2BPopper2BGrilled2BCheese2BSandwich2B12B500fd186186.jpg" />
           <h4> Ingredients</h4>
           <ul>
               <li>2 jalapeno peppers, cut in half lengthwise and seeded</li>
               <li>2 slices sour dough bread</li>
               <li>1 tablespoon butter, room temperature</li>
               <li>2 tablespoons cream cheese, room temperature</li>
               <li>1/2 cup jack and cheddar cheese, shredded</li>
               <li>1 tablespoon tortilla chips, crumbled</li> 

           </ul>
 
    </div>
);

export default RacipeDetails;