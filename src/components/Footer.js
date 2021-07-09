import {Link} from "react-router-dom";

function Footer (props) {
    return (
        
        <div className="footer">
        
        <div className="footerLinksDiv">
            <div className="footerLinksContainer">
            <Link to="/canvas/palette">
                <h5 className="footerLinks">Canvas</h5>
            </Link>
            </div>
            <div className="footerLinksContainer">
            <Link to="/gallery">
                <h5 className="footerLinks">Gallery</h5>
            </Link>
            </div>
            <div className="footerLinksContainer extra">
            <Link to="/about">
                <h5 className="footerLinks">About</h5>
            </Link>
            </div>
            </div>

            <div className="copyrightContainer">
            <p className="copyright">Copyright 2021 Caleb Confer</p>
            </div>

        </div>
      


    )
}

export default Footer;