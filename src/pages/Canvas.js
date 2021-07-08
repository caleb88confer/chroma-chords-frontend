import {useState } from "react";
import { Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";

import ColorPalette from "../components/ColorPalette";
import SpectrumSlider from "../components/SpectrumSlider";
import Voices from "../components/Voices";
// data import
import ChromaticScale from "../scales/ChromaticScaleData";
// funcitons
import { nmToRgb } from "../conversions/nmToRgb";




function Canvas ({setChord, chord}) {
    // set selected color state
    const [selectedColor, setSelectedColor] = useState({
    color:    "rgb(255,255,255)",
    wavelength: 380
    });
    // state for color slider
    const [spectrumValue, setSpectrumValue] = useState({
        nanometers: selectedColor.wavelength
    });


    const handleSliderOutput = (event) => {
        // event.preventDefault();
        setSpectrumValue({[event.target.name]: event.target.value });
        const spectrumValueParsed = parseInt(spectrumValue.nanometers);
        const spectrumRgb = nmToRgb(spectrumValueParsed);
        setSelectedColor({
            color: spectrumRgb,
            wavelength: spectrumValueParsed,
        })
    }


   
    function handleSelect(color, wavelength) {
        setSelectedColor({
            color: color,
            wavelength: wavelength,
        })
        setSpectrumValue({
            nanometers: wavelength});

    }

    return (
   
        <div className="instrumentPanel">
            <div className="selectorSection"> 
            
            <div className="paletteSwitcher">
           <Link to="/canvas/spectrum">
               <button className="btn cyan darken-2 waves-effect waves-light">Spectrum</button>
           </Link>
           <Link to="/canvas/palette">
               <button className="btn amber darken-4 waves-effect waves-light">Chromatic</button>
           </Link>

            </div>
            <Switch>
            <section className="colorSelector" >
                <Route path="/canvas/palette">
                <ColorPalette
                ChromaticScale={ChromaticScale} 
                handleSelect={handleSelect}/>
                <div 
                style={{
                    border: "3px solid black",
                    height: "2.7rem",
                    width: "2.7rem",
                    margin: "1rem",
                    backgroundColor: selectedColor.color
                }} 
                />
                </Route>

                <Route path="/canvas/spectrum">
                <SpectrumSlider 
                handleSliderOutput={handleSliderOutput}
                spectrumValue={spectrumValue}
                selectedColor={selectedColor}
                />
                </Route>
        
            </section>
            </Switch>
            <p className="selectorSectionTitle">Color Selector</p>
            </div>

          
            <Voices
            chord={chord}
            setChord={setChord}
            selectedColor={selectedColor}/>
        </div>
    )
}

export default Canvas;


    

        