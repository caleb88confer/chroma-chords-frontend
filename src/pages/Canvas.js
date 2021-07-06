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
    wavelength: ''
    });
    // state for color slider
    const [spectrumValue, setSpectrumValue] = useState({
        nanometers: selectedColor.wavelength
    });


    const handleSliderOutput = (event) => {
        event.preventDefault();
        setSpectrumValue({[event.target.name]: event.target.value });
        const spectrumValueParsed = parseInt(spectrumValue.nanometers);
        const spectrumRgb = nmToRgb(spectrumValueParsed);
        setSelectedColor({
            color: spectrumRgb,
            wavelength: spectrumValueParsed,
        })
    }


    // for prevstate look up the codesandbox react forms
    function handleSelect(color, wavelength) {
        setSelectedColor({
            color: color,
            wavelength: wavelength,
        })
        setSpectrumValue(wavelength);

    }

    return (
   
        <div>
           <Link to="/canvas/spectrum">
               <button>Full Spectrum</button>
           </Link>
           <Link to="/canvas/palette">
               <button>Chromatic</button>
           </Link>
            <Switch>
            <section style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }} >
                <Route path="/canvas/palette">
                <ColorPalette
                ChromaticScale={ChromaticScale} 
                handleSelect={handleSelect}/>

                <h2>Selected Color</h2>
                <div style={{
                    border: "3px solid black",
                    height: 35,
                    width: 35,
                    margin: 10,
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

          
            <Voices
            chord={chord}
            setChord={setChord}
            selectedColor={selectedColor}/>
        </div>
    )
}

export default Canvas;


    

        