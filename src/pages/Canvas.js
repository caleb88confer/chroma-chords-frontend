import {useState, useEffect } from "react";

import ColorPalette from "../components/ColorPalette";
import Voices from "../components/Voices";



function Canvas (props) {
    const [selectedColor, setSelectedColor] = useState("rgb(255,255,255)");

    
    function handleSelect(selection) {
        setSelectedColor(selection)

    }
    
    
    return (
        <div>
            <ColorPalette handleSelect={handleSelect}/>

        <section style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        }} >
            <h2>Selected Color</h2>
            <div style={{
                border: "3px solid black",
                height: 35,
                width: 35,
                margin: 10,
                backgroundColor: selectedColor
            }} />
        </section>
        <Voices color={selectedColor}/>
        </div>
    )
}

export default Canvas;