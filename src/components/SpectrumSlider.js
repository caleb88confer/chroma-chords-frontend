
import { nmToRgb } from "../conversions/nmToRgb";

function SpectrumSlider ({handleSliderOutput, spectrumValue, selectedColor}) {



    return (
        <div>
            <div
            style={{
                backgroundColor: selectedColor.color,
            }} 
            className="spectrumBox" />
            <input 
            className="slider1"
            type="range" 
            name="nanometers" 
            min="380" max="780"
            value="380"
            onChange={handleSliderOutput}
            value={selectedColor.wavelength}
            style = {{
                direction: "rtl",
            }}
            >
            </input>
        </div>
    )
   
}


export default SpectrumSlider;