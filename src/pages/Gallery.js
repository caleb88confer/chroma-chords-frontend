import { useState } from "react";
import {Link} from "react-router-dom";

function Gallery ({setChord, history}) {
    const [chords, setChords] = useState(null);
    
    const URL = "https://chroma-chords-backend.herokuapp.com/chords/";

    const getChords = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        setChords(data);
    };

    getChords();


    const loaded = () => {
        return chords.map((chord) => (
                <div className="galleryItem"
                onClick={() => {
                    setChord({
                        author: chord.author,
                        title: chord.title,
                        tones: chord.tones,
                        colors: chord.colors
                    })
                    history.push(`/canvas/${chord._id}`)
                }}
                >
                    <h1>{chord.title}</h1>
                    <h2>{chord.author}</h2>
                </div>
        ));
    };

    const loading = () => {
        return <h1>Loading...</h1>
    };


    return (
        <div>
            <h1>Gallery</h1>
            {chords ? loaded() : loading()}


        </div>
    );
}

export default Gallery;