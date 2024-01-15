import React from "react";
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
                            (MERN) developer, currently pursuing my Bachelor's
                            degree from JSPM's BSIOTR at Pune University. Coming
                            from a background where access to the internet was
                            limited, I made the decision to further my education
                            in one of India's most educational cities, Pune. I
                            am confident in my potential and thrive in an
                            environment surrounded by like-minded individuals. I
                            am also dedicated to helping those in need and
                            supporting my friends in any way possible.
                            <Typewriter
                                options={{
                                    // loop: true,
                                    autoStart: true,
                                    skipAddStyles: true,
                                }}
                                onInit={(typewriter) => {
                                    typewriter
                                        .typeString(
                                            'Looking opportunities for Software Devlopment Engineer role.'
                                        )
                                        .start();
                                }}
                            />
                        </p>
                        <h1 className='bold '>Education</h1>
                        <p className='margin-top'>
                            Bachelors of Engineering (Computer)
                        </p>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'start',
                                alignItems: 'center',
                            }}
                        >
                            <HiOutlineBuildingLibrary />
                            <span className='clg'>7.20 SGPA</span>
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
                            JSPM's BSIOTR, Pune 2024
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
