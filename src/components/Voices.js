import {Link} from "react-router-dom";
import {useState} from "react";

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
const [fx, setFx] = useState({
    reverb: false,
    thicken: false
})

const handleReverbTrigger = (event) => {
    if(event.target.value !== fx.reverb) {
    setFx(function (prevState) {
        console.log(event.target.value);
        return {
            ...prevState, [event.target.name]: event.target.value
        }
    })
    } else {
        setFx(function (prevState) {
            return {
                reverb: false,
                thicken: prevState.thicken
            }
        })
    }
}

const handleThickenTrigger = (event) => {
    if(event.target.value !== fx.thicken) {
    setFx(function (prevState) {
        console.log(event.target.value);
        return {
            ...prevState, [event.target.name]: event.target.value
        }
    })
    } else {
        setFx(function (prevState) {
            return {
                reverb: prevState.reverb,
                thicken: false
            }
        })
    }
}



// set freq for oscillators=====================================
    let bassHz = LightHzToBass(wavelengthToHz(chord.tones.bass));
    let tenorHz = LightHzToTenor(wavelengthToHz(chord.tones.tenor));
    let altoHz = LightHzToAlto(wavelengthToHz(chord.tones.alto));
    let sopranoHz = LightHzToSoprano(wavelengthToHz(chord.tones.soprano));
  

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
    if (bassHz > 42.632564145606004) {
    console.log("bass", bassHz);
    const bassGain = ac.createGain();
    bassGain.gain.setValueAtTime(2, 0);
    bassGain.gain.exponentialRampToValueAtTime(0.001, ac.currentTime + 3.5);

    const bassOsc = ac.createOscillator();
    bassOsc.type = "triangle";
    bassOsc.frequency.setValueAtTime(bassHz, 0);
    bassOsc.connect(bassGain);
    bassGain.connect(masterGain);
    bassOsc.start();
    bassOsc.stop(ac.currentTime + 3.5);
}
}
const tenor = () => {
    if (tenorHz > 85.26512829121201) {
    console.log("tenor", tenorHz);
    const tenorGain = ac.createGain();
    tenorGain.gain.setValueAtTime(.7, 0);
    tenorGain.gain.exponentialRampToValueAtTime(0.001, ac.currentTime + 3.5);

    const tenorOsc = ac.createOscillator();
    tenorOsc.type = "triangle";
    tenorOsc.frequency.setValueAtTime(tenorHz, 0);
    tenorOsc.connect(tenorGain);
    tenorGain.connect(masterGain);
    tenorOsc.start();
    tenorOsc.stop(ac.currentTime + 3.5);
}
}
const alto = () => {
    if (altoHz > 170.53025658242402) {
    console.log("alto", altoHz);
    const altoGain = ac.createGain();
    altoGain.gain.setValueAtTime(.5, 0);
    altoGain.gain.exponentialRampToValueAtTime(0.001, ac.currentTime + 3.5);

    const altoOsc = ac.createOscillator();
    altoOsc.type = "triangle";
    altoOsc.frequency.setValueAtTime(altoHz, 0);
    altoOsc.connect(altoGain);
    altoGain.connect(masterGain);
    altoOsc.start();
    altoOsc.stop(ac.currentTime + 3.5);
}
}
const soprano = () => {
    if (sopranoHz > 341.06051316484803) {
    console.log("soprano", sopranoHz);
    const sopranoGain = ac.createGain();
    sopranoGain.gain.setValueAtTime(0.25, 0);
    sopranoGain.gain.exponentialRampToValueAtTime(0.001, ac.currentTime + 3.5);

    const sopranoOsc = ac.createOscillator();
    sopranoOsc.type = "triangle";
    sopranoOsc.frequency.setValueAtTime(sopranoHz, 0);
    sopranoOsc.connect(sopranoGain);
    sopranoGain.connect(masterGain);
    sopranoOsc.start();
    sopranoOsc.stop(ac.currentTime + 3.5);
}
}
bass();
tenor();
alto();
soprano();

}





    return (
        <div>

<section className="voiceSection container">


        <div className="voiceSetter">
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
        </div>

        <p className="voiceSectionLabel">Voice Set</p>
  
        </section>

        <section className="thirdSection">
            <div className="fxSection">


            <div class="switch">
                <p className="fxLabel">Reverb</p>
    <label>
      butts
      <input onClick={handleReverbTrigger} name="reverb" type="checkbox"/>
      <span class="lever"></span>
      putts
    </label>
  </div>
  <div class="switch">
  <p className="fxLabel">Thicken</p>
    <label>
      Off
      <input onClick={handleThickenTrigger} name="thicken" type="checkbox"/>
      <span class="lever"></span>
      On
    </label>
  </div>

            </div>
            <div className="transportSection">
            <button 
                className="btn green"
                onClick={play}>
                play
            </button>
            <Link to="/recform">
                <button
                className="btn red"
                >
                    record
                </button>
               
            </Link>
            </div>
            <p className="transportLabel">Transport</p>

        </section>

 


        </div>

    );
}
export default Voices;