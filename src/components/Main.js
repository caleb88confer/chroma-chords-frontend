import {Route,  Switch} from "react-router-dom";
import {useState} from "react";
// import pages
import Welcome from '../pages/Welcome';
import Canvas from "../pages/Canvas";
import Gallery from "../pages/Gallery";
import RecForm from "../pages/RecForm";
import About from "../pages/About";


function Main (props) {
    // state used for recalling from Database
    const [chords, setChords] = useState(null);


    const [chord, setChord] = useState({
        author: "",
        title: "",
        tones: {
            bass: 800,
            tenor: 800,
            alto: 800,
            soprano: 800

        },
        colors: {
            bass: "rgb(255,255,255)",
            tenor: "rgb(255,255,255)",
            alto: "rgb(255,255,255)",
            soprano: "rgb(255,255,255)"
        }
    });

    const handleLinkSet = () => {
    
        const URL = "https://chroma-chords-backend.herokuapp.com/chords/";
    
        const getChords = async () => {
            const response = await fetch(URL);
            const data = await response.json();
            setChords(data);
        };
    
        getChords();
    }


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
                <Route 
                path="/gallery" render={(rp) => (
                    <Gallery 
                    chord={chord}
                    setChord={setChord}
                    {...rp}
                    />
                )}
                />
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
                 <Route>
                     <About/>
                 </Route>


            </Switch>
        </main>
    )
}

export default Main;