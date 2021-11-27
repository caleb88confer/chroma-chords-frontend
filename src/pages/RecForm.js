

function RecForm ({chord, setChord, history}) {

    const URL = "https://chroma-chords-backend.herokuapp.com/chords/";

    const createChord = async (chord) => {
        await fetch(URL, {
            method: "POST",
            headers: {
                "Content-type": "Application/json",
            },
            body: JSON.stringify(chord),
        });
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        createChord(chord);
        history.push('/canvas');


    };

    function handleChange(event) {
        setChord(function (prevState) {
            return {
                ...prevState,
                [event.target.name]: event.target.value
            };
        });
        
    }
    return (
        <div className="rec-form-block">
        <div className="container">
            <h1 className="aboutTitle">RecForm</h1>
            <hr></hr>
            <form className="recForm"
            onSubmit={handleSubmit}>
                <label>
                    <span>TITLE</span>
                    <input
                        className="recForm"  
                        name="title"
                        value={chord.title}
                        onChange={handleChange}
                        />
                </label>
                <label>
                    <span>AUTHOR</span>
                    <input
                        className="recForm" 
                        name="author"
                        value={chord.author}
                        onChange={handleChange}
                        />
                </label>
                <button className="btn">Save</button>

                
            </form>
        </div>
        </div>
    )
}

export default RecForm;