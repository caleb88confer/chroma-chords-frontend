
import { nmToRgb } from "../conversions/nmToRgb";

function SpectrumSlider ({handleSliderOutput, spectrumValue, selectedColor}) {



    return (
        <div>
            <div
            style={{
                height: 100,
                width: "100%",
                border: "3px solid black",
                margin: 0,
                backgroundColor: selectedColor.color,
                borderRadius: 7,
                

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
                width: "19.5rem"
            }}
            >
            </input>
        </div>
    )
   
}


export default SpectrumSlider;