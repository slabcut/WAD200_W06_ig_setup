
import "../styles/cards.css";

import React from "react";
import Card from "./Card";

function Cards() {

   return (
      <div className="cards">
         <Card image="https://picsum.photos/800"/>
         <Card image="https://picsum.photos/800/1200"/>
         <Card image="https://picsum.photos/800/900"/>
      </div>
   );
}

export default Cards;