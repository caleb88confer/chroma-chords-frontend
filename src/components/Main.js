import {Route,  Switch} from "react-router-dom";
import {useState} from "react";
// import pages
import Welcome from '../pages/Welcome';
import Canvas from "../pages/Canvas";
import Gallery from "../pages/Gallery";
import RecForm from "../pages/RecForm";



function Main (props) {

    const [chord, setChord] = useState({
        author: "",
        title: "",
        tones: {
            bass: 380,
            tenor: 380,
            alto: 380,
            soprano: 380

        },
        colors: {
            bass: "rgb(255,255,255)",
            tenor: "rgb(255,255,255)",
            alto: "rgb(255,255,255)",
            soprano: "rgb(255,255,255)"
        }
    });


    return (
        <main>
            <Switch>
                <Route exact path="/">
                    <Welcome />
                </Route> 
                <Route path="/canvas">
                  <Canvas
                    chord={chord}
                    setChord={setChord}
                  />  
                </Route>
                <Route path="/gallery">
                    <Gallery 
                    chord={chord}
                    />
                </Route>
                <Route 
                path="/recform" render={(rp) => (
                    <RecForm 
                    chord={chord}
                    setChord={setChord}
                    {...rp}
                    />
                )} 
                 />
                    
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