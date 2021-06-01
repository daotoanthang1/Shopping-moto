import React from 'react';
import PropTypes from 'prop-types';
import "./ContactIcon.scss"

const ContactIcon = () => {
    return (
            <div className="contact-icon">
                <p>Liên hệ:</p>
                <i className="fa fa-facebook contact-icon-item" aria-hidden="true"></i>
                <i className="fa fa-youtube contact-icon-item" aria-hidden="true"></i>
                <i className="fa fa-twitter contact-icon-item" aria-hidden="true"></i>
                <i className="fa fa-instagram contact-icon-item" aria-hidden="true"></i>
            </div>
    );
};


ContactIcon.propTypes = {

};


export default ContactIcon;
