import AltoColor from "./AltoColor";
import BassColor from "./BassColor";
import TenorColor from "./TenorColor";
import SopranoColor from "./SopranoColor";

function Voices ({color, wavelength, setChord}) {
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
            wavelength={wavelength}
            color={color}
            />
            <TenorColor
            setChord={setChord} 
            wavelength={wavelength}
            color={color}
            />
            <AltoColor 
            setChord={setChord}
            wavelength={wavelength}
            color={color}
            />
            <SopranoColor
            setChord={setChord} 
            wavelength={wavelength}
            color={color}
            />
  
        </section>


        </div>

    );
}
export default Voices;