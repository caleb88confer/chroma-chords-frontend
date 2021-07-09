import { Link } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css"


function Header (props) {
    return (
        <div className="header1"
        >
            <div className="linksDiv">
            <div className="headerLinksContainer">
            <Link to="/canvas/palette">
                <h5 className="headerLinks">Canvas</h5>
            </Link>
            </div>
            <div className="headerLinksContainer">
            <Link to="/gallery">
                <h5 className="headerLinks">Gallery</h5>
            </Link>
            </div>
            <div className="headerLinksContainer extra">
            <Link to="/about">
                <h5 className="headerLinks">About</h5>
            </Link>
            </div>

            </div>
           {/* <a href="#" className="sidenav-trigger" data-target="mobile-links">
               <i className="material-icons medium menu">menu</i>
           </a> */}

            <div 
            className="tag"
            >
            <h1 className="title"
            >Chroma Chords</h1>

            </div>
       
         

        
            </div>
           
        
    )
}

export default Header;