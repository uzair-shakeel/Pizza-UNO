import React from 'react';
import ContactForm from '../components/ContactUs/ContactForm';
import SocialLinks from '../components/ContactUs/SocialLinks';
import ContactInfo from '../components/ContactUs/ContactInfo';


const ContactUsPage = () => {
    return (
        <div className="container mx-auto px-4 py-8 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <ContactForm />
                </div>
                <div className='text-center md:text-left'>
                    <ContactInfo />
                    <SocialLinks />
                </div>
            </div>
        </div>
    );
};

export default ContactUsPage;
