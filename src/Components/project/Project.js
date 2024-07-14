import React from 'react';
import './Project.css';
import { AiFillGithub } from 'react-icons/ai';
// import { AiOutlineLink } from 'react-icons/ai';

const Project = (props) => {
    // console.log(props.heading);
    return (
        <>
            <div className='project'>
                <div className='project-img'>
                    <img src={props.img} alt={props.heading} loading='lazy' />
                </div>
                <div className='project-desc'>
                    <div className='project-head'>
                        <p className='project-heading'>{props.heading}</p>
                        <div className='project-links'>
                            <div className='project-link'>
                                {/* <AiOutlineLink size='1em' /> */}
                                <a
                                    href={props.link}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    Live
                                </a>
                            </div>
                            <div className='project-link'>
                                <a
                                    href={props.githubLink}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='github'
                                >
                                    <AiFillGithub size='1.6em' />
                                </a>
                            </div>
                        </div>
                    </div>
                    <p className='project-description'>{props.desc}</p>

                    {props.stack.map((stack) => (
                        <span className='project-tech'>{stack}</span>
                    ))}
                </div>
            </div>
        </>
    );
};
export default Project;
