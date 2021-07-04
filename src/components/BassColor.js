import {useState} from "react";

const BassColor = ({selectedColor, setChord}) => {
    const [backgroundColor, setBackgroundColor] = useState("rgb(255, 255, 255)");
    const [wavelength, setWavelength] =
    useState(null)


    return (
        <div>
            <h3>Bass</h3>
        <div
        style={{
            border: "3px solid black",
            backgroundColor: backgroundColor,
            height: 100,
            width: 100,
            margin: 10
        }} 
        onClick={() => 
            {setBackgroundColor(selectedColor.color)
            setWavelength(selectedColor.wavelength)
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