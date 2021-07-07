

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
        <div>
            <h1>RecForm</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>TITLE</span>
                    <input 
                        name="title"
                        value={chord.title}
                        onChange={handleChange}
                        />
                </label>
                <label>
                    <span>AUTHOR</span>
                    <input 
                        name="author"
                        value={chord.author}
                        onChange={handleChange}
                        />
                </label>
                <button>Save</button>

                
            </form>
        </div>
    )
}

export default RecForm;