import { useState, useEffect } from "react";
import {Link} from "react-router-dom";

function Gallery ({setChord, history}) {
    const [chords, setChords] = useState(null);
    
    const URL = "https://chroma-chords-backend.herokuapp.com/chords/";

    const getChords = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        setChords(data);
    };

    useEffect (() => {
        getChords();

    })



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
                    <h1 className="galleryTitle">{chord.title}</h1>
                    <h2 className="galleryAuthor">{chord.author}</h2>
                </div>
                
        ));
    };

    const loading = () => {
        return <h1>Loading...</h1>
    };


    return (
        <div className="gallery-block">
        <div className="container ">
            <h1 className="aboutTitle">Gallery</h1>
            <hr></hr>
            <div className="galleryContainer">
            {chords ? loaded() : loading()}

            </div>


        </div>
        </div>
    );
}

export default Gallery;