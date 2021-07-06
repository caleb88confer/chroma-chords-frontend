import {useState} from "react";

const SopranoColor = ({selectedColor, setChord, chord}) => {

    return (
        <div>
            <h3>Soprano</h3>
        <div
        style={{
            border: "3px solid black",
            backgroundColor: chord.colors.soprano,
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
                        soprano: selectedColor.wavelength
                    },
                    colors: {
                        ...prevState.colors,
                        soprano: selectedColor.color
                    }


                    
                    
                };
            });
        }
        }
        
        />
        </div>
    )
}

export default SopranoColor;