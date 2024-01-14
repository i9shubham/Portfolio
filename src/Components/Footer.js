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
                        href='https://www.github.com/Shuhbam7350'
                    >
                        <AiFillGithub size='1.2em' />
                    </a>
                    <a
                        className='social'
                        href='https://www.twitter.com/twtShubz'
                    >
                        <AiFillTwitterCircle size='1.2em' />
                    </a>
                    <a
                        className='social'
                        href='https://www.linkedin.com/in/shubham-ingole'
                    >
                        {' '}
                        <AiFillLinkedin size='1.2em' />
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
                            href='https://www.github.com/Shuhbam7350'
                        >
                            <AiFillGithub size='1.2em' />
                        </a>
                        <a
                            className='social'
                            href='https://www.twitter.com/twtShubz'
                        >
                            <AiFillTwitterCircle size='1.2em' />
                        </a>
                        <a
                            className='social'
                            href='https://www.linkedin.com/in/shubham-ingole'
                        >
                            {' '}
                            <AiFillLinkedin size='1.2em' />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Footer;
