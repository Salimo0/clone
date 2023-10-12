import { Link } from "react-router-dom";
import './Navbar.css';
import Logo from "./Logo";

function Navbar() {
    return (
        <>
            <Logo />
            <nav className="Navbar">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>
                    <li>
                        <Link to="/SchoolGallery">School Gallery</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Navbar;
