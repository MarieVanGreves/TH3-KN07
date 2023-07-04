import "../NavBar/NavBar.scss"
import logo from "./../../assets/images/TH3_KN07_LOGO.png"
import { Link, NavLink } from "react-router-dom";

function NavBar() {
    return (
        <>
        <nav className="generalNav">
            <div className="divLogo">
                <Link to="/#">
                <img className="logoNav" src={logo} alt="Logo en ASCII avec noté THE KNOT" />
                </Link>
            </div>
            <div className="linkRow">
                
            </div>
        </nav>
        </>
    )
}

export default NavBar;