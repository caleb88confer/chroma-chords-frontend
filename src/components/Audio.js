function Audio (props) {
    const audioContext = new AudioContext();

    const buffer = audioContext.createBuffer(
        1,
        audioContext.sampleRate * 1,
        audioContext.sampleRate
        )

        const channelData = buffer.getChannelData(0)

        for (let i = 0; i < buffer.length; i++) {
            channelData[i] = Math.random() * 2 - 1;
            
        }

        const primaryGainControl = audioContext.createGain()
        primaryGainControl.gain.setValueAtTime(0.05, 0);

        
        primaryGainControl.connect(audioContext.destination)

        const snareFilter = audioContext.createBiquadFilter();
        snareFilter.type = "highpass"
        snareFilter.frequency.value = 1500
        snareFilter.connect(primaryGainControl)

        const start = () => {
            const whiteNoiseSource = audioContext.createBufferSource();
            whiteNoiseSource.buffer = buffer;
            whiteNoiseSource.connect(primaryGainControl)
            whiteNoiseSource.start()
        }

        const snare = () => {
            const whiteNoiseSource = audioContext.createBufferSource();
            whiteNoiseSource.buffer = buffer;
            whiteNoiseSource.connect(snareFilter);
            whiteNoiseSource.start();

        }



        const kick = () => {
            const kickGain = audioContext.createGain();
            kickGain.gain.setValueAtTime(5, 0);
            kickGain.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.5);

            const kickOsc = audioContext.createOscillator();

            kickOsc.frequency.setValueAtTime(150, 0)
            kickOsc.frequency.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.5)
            kickOsc.connect(kickGain)
            kickGain.connect(primaryGainControl)
            kickOsc.start();
            kickOsc.stop(audioContext.currentTime + 0.5);
        }


      
        

    

    return (
        <div>
        <h1>audio</h1>
        <button onClick={start}>
            white noise
        </button>
        <button onClick={snare}>
            Snare
        </button>
        <button onClick={kick}>
            Kick
        </button>
        </div>
    )
}

export default Audio;