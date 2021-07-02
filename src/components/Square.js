import {useState} from "react";

const Square = ({color}) => {
    const [backgroundColor, setBackgroundColor] = useState("rgb(255, 255, 255)");
    return (
        <div
        style={{
            border: "3px solid black",
            backgroundColor: backgroundColor,
            height: 100,
            width: 100,
            margin: 10
        }} 
        onClick={() => setBackgroundColor(color)}
        
        />
    )
}

export default Square;