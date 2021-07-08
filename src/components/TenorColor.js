import {useState} from "react";

const TenorColor = ({selectedColor, setChord, chord}) => {

    return (
        <div className="voiceCollect">
           <button 
            className="clearbtn"
            onClick={() => 
                {
                setChord(function (prevState) {
                    return {
                        ...prevState,
                        tones: {
                            ...prevState.tones,
                            tenor: 800
                        },
                        colors: {
                            ...prevState.colors,
                            tenor: "rgb(255,255,255)"
                        }
    
    
                        
                        
                    };
                });
            }
            }
            >X</button>
        <div className="voicePad"
        style={{
            backgroundColor: chord.colors.tenor,
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
         <p className="voiceLabel">Tenor</p>
        </div>
    )
}

export default TenorColor;