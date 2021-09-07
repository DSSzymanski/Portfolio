import React from 'react';
import ContactForm from '../ContactForm/ContactForm';
import ContactHeader from '../ContactHeader/ContactHeader';
import ContactLinks from '../ContactLinks/ContactLinks';
import '../../App.css';

function Contact() {
	return (
		<div className='contact-page-container'>
			<ContactHeader />
			<ContactForm />
			<ContactLinks />
		</div>
	);
}

export default Contact;