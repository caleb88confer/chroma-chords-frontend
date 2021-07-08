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
    delay: false,
    thicken: false
})

const handleDelayTrigger = (event) => {
    if(event.target.value !== fx.delay) {
    setFx(function (prevState) {
        console.log(event.target.value);
        return {
            ...prevState, [event.target.name]: event.target.value
        }
    })
    } else {
        setFx(function (prevState) {
            return {
                delay: false,
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
    if (fx.delay === "on") {
        let delay = ac.createDelay();
        const feedback = ac.createGain();
        feedback.gain.value = 0.4;
        delay.connect(feedback);
        feedback.connect(delay);
        delay.delayTime.value = 0.35;
        masterGain.connect(delay);
        delay.connect(ac.destination); 
    }
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
    if(fx.thicken === "on") {
        if (tenorHz > 85.26512829121201) {
            console.log("tenor", tenorHz);
            const tenorGain = ac.createGain();
            tenorGain.gain.setValueAtTime(.5, 0);
            tenorGain.gain.exponentialRampToValueAtTime(0.001, ac.currentTime + 3.5);
        
            const tenorOsc = ac.createOscillator();
            tenorOsc.type = "triangle";
            tenorOsc.frequency.setValueAtTime(tenorHz, 0);
            tenorOsc.connect(tenorGain);
            tenorGain.connect(masterGain);
            tenorOsc.start();
            tenorOsc.stop(ac.currentTime + 3.5);

            const tenorOsc1 = ac.createOscillator();
            tenorOsc1.type = "triangle";
            tenorOsc1.frequency.setValueAtTime(tenorHz, 0);
            tenorOsc1.detune.setValueAtTime(3, 0);
            tenorOsc1.connect(tenorGain);
            tenorGain.connect(masterGain);
            tenorOsc1.start();
            tenorOsc1.stop(ac.currentTime + 3.5);
        }
    } else {
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
 
}

// set alto osc========================================================
const alto = () => {
    if (fx.thicken === "on"){
        if (altoHz > 170.53025658242402) {
            console.log("alto", altoHz);
            const altoGain = ac.createGain();
            altoGain.gain.setValueAtTime(.15, 0);
            altoGain.gain.exponentialRampToValueAtTime(0.001, ac.currentTime + 3.5);
        
            const altoOsc = ac.createOscillator();
            altoOsc.type = "triangle";
            altoOsc.frequency.setValueAtTime(altoHz, 0);
            altoOsc.connect(altoGain);
            altoGain.connect(masterGain);
            altoOsc.start();
            altoOsc.stop(ac.currentTime + 3.5);

            const altoOsc1 = ac.createOscillator();
            altoOsc1.type = "triangle";
            altoOsc1.frequency.setValueAtTime(altoHz, 0);
            altoOsc1.detune.setValueAtTime(3, 0)
            altoOsc1.connect(altoGain);
            altoGain.connect(masterGain);
            altoOsc1.start();
            altoOsc1.stop(ac.currentTime + 3.5);

            const altoOsc2 = ac.createOscillator();
            altoOsc2.type = "triangle";
            altoOsc2.frequency.setValueAtTime(altoHz, 0);
            altoOsc2.detune.setValueAtTime(-3, 0)
            altoOsc2.connect(altoGain);
            altoGain.connect(masterGain);
            altoOsc2.start();
            altoOsc2.stop(ac.currentTime + 3.5);
        }
    } else {
        if (altoHz > 170.53025658242402) {
            console.log("alto", altoHz);
            const altoGain = ac.createGain();
            altoGain.gain.setValueAtTime(.4, 0);
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

}
// set soprano osc ===============================================================
const soprano = () => {
    if (fx.thicken === "on") {
    if (sopranoHz > 341.06051316484803) {
    const sopranoGain = ac.createGain();
    sopranoGain.gain.setValueAtTime(0.13, 0);
    sopranoGain.gain.exponentialRampToValueAtTime(0.001, ac.currentTime + 3.5);

    const sopranoOsc = ac.createOscillator();
    sopranoOsc.type = "triangle";
    sopranoOsc.frequency.setValueAtTime(sopranoHz, 0);
    sopranoOsc.connect(sopranoGain);
    sopranoGain.connect(masterGain);
    sopranoOsc.start();
    sopranoOsc.stop(ac.currentTime + 3.5);

    const sopranoOsc1 = ac.createOscillator();
    sopranoOsc1.type = "triangle";
    sopranoOsc1.frequency.setValueAtTime(sopranoHz, 0);
    sopranoOsc1.detune.setValueAtTime(3, 0)
    sopranoOsc1.connect(sopranoGain);
    sopranoGain.connect(masterGain);
    sopranoOsc1.start();
    sopranoOsc1.stop(ac.currentTime + 3.5);


    const sopranoOsc2 = ac.createOscillator();
    sopranoOsc2.type = "triangle";
    sopranoOsc2.frequency.setValueAtTime(sopranoHz, 0);
    sopranoOsc2.detune.setValueAtTime(-3, 0)
    sopranoOsc2.connect(sopranoGain);
    sopranoGain.connect(masterGain);
    sopranoOsc2.start();
    sopranoOsc2.stop(ac.currentTime + 3.5);
}
} else { 
    if (sopranoHz > 341.06051316484803) {
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
                <p className="fxLabel">Delay</p>
    <label>
      Off
      <input onClick={handleDelayTrigger} name="delay" type="checkbox"/>
      <span class="lever"></span>
      On
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
            <p className="transportLabel">Effects</p>
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