import React from 'react';
import ContactForm from '../ContactForm/ContactForm';
import ContactHeader from '../ContactHeader/ContactHeader';
import '../../App.css';

function Contact() {
	return (
		<div className='contact-page-container'>
			<ContactHeader />
			<ContactForm />
		</div>
	);
}

export default Contact;