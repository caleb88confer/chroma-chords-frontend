import {useState} from "react";

const AltoColor = ({selectedColor, setChord, chord}) => {
    const [wavelength, setWavelength] =
    useState(null)
    return (
        <div>
            <h3>Alto</h3>
        <div
        style={{
            border: "3px solid black",
            backgroundColor: chord.colors.alto,
            height: 100,
            width: 100,
            margin: 10
        }} 
        onClick={() => 
            {
            setChord(function (prevState) {
                return {
                    ...prevState,
                    tones: {
                        ...prevState.tones,
                        alto: selectedColor.wavelength
                    },
                    colors: {
                        ...prevState.colors,
                        alto: selectedColor.color
                    }


                    
                    
                };
            });
        }
        }
        
        />
        </div>
    )
}

export default AltoColor;