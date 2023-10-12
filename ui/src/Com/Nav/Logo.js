import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom'; 

function Logo() {
    const facebookUrl = 'https://www.facebook.com/ecolesabdelmoumen';
    const instagramUrl = 'https://www.instagram.com/ecolesabdelmoumen/';
    const whiteIconStyle = { color: 'white' };

    return (
        <>
            <section className='head'>
                <div className='container flexSB'>
                    <div className='logo'>
                        <Link to="/">
                            <img src='./img/logo1.png' alt='Logo' />
                        </Link>
                    </div>

                    <div className='social'>
                        <a href={facebookUrl} target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faFacebookF} className="icon" style={whiteIconStyle} />
                        </a>
                        <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram} className="icon" style={whiteIconStyle} />
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Logo;
