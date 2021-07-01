import {Route,  Switch} from "react-router-dom";

// import pages
import Welcom from '../pages/Welcome';
import Canvas from "../pages/Canvas";
import Gallery from "../pages/Gallery";
import RecForm from "../pages/RecForm";


function Main (props) {
    return (
        <main>
            <Switch>
                <Route exact path="/">
                    <Welcom />
                </Route> 
                <Route path="/canvas">
                  <Canvas />  
                </Route>
                <Route path="/gallery">
                    <Gallery />
                </Route>
                <Route path="/recform">
                    <RecForm />
                </Route>
                <Route 
                 path="/canvas/:id" render={(rp) => (
                     <Canvas 
                     {...rp}
                     />
                     
                 )}
                 />
            </Switch>
        </main>
    )
}

export default Main;