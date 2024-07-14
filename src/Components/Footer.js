import React from 'react';
import '../Pages/home.css';
import './Footer.css';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';

const Footer = () => {
    return (
        <>
            <div className='footer'>
                <div className='footer-social-pc'>
                    <a
                        className='social'
                        href='https://www.github.com/i9shubham'
                    >
                        <AiFillGithub size='1.6em' />
                    </a>
                    <a
                        className='social'
                        href='https://www.twitter.com/i9shubham'
                    >
                        <AiFillTwitterCircle size='1.6em' />
                    </a>
                    <a
                        className='social'
                        href='https://www.linkedin.com/in/i9shubham'
                    >
                        {' '}
                        <AiFillLinkedin size='1.6em' />
                    </a>
                </div>
                <hr />
                <div className='footer-links'>
                    <div className='link-sec'>
                        <a href='#home'>Home</a>
                        <a href='#about-me'>About</a>
                        <a href='#techStack'>Tech Stack</a>
                        <a href='#myprojects'>Projects</a>
                        <a href='#contact'>Contact</a>
                    </div>

                    <p>
                        {' '}
                        made with ❤️ by{' '}
                        <span className='heading'>Shubham Ingole</span>.
                        {/* All Jams Preserved */}
                    </p>
                    <div className='footer-social-mobile'>
                        <a
                            className='social'
                            href='https://www.github.com/i9shubham'
                        >
                            <AiFillGithub size='1.6em' />
                        </a>
                        <a
                            className='social'
                            href='https://www.twitter.com/i9shubham'
                        >
                            <AiFillTwitterCircle size='1.6em' />
                        </a>
                        <a
                            className='social'
                            href='https://www.linkedin.com/in/i9shubham'
                        >
                            {' '}
                            <AiFillLinkedin size='1.6em' />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Footer;
