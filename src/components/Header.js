import { Link } from "react-router-dom";


function Header (props) {
    return (
        <div className="header"
        style = {{
            border: "1px solid red",
            
        }}
        >
            <h1>Chroma Chords</h1>
            <nav>
                <Link to="/recform">
                <h3>save</h3>

                </Link>
                <Link to="/gallery">
                    <h3>gallery</h3>
                </Link>

            </nav>

        </div>
    )
}

export default Header;