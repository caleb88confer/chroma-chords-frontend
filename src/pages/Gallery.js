import { useState } from "react";
import {Link} from "react-router-dom";

function Gallery (props) {
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
            <Link to={`/canvas/${chord._id}`}>
                <div>
                    <h1>{chord.title}</h1>
                    <h2>{chord.author}</h2>
                </div>
            </Link>
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