import React from 'react';
import '../../App.css';
import './ContactHeader.css';

function ContactHeader() {
    return (
        <>
            <div className="contact-page-header">
				<h1>Contact Information</h1>
                <div className="contact-blurb">
                    Feel free to reach out and contact me, even just to comment or suggest improvements on the portfolio, any feedback is welcome.
                </div>
			</div>
        </>
    );
}

export default ContactHeader