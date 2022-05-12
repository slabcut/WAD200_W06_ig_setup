import "../styles/navigation.css";

import React from "react";

//import logo from "../images/logo.png";

import { ReactComponent as HomeSVG } from "../images/home.svg";
import { ReactComponent as InboxSVG } from "../images/inbox.svg";
import { ReactComponent as ExploreSVG } from "../images/explore.svg";
import { ReactComponent as LikeSVG } from "../images/like.svg";

function Navigation() {
   return (

      <div className="navigation">

       { 
       // <img className="logo" src={logo} alt="logo" /> 
       }

         <div className="menu">
            <HomeSVG className="icon" />
            <InboxSVG className="icon" />
            <ExploreSVG className="icon" />
            <LikeSVG className="icon" />
         </div>

      </div>

   );
}

export default Navigation;
