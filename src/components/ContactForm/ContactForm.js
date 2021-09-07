import React from 'react';
import '../../App.css';
import './ContactForm.css';

function ContactForm() {
    return (
        <div className='contact-form-container'>
            <form action='mailto:danielsszymanski@gmail.com' method='POST' encType='multipart/form-data' name='EmailForm'>
                <div className="contact-info-container flex-center-center">
                    <div className="contact-info">
                            <label htmlFor='name'>Name:</label>
                            <input type='text' id='name' size='19' name='name'/>
                    </div>
                    <div className="contact-info">
                        <label htmlFor='email'>Email:</label>
                        <input type='email' id='email' name='email'/>  
                    </div>
                </div>
                <div className="contact-message">
                    <label htmlFor='message'>Message:</label>
                    <textarea name='message' id='message'></textarea>
                </div>
                <button type='submit' value='Submit'>Send</button>
            </form>  
        </div>
    );
}

export default ContactForm