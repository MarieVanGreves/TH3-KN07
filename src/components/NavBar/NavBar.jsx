import "../NavBar/NavBar.scss"
import logo from "./../../assets/images/TH3_KN07_LOGO.png"
import {Link} from "react-router-dom"

function NavBar() {
    return (
        <>
        <div className="generalNav">
            <div className="divLogo">
                <img className="logoNav" src={logo} alt="Logo en ASCII avec noté THE KNOT" />
            </div>
            <div className="linkRow">
                
            </div>
        </div>
        </>
    )
}

export default NavBar;