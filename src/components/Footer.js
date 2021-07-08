import {Link} from "react-router-dom";

function Footer (props) {
    return (
        <footer>
        <div className="footer">
            <div className="footerLink">
            <Link to="/gallery">
                <h3>Gallery</h3>
            </Link>
            </div>
            <div className="footerLink">
            <Link to="/about">
                <h3>About</h3>
            </Link>
            </div>

        </div>
        </footer>


    )
}

export default Footer;