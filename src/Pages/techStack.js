import React from "react";
import './techStack.css';
import Fade from 'react-reveal/Fade';
import html from '../images/vscode-icons_file-type-html.svg';
import css from '../images/vscode-icons_file-type-css.svg';
import js from '../images/vscode-icons_file-type-js-official.svg';
import react from '../images/logos_react.svg';
import mui from '../images/mui.png';
import redux from '../images/redux.png';
import git from '../images/logos_git-icon.svg';
import mysql from '../images/mysql.png';
import nodejs from '../images/nodejs_logo.svg';
import express from '../images/expressjs-ar21.svg';
import mongodb from '../images/mongodb.svg';
import cplusplus from '../images/icons8-c++.svg';

const TechStack = () => {
    return (
        <>
            <Fade bottom>
                <div id='techStack'>
                    <div>
                        <h1 className='centre bold'>My Tech Stack</h1>
                        <p className='centre'>
                            Technologies I've been working with recently
                        </p>
                        <div className='stackflex stackflex1'>
                            <span className='stackStyle'>
                                <img src={html} alt='HTML' className='stack' />{' '}
                                HTML
                            </span>
                            <span className='stackStyle'>
                                <img src={css} alt='CSS' className='stack' />{' '}
                                CSS
                            </span>
                            <span className='stackStyle'>
                                <img
                                    src={js}
                                    alt='JavaScript'
                                    className='stack'
                                />{' '}
                                JavaScript
                            </span>

                            <span className='stackStyle'>
                                <img
                                    src={cplusplus}
                                    alt='C++'
                                    className='stack'
                                />{' '}
                                C++{' '}
                            </span>
                            <span className='stackStyle'>
                                <img
                                    src={react}
                                    alt='React JS'
                                    className='stack'
                                />{' '}
                                React JS{' '}
                            </span>
                            <span className='stackStyle'>
                                <img
                                    src={mui}
                                    alt='material ui'
                                    className='stack'
                                />{' '}
                                Material UI{' '}
                            </span>
                            <span className='stackStyle'>
                                <img
                                    src={redux}
                                    alt='redux'
                                    className='stack'
                                />{' '}
                                Redux{' '}
                            </span>

                            <span className='stackStyle'>
                                <img
                                    src={mysql}
                                    alt='MySQL'
                                    className='stack'
                                />{' '}
                                MySQL
                            </span>

                            <span className='stackStyle'>
                                <img
                                    src={nodejs}
                                    alt='Node JS'
                                    className='stack'
                                />{' '}
                                Node JS{' '}
                            </span>
                            <span className='stackStyle'>
                                <img
                                    src={express}
                                    alt='Express Js'
                                    className='stack'
                                />{' '}
                                Express JS{' '}
                            </span>
                            <span className='stackStyle'>
                                <img
                                    src={mongodb}
                                    alt='MongoDB'
                                    className='stack'
                                />{' '}
                                MongoDB{' '}
                            </span>

                            <span className='stackStyle'>
                                <img src={git} alt='Git' className='stack' />{' '}
                                Git{' '}
                            </span>
                        </div>
                    </div>
                </div>
            </Fade>
        </>
    );
};
export default TechStack;
