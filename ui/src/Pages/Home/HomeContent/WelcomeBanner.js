import React from 'react';
import { Link } from 'react-router-dom';
import './WelcomeBanner.css';


function WelcomeBanner() {
    return ( 
        <>
            <div className='hero'>
                <div className='content'>
                    <h1>WELCOME TO ADBELMOUMAN</h1>
                    <span>KINDERGARTEN, PRIMARY, MIDDLE SCHOOL & HIGH SCHOOL</span>
                </div>
                <div className='button'>
                    <Link to="/contact">
                        <button className='primary-btn'>
                            Contact Us Now 
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default WelcomeBanner;