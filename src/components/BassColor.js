import {useState} from "react";

const BassColor = ({selectedColor, setChord, chord}) => {



    return (
        <div>
            <h3>Bass</h3>
        <div
        style={{
            border: "3px solid black",
            backgroundColor: chord.colors.bass,
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
                        bass: selectedColor.wavelength
                    },
                    colors: {
                        ...prevState.colors,
                        bass: selectedColor.color
                    }


                    
                    
                };
            });
        }
        }
        
        />
        </div>
    )
}

export default BassColor;