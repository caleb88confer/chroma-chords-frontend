import {useState} from "react";

const BassColor = ({selectedColor, setChord, chord}) => {



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
                            bass: 800
                        },
                        colors: {
                            ...prevState.colors,
                            bass: "rgb(255,255,255)"
                        }
    
    
                        
                        
                    };
                });
            }
            }
            >X</button>
        <div className="voicePad"
        style={{
            backgroundColor: chord.colors.bass,    
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
        <p className="voiceLabel">Bass</p>
        </div>
    )
}

export default BassColor;