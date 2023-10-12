import React, { useState } from 'react';
import axios from 'axios';
import './Contact.css';

function Contact() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        message: '',
    });

    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3001/api/contact', formData);
            setFormSubmitted(true);
        } catch (error) {
            console.error('Error:', error);
            alert('Error submitting contact form');
        }
    };

    return (
        <>
            <div className='fullContact'>
                <h1>Contact Us</h1>
                <iframe
                    className='map'
                    title="Google Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3198.7042335394535!2d-7.6257269644354695!3d33.57341636486582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d2ba7b2fa1bd%3A0xcad77e9ba2db49c6!2sBd%20Abdelmoumen%2C%20Casablanca%2020250!5e1!3m2!1sen!2sma!4v1695963440680!5m2!1sen!2sma"
                    width="1519"
                    height="600"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                {formSubmitted ? (
                    <div className='done-message'>DONE!</div>
                ) : (
                    <div className='form'>
                        <h2>Enter your information</h2>
                        <form onSubmit={handleSubmit}>
                            <div className='input-group'>
                                <input
                                    type='text'
                                    name='firstName'
                                    placeholder='First Name'
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    required
                                    className='firstname'
                                />
                                <input
                                    type='text'
                                    name='lastName'
                                    placeholder='Last Name'
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    required
                                    className='lastname'
                                />
                                <input
                                    type='email'
                                    name='email'
                                    placeholder='Email'
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className='email'
                                />
                                <input
                                    type='text'
                                    name='phoneNumber'
                                    placeholder='Phone Number'
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
                                    className='phoneNumber'
                                />
                                <textarea
                                    name='message'
                                    placeholder='Message'
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className='message'
                                />
                                <button type='submit' className='submit-button'>
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                )}
            </div>
        </>
    );
}

export default Contact;
