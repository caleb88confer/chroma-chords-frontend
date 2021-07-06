
import { nmToRgb } from "../conversions/nmToRgb";

function SpectrumSlider ({handleSliderOutput, spectrumValue, selectedColor}) {



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
            value="380"
            onChange={handleSliderOutput}
            value={selectedColor.wavelength}
            style = {{
                direction: "rtl",
                width: 450
            }}
            >
            </input>
           <h3>{spectrumValue.nanometers}</h3>
        </div>
    )
   
}


export default SpectrumSlider;