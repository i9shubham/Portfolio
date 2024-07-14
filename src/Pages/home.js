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
                    <h3>Hi 👋 There,</h3>
                    {/* <h3>my name is</h3> */}
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
                                        .typeString('Software Engineer')
                                        .pauseFor(1000)
                                        .deleteAll()
                                        .typeString('Fullstack Developer')
                                        .pauseFor(1000)
                                        .deleteAll()
                                        .typeString('Problem Solver')
                                        .pauseFor(1000)
                                        .start();
                                }}
                            />
                        </span>
                    </h2>
                </div>
                <div className='mobile'>
                    <h3>Hi 👋 There,</h3>
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
                                        .typeString('Software Engineer')
                                        .pauseFor(1000)
                                        .deleteAll()
                                        .typeString('Fullstack Developer')
                                        .pauseFor(1000)
                                        .deleteAll()
                                        .typeString('Problem Solver')
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
