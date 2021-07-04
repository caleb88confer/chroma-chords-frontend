import { black } from "color-name";
import { nmToRgb } from "../conversions/nmToRgb";

function SpectrumSlider ({handleSliderOutput, spectrumValue, handleSelect}) {

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
                backgroundColor: spectrumRgb 

            }} 
            className="spectrumBox" />
            <input 
            type="range" 
            name="nanometers" 
            min="380" max="780"
            onChange={handleSliderOutput}
            // onChange={() => handleSelect(spectrumRgb, spectrumValueParsed)}
            >

            </input>
           <h3>{spectrumValue.nanometers}</h3>
        </div>
    )
}

export default SpectrumSlider;