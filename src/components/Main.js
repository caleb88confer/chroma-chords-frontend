import {Route,  Switch} from "react-router-dom";
import {useState} from "react";
// import pages
import Welcome from '../pages/Welcome';
import Canvas from "../pages/Canvas";
import Gallery from "../pages/Gallery";
import RecForm from "../pages/RecForm";
import Audio from "../components/Audio";


function Main (props) {

    const [chord, setChord] = useState({
        author: "",
        title: "",
        tones: {
            bass: null,
            tenor: null,
            alto: null,
            soprano: null

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
                    <Gallery />
                </Route>
                <Route path="/recform">
                    <RecForm chord={chord}/>
                </Route>
                <Route 
                 path="/canvas/:id" render={(rp) => (
                     <Canvas 
                     {...rp}
                     />
                     
                 )}
                 />
                 <Route path="/audio">
                    <Audio />
                 </Route>

            </Switch>
        </main>
    )
}

export default Main;