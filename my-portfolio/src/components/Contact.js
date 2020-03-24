import React from 'react';
// import { withFormik, Form, Field } from 'formik';
import NavBar from './NavBar';
import Footer from './Footer';
import ContactForm from './ContactForm';

function Contact() {
    return (
        <div>
            <NavBar />
            <ContactForm />
            <Footer />
        </div>
    )
}

export default Contact;