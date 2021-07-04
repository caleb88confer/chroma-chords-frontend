import { black } from "color-name";
import { nmToRgb } from "../conversions/nmToRgb";

function SpectrumSlider ({handleSliderOutput, spectrumValue, selectedColor}) {

    const spectrumValueParsed = parseInt(spectrumValue.nanometers);

    const spectrumRgb = nmToRgb(spectrumValueParsed);

// state======
// ==========


    return (
        <div>
            <div
            style={{
                height: 100,
                width: "75%",
                border: "1px solid black",
                margin: "auto",
                backgroundColor: selectedColor.color

            }} 
            className="spectrumBox" />
            <input 
            type="range" 
            name="nanometers" 
            min="380" max="780"
            onChange={handleSliderOutput}
            value={selectedColor.wavelength}
            >

            </input>
           <h3>{spectrumValue.nanometers}</h3>
        </div>
    )
}

export default SpectrumSlider;