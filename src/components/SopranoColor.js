import {useState} from "react";

const SopranoColor = ({selectedColor, setChord, chord}) => {

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
                            soprano: 800
                        },
                        colors: {
                            ...prevState.colors,
                            soprano: "rgb(255,255,255)"
                        }
    
    
                        
                        
                    };
                });
            }
            }
            >X</button>
        <div className="voicePad"
        style={{
            backgroundColor: chord.colors.soprano,
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
        <p className="voiceLabel">Soprano</p>
        </div>
    )
}

export default SopranoColor;