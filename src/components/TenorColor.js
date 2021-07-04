import {useState} from "react";

const TenorColor = ({color, wavelength, setChord}) => {
    const [backgroundColor, setBackgroundColor] = useState("rgb(255, 255, 255)");
    const [wl, setWl] =
    useState(null)
    return (
        <div>
            <h3>Tenor</h3>
        <div
        style={{
            border: "3px solid black",
            backgroundColor: backgroundColor,
            height: 100,
            width: 100,
            margin: 10
        }} 
        onClick={() => 
            {setBackgroundColor(color)
            setWl(wavelength)}
        }
        
        />
        </div>
    )
}

export default TenorColor;