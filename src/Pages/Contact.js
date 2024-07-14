import React from 'react';
import Footer from '../Components/Footer';
import './Contact.css';

const Contact = () => {
    return (
        <>
            <div id='contact'>
                <div className='contact-flex'>
                    <div>
                        <h1 className='bold centre feedback'>
                            Questions and Feedbacks are welcome
                        </h1>
                        <a
                            href='mailto:ershubhamingole@gmail.com'
                            className='pc heading bold centre feedback'
                        >
                            ershubhamingole@gmail.com
                        </a>
                    </div>
                    <form
                        className='contact-form mobile'
                        action='mailto:ershubhamingole@gmail.com'
                        method='GET'
                    >
                        <div className='form-group'>
                            <input
                                type='text'
                                className='form-control'
                                placeholder='Name'
                                required
                            />
                        </div>
                        <div className='form-group'>
                            <input
                                type='email'
                                className='form-control'
                                aria-describedby='emailHelp'
                                placeholder='Email'
                                required
                            />
                        </div>
                        <div className='form-group'>
                            <textarea
                                className='form-control'
                                rows='4'
                                placeholder='Message'
                                required
                            />
                        </div>
                        <input type='submit' className='btn' value='Submit' />
                    </form>
                </div>
                <Footer />
            </div>
        </>
    );
};
export default Contact;
