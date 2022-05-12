
import "../styles/card.css";

import React from "react";


function Card({ image }) {
   return (
      <div className="card">

         <div className="cardheader">
            <h1>This is a Card.</h1>
         </div>

         <img className="cardimage" src={image} alt="card" />
      </div>
   );
}

export default Card;
