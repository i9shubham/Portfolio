import React from 'react';
import Navbar from '../Components/Navbar';
import './home.css';
import shubham from '../images/i9shubham.png';
import Typewriter from 'typewriter-effect';
import { Fade } from 'react-reveal';

const Home = () => {
    return (
        <>
            <Navbar />

            <div id='home'>
                <div className='pc'>
                    <h3>
                        Hi <span className='hi'>👋</span> There,
                    </h3>
                    {/* <h3>my name is</h3> */}
                    <h1>
                        {' '}
                        I'm <span className='heading'>Shubham!</span>
                    </h1>
                    <h2 className='flex role'>
                        <span>
                            <Typewriter
                                className='Typewriter__cursor'
                                options={{
                                    loop: true,
                                    autoStart: true,
                                    skipAddStyles: true,
                                }}
                                onInit={(typewriter) => {
                                    typewriter
                                        .typeString(
                                            '<span style="color: #000; font-weight: bold;">Software Engineer</span>'
                                        )
                                        .pauseFor(1000)
                                        .deleteAll()
                                        .typeString(
                                            '<span style="color: #000; font-weight: bold;">Fullstack Developer</span>'
                                        )
                                        .pauseFor(1000)
                                        .deleteAll()
                                        .typeString(
                                            '<span style="color: #000; font-weight: bold;">Problem Solver</span>'
                                        )
                                        .pauseFor(1000)
                                        .start();
                                }}
                            />
                        </span>
                    </h2>
                </div>
                <div className='mobile'>
                    <h3>
                        Hi <span className='hi'>👋</span> There,
                    </h3>
                    <h1>
                        {' '}
                        I'm <span className='heading'>Shubham!</span>
                    </h1>
                    <h2 className='flex role'>
                        <span>
                            <Typewriter
                                options={{
                                    loop: true,
                                    autoStart: true,
                                    skipAddStyles: true,
                                }}
                                onInit={(typewriter) => {
                                    typewriter
                                        .typeString(
                                            '<span style="color: #000; font-weight: bold;">Software Engineer</span>'
                                        )
                                        .pauseFor(1000)
                                        .deleteAll()
                                        .typeString(
                                            '<span style="color: #000; font-weight: bold;">Fullstack Developer</span>'
                                        )
                                        .pauseFor(1000)
                                        .deleteAll()
                                        .typeString(
                                            '<span style="color: #000; font-weight: bold;">Problem Solver</span>'
                                        )
                                        .pauseFor(1000)
                                        .start();
                                }}
                            />
                        </span>
                    </h2>
                </div>
                <Fade fade>
                    <div className='profile-img'>
                        <img
                            src={shubham}
                            alt='Shubham Ingole'
                            loading='lazy'
                        />
                    </div>
                </Fade>
            </div>
        </>
    );
};
export default Home;
