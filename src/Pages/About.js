import React from 'react';
import './About.css';
import { HiOutlineBuildingLibrary } from 'react-icons/hi2';
import Typewriter from 'typewriter-effect';
import { Fade } from 'react-reveal';
const About = () => {
    return (
        <>
            <div id='about-me'>
                <div className='about'>
                    <div className='desc'>
                        <Fade bottom>
                            <h1 className='bold'>About Me</h1>
                        </Fade>
                        <Fade bottom>
                            <p>
                                I am a highly enthusiastic and driven fullstack
                                (MERN) developer, completed my Bachelor's degree
                                from JSPM's BSIOTR at Pune University. I have 1+
                                year of Software Devlopment experience. I am
                                confident in my potential and thrive in an
                                environment surrounded by like-minded
                                individuals.
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
                        </Fade>
                        <br />
                        <Fade bottom>
                            <h1 className='bold '>Education</h1>
                        </Fade>
                        <Fade bottom>
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
                                Savitribai Phule Pune University, 2024
                            </p>
                        </Fade>
                        <Fade fade>
                            <hr />
                        </Fade>
                        <Fade bottom>
                            <p className='margin-top'>12th Science</p>
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
                            <p className='clg'>Balbhim College, Beed 2020</p>
                        </Fade>
                        <Fade fade>
                            <hr />
                        </Fade>
                        <br />
                        <Fade bottom>
                            <h1 className='bold'>Experience</h1>
                        </Fade>
                        <Fade bottom>
                            <div>
                                <p className='black'>
                                    <span className='bold'>Gearup Cycle</span> |
                                    SDE Intern
                                </p>
                                <p>November 2023 - Current</p>
                            </div>
                        </Fade>
                        <Fade fade>
                            <hr />
                        </Fade>
                        <Fade bottom>
                            <ul className='bullets'>
                                <li>
                                    Contributed to establishing the company’s
                                    web presence, resulting in a remarkable 70%
                                    increase in online orders.
                                </li>
                                <li>
                                    Conducted over 50+ code reviews, implemented
                                    best practices and agile methodologies,
                                    significantly reducing technical debt and
                                    enhancing overall code quality.
                                </li>
                                <li>
                                    Utilized TypeScript to reduce runtime errors
                                    by 60%, for more maintainable and reliable
                                    codebase.
                                </li>
                                <li>
                                    Increased backend performance by 50% and
                                    scalability by 35% by developing and
                                    maintaining full-stack applications using
                                    NestJS, PostgreSQL, React JS, and Redux.
                                </li>
                            </ul>
                        </Fade>
                        <br />
                        <Fade bottom>
                            <div>
                                <p className='black'>
                                    <span className='bold'>Gearup Cycle</span>|
                                    FullStack Developer Intern
                                </p>
                                <p>April 2023 - October 2023</p>
                            </div>
                        </Fade>
                        <Fade fade>
                            <hr />
                        </Fade>
                        <Fade bottom>
                            <ul className='bullets'>
                                <li>
                                    Pioneered the creation of an intuitive Admin
                                    dashboard UI with React JS, effectively
                                    monitoring technician movements and orders
                                    for 3 cities.
                                </li>
                                <li>
                                    Optimized API response times by 50% through
                                    the implementation of server-side pagination
                                    and custom objects.
                                </li>
                                <li>
                                    Enhanced system functionality and security
                                    by integrating JWT authentication, Firebase
                                    Cloud Messaging, Nodemailer, MUI, and over
                                    20 libraries.
                                </li>
                            </ul>
                        </Fade>
                        <br />
                    </div>
                </div>
            </div>
        </>
    );
};
export default About;
