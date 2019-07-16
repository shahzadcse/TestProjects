import React from 'react';

const RacipeList = (props) => (
    <div style={props.style}>
       <h2> RacipeList</h2>
       <ul>
           <li>
                <span>Jalapeno Popper Grilled Cheese Sandwich</span>
                <span>Sandwich</span>
            </li>
            <li>
                <span>Creepy Halloween Skull Cupcakes</span>
                <span>Desserts</span>
            </li>
            <li>
                <span>Jalapeno Popper Grilled Cheese Sandwich</span>
                <span>Sandwich</span>
            </li>
            <li>
                <span>Creepy Halloween Skull Cupcakes</span>
                <span>Desserts</span>
            </li>

       </ul>
    </div>
);

export default RacipeList;