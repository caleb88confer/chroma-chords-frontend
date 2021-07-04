import AltoColor from "./AltoColor";
import BassColor from "./BassColor";
import TenorColor from "./TenorColor";
import SopranoColor from "./SopranoColor";

function Voices ({selectedColor, setChord}) {
    return (
        <div>
<h1>Voices</h1>
<section
            style={{
                display: "flex",
                justifyContent: "center",
                margin: 10
            }}
        >
            <BassColor
            setChord={setChord}
            selectedColor={selectedColor}
            />
            <TenorColor
            setChord={setChord} 
            selectedColor={selectedColor}
            />
            <AltoColor 
            setChord={setChord}
            selectedColor={selectedColor}
            />
            <SopranoColor
            setChord={setChord} 
            selectedColor={selectedColor}
            />
  
        </section>


        </div>

    );
}
export default Voices;