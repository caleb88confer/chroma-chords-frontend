import {useState} from "react";

const AltoColor = ({selectedColor, setChord, chord}) => {
    const [wavelength, setWavelength] =
    useState(null)
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
                            alto: 800
                        },
                        colors: {
                            ...prevState.colors,
                            alto: "rgb(255,255,255)"
                        }
    
    
                        
                        
                    };
                });
            }
            }
            >X</button>
        <div className="voicePad"
        style={{
            backgroundColor: chord.colors.alto,
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
         <p className="voiceLabel">Alto</p>
        </div>
    )
}

export default AltoColor;