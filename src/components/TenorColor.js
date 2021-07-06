import {useState} from "react";

const TenorColor = ({selectedColor, setChord, chord}) => {

    return (
        <div>
            <h3>Tenor</h3>
        <div
        style={{
            border: "3px solid black",
            backgroundColor: chord.colors.tenor,
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
                        tenor: selectedColor.wavelength
                    },
                    colors: {
                        ...prevState.colors,
                        tenor: selectedColor.color
                    }


                    
                    
                };
            });
        }
        }
        
        />
        </div>
    )
}

export default TenorColor;