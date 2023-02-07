import './Navbar.css'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'


const Navbar = ()=>{
    return(
        <>
            <div className="navbar">
                <div className="logo">
                    <h1 className='heading'>Shubham Ingole</h1>
                </div>
                <div className="links">
                    <a href="#home">Home</a>
                    <a href="#about-me">About</a>
                    <a href="#techStack">Tech Stack</a>
                    <a href="#myprojects">Projects</a>
                    <a href="#contact">Contact</a>
                    <a href="https://www.github.com/Shuhbam7350"><AiFillGithub size='1.5em' /></a>
                    <a href="https://www.twitter.com/twtShubz"><AiFillTwitterCircle  size='1.5em' /></a>
                    <a href="https://www.linkedin.com/in/shubham-ingole"> <AiFillLinkedin size='1.5em' /></a>
                </div>
            </div>
        </>
    )
}

export default Navbar;