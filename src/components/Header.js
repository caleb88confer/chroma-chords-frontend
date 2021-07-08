import { Link } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css"

function Header (props) {
    return (
        <div className="header1"
        >
           <a href="#" className="sidenav-trigger" data-target="mobile-links">
               <i className="material-icons medium menu">menu</i>
           </a>

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