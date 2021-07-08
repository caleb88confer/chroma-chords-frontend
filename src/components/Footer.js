import {Link} from "react-router-dom";

function Footer (props) {
    return (
        <footer>
        <div className="footer">
            <Link to="/gallery">
                <h3>Gallery</h3>
            </Link>
            <Link to="/about">
                <h3>About</h3>
            </Link>

        </div>
        </footer>


    )
}

export default Footer;