import { Link } from "react-router-dom";
import {FaBars} from 'react-icons/fa';
import { useState, useEffect } from "react";


import "materialize-css/dist/css/materialize.min.css"


function Header (props) {

  const [menuToggle, setMenuToggle] = useState(false);


  function handleMenuToggle() {
      if (menuToggle) {
          setMenuToggle(false);
      } else {
          setMenuToggle('menu-toggle-on');
      }
  }

    return (
        <div>

                <div className="header1">
                    <div className="space-block">

                    </div>
                    <div className="title-block">
                        <div 
                        className="tag"
                        >
                        <h1 className="title"
                        >Chroma Chords</h1>

                        </div>

                    </div>

                    <div className="menu-block">
                        <FaBars 
                        onClick={() => handleMenuToggle()} 
                        className="header-menu"
                        />    
                    </div>
            
                
                </div>
                
                <div className={`header ${menuToggle}`}>
                

                <div className="linksDiv">
                <div className="headerLinksContainer">
                <Link 
                onClick={() => handleMenuToggle()}
                to="/canvas/palette">
                    <h5 className="headerLinks">Canvas</h5>
                </Link>
                </div>
                <div className="headerLinksContainer">
                <Link 
                onClick={() => handleMenuToggle()}
                to="/gallery">
                    <h5 className="headerLinks">Gallery</h5>
                </Link>
                </div>
                <div className="headerLinksContainer extra">
                <Link 
                onClick={() => handleMenuToggle()}
                to="/about">
                    <h5 className="headerLinks">About</h5>
                </Link>
                </div>

                </div>
                
            </div>

        </div>
           
        
    )
}

export default Header;