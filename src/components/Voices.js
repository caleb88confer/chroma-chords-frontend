import AltoColor from "./AltoColor";
import BassColor from "./BassColor";
import TenorColor from "./TenorColor";
import SopranoColor from "./SopranoColor";

// conversions 
import {wavelengthToHz} from "../conversions/wavelengthToHz";
import {LightHzToBass} from "../conversions/LightHzToBass";
import {LightHzToTenor} from "../conversions/LightHzToTenor";
import {LightHzToAlto} from "../conversions/LightHzToAlto";
import {LightHzToSoprano} from "../conversions/LightHzToSoprano";

function Voices ({selectedColor, setChord, chord}) {
// set freq for oscillators=====================================
    const bassHz = LightHzToBass(wavelengthToHz(chord.tones.bass));
    const tenorHz = LightHzToTenor(wavelengthToHz(chord.tones.tenor));
    const altoHz = LightHzToAlto(wavelengthToHz(chord.tones.alto));
    const sopranoHz = LightHzToSoprano(wavelengthToHz(chord.tones.soprano));
  

// play button ==================================
const play = () => {
// innitialize audio context======================================
    const ac = new AudioContext();
    const buffer = ac.createBuffer(
        2,
        ac.sampleRate * 2,
        ac.sampleRate
        )
// set master volume control======================================
    const masterGain = ac.createGain()
    masterGain.gain.value = 0.4;
    masterGain.connect(ac.destination);
// set Bass oscilator=============================================
const bass = () => {
    console.log("bass", bassHz);
    const bassGain = ac.createGain();
    bassGain.gain.setValueAtTime(0.4, 0);
    bassGain.gain.exponentialRampToValueAtTime(0.001, ac.currentTime + 3.5);

    const bassOsc = ac.createOscillator();
    bassOsc.type = "triangle";
    bassOsc.frequency.setValueAtTime(bassHz, 0);
    bassOsc.connect(bassGain);
    bassGain.connect(masterGain);
    bassOsc.start();
    bassOsc.stop(ac.currentTime + 3.5);
}
const tenor = () => {
    console.log("tenor", tenorHz);
    const tenorGain = ac.createGain();
    tenorGain.gain.setValueAtTime(0.4, 0);
    tenorGain.gain.exponentialRampToValueAtTime(0.001, ac.currentTime + 3.5);

    const tenorOsc = ac.createOscillator();
    tenorOsc.type = "triangle";
    tenorOsc.frequency.setValueAtTime(tenorHz, 0);
    tenorOsc.connect(tenorGain);
    tenorGain.connect(masterGain);
    tenorOsc.start();
    tenorOsc.stop(ac.currentTime + 3.5);
}
const alto = () => {
    console.log("alto", altoHz);
    const altoGain = ac.createGain();
    altoGain.gain.setValueAtTime(0.4, 0);
    altoGain.gain.exponentialRampToValueAtTime(0.001, ac.currentTime + 3.5);

    const altoOsc = ac.createOscillator();
    altoOsc.type = "triangle";
    altoOsc.frequency.setValueAtTime(altoHz, 0);
    altoOsc.connect(altoGain);
    altoGain.connect(masterGain);
    altoOsc.start();
    altoOsc.stop(ac.currentTime + 3.5);
}
const soprano = () => {
    console.log("soprano", sopranoHz);
    const sopranoGain = ac.createGain();
    sopranoGain.gain.setValueAtTime(0.4, 0);
    sopranoGain.gain.exponentialRampToValueAtTime(0.001, ac.currentTime + 3.5);

    const sopranoOsc = ac.createOscillator();
    sopranoOsc.type = "triangle";
    sopranoOsc.frequency.setValueAtTime(sopranoHz, 0);
    sopranoOsc.connect(sopranoGain);
    sopranoGain.connect(masterGain);
    sopranoOsc.start();
    sopranoOsc.stop(ac.currentTime + 3.5);
}
bass();
tenor();
alto();
soprano();

}





    return (
        <div>
<h1>Voices</h1>
<button onClick={play}>
    play
</button>

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
            chord={chord}
            />
            <TenorColor
            setChord={setChord} 
            selectedColor={selectedColor}
            chord={chord}
            />
            <AltoColor 
            setChord={setChord}
            selectedColor={selectedColor}
            chord={chord}
            />
            <SopranoColor
            setChord={setChord} 
            selectedColor={selectedColor}
            chord={chord}
            />
  
        </section>


        </div>

    );
}
export default Voices;