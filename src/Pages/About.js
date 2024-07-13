import React from 'react';
import './About.css';
import { HiOutlineBuildingLibrary } from 'react-icons/hi2';
import Typewriter from 'typewriter-effect';
const About = () => {
    return (
        <>
            <div id='about-me'>
                <div className='about'>
                    <div className='desc'>
                        <h1 className='bold'>About Me</h1>
                        <p>
                            I am a highly enthusiastic and driven fullstack
                            (MERN) developer, completed my Bachelor's degree
                            from JSPM's BSIOTR at Pune University. I have 1+
                            year of Software Devlopment experience. I am
                            confident in my potential and thrive in an
                            environment surrounded by like-minded individuals.
                            <Typewriter
                                options={{
                                    // loop: true,
                                    autoStart: true,
                                    skipAddStyles: true,
                                }}
                                onInit={(typewriter) => {
                                    typewriter
                                        .typeString(
                                            'Open for the Software Engineering roles - Frontend, Backend, FullStack Developer.'
                                        )
                                        .start();
                                }}
                            />
                        </p>
                        <br />
                        <h1 className='bold '>Education</h1>
                        <p className='margin-top'>
                            Graduation : Bachelors of Engineering (CS)
                        </p>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'start',
                                alignItems: 'center',
                            }}
                        >
                            <HiOutlineBuildingLibrary />
                            <span className='clg'>7.74 CGPA</span>
                        </div>
                        <p className='clg'>
                            {/* <Typewriter
                                options={{
                                    // loop: true,
                                    autoStart: true,
                                    skipAddStyles: true,
                                }}
                                onInit={(typewriter) => {
                                    typewriter
                                        .pauseFor(1000)
                                        .typeString("JSPM's BSIOTR, Pune 2024")
                                        .start();
                                }}
                            /> */}
                            Savitribai Phule Pune University, 2024
                        </p>
                        <hr />
                        <p className='margin-top'>
                            {/* <Typewriter
                                options={{
                                    // loop: true,
                                    autoStart: true,
                                    skipAddStyles: true,
                                }}
                                onInit={(typewriter) => {
                                    typewriter
                                        .typeString('12th Science')
                                        .start();
                                }}
                            /> */}
                            12th Science
                        </p>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'start',
                                alignItems: 'center',
                            }}
                        >
                            <HiOutlineBuildingLibrary />
                            <span className='clg'>72.48%</span>
                        </div>
                        <p className='clg'>
                            {/* <Typewriter
                                options={{
                                    // loop: true,
                                    autoStart: true,
                                    skipAddStyles: true,
                                }}
                                onInit={(typewriter) => {
                                    typewriter
                                        .typeString(
                                            'Balbhim College, Beed 2020'
                                        )
                                        .start();
                                }}
                            /> */}
                            Balbhim College, Beed 2020
                        </p>
                        <hr />
                    </div>
                </div>
            </div>
        </>
    );
};
export default About;
