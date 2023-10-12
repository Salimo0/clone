import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    const facebookUrl = 'https://www.facebook.com/ecolesabdelmoumen';
    const instagramUrl = 'https://www.instagram.com/';
    const whiteIconStyle = { color: 'white' };

    return (
        <footer>
            <div className="footer-content">
                <div className="logo">
                    <img src='./img/logo.png' alt="School Logo" />
                </div>
                <div className="contact-info">
                    <h3>Contact Information</h3>
                    <p>School Abdelmouman</p>
                    <p>Casablanca, 20000</p>
                    <p>Email: institu.abdel@gmail.com</p>
                    <p>Phone: (+212) 5228-60148</p>
                </div>
                <div className="social-links">
                    <h3>Follow Us</h3>
                    <div className='fullicons'>
                        <a href={facebookUrl} target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faFacebookF} className="icon" style={whiteIconStyle} />
                        </a>
                        <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram} className="icon" style={whiteIconStyle} />
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2023 School Abdelmouman. All Rights Reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
