import React from 'react';
import './techStack.css';
import Fade from 'react-reveal/Fade';
import html from '../images/vscode-icons_file-type-html.svg';
import css from '../images/vscode-icons_file-type-css.svg';
import js from '../images/vscode-icons_file-type-js-official.svg';
import react from '../images/logos_react.svg';
import mui from '../images/mui.png';
import redux from '../images/redux.png';
import git from '../images/logos_git-icon.svg';
import mysql from '../images/mysqlworkbench.svg';
import sql from '../images/sql-database-generic.svg';
import nodejs from '../images/nodejs_logo.svg';
import express from '../images/expressjs-ar21.svg';
import mongodb from '../images/mongodb.svg';
import cplusplus from '../images/icons8-c++.svg';
import docker from '../images/docker.svg'; //
import java from '../images/java-original.svg';
import nestjs from '../images/nestjs.svg';
import nextjs from '../images/next-js.svg';
import postgres from '../images/postgresql.svg';
import postman from '../images/postman.svg';
import typescript from '../images/typescript-icon.svg';

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
                                <span> HTML</span>
                            </span>
                            <span className='stackStyle'>
                                <img src={css} alt='CSS' className='stack' />{' '}
                                <span> CSS</span>
                            </span>
                            <span className='stackStyle'>
                                <img
                                    src={js}
                                    alt='JavaScript'
                                    className='stack'
                                />{' '}
                                <span> JavaScript</span>
                            </span>

                            <span className='stackStyle'>
                                <img
                                    src={cplusplus}
                                    alt='C++'
                                    className='stack'
                                />
                                <span> C++ </span>{' '}
                            </span>
                            <span className='stackStyle'>
                                <img
                                    src={react}
                                    alt='React JS'
                                    className='stack'
                                />{' '}
                                <span> React Js</span> {' '}
                            </span>
                            <span className='stackStyle'>
                                <img
                                    src={mui}
                                    alt='material ui'
                                    className='stack'
                                />{' '}
                                <span> Material UI </span>{' '}
                            </span>
                            <span className='stackStyle'>
                                <img
                                    src={redux}
                                    alt='redux'
                                    className='stack'
                                />{' '}
                                <span> Redux</span>{' '}
                            </span>

                            <span className='stackStyle'>
                                <img
                                    src={mysql}
                                    alt='MySQL'
                                    className='stack'
                                />{' '}
                                <span> MySQL</span>
                            </span>

                            <span className='stackStyle'>
                                <img
                                    src={nodejs}
                                    alt='Node JS'
                                    className='stack'
                                />{' '}
                                <span> Node.js</span> {' '}
                            </span>
                            <span className='stackStyle'>
                                <img
                                    src={express}
                                    alt='Express Js'
                                    className='stack'
                                />{' '}
                                <span> Express Js</span>{' '}
                            </span>
                            <span className='stackStyle'>
                                <img
                                    src={mongodb}
                                    alt='MongoDB'
                                    className='stack'
                                />{' '}
                                <span> MongoDB</span>{' '}
                            </span>

                            <span className='stackStyle'>
                                <img src={git} alt='Git' className='stack' />{' '}
                                <span> Git</span>{' '}
                            </span>
                            <span className='stackStyle'>
                                <img
                                    src={docker}
                                    alt='docker'
                                    className='stack'
                                />{' '}
                                <span> Docker</span>{' '}
                            </span>
                            <span className='stackStyle'>
                                <img src={java} alt='Java' className='stack' />{' '}
                                <span> Java</span>{' '}
                            </span>
                            <span className='stackStyle'>
                                <img
                                    src={nestjs}
                                    alt='Nest.js'
                                    className='stack'
                                />{' '}
                                <span> Nest.js</span>{' '}
                            </span>
                            <span className='stackStyle'>
                                <img
                                    src={nextjs}
                                    alt='Next Js'
                                    className='stack'
                                />{' '}
                                <span> Next Js</span>{' '}
                            </span>
                            <span className='stackStyle'>
                                <img
                                    src={postgres}
                                    alt='PostgreSQL'
                                    className='stack'
                                />{' '}
                                <span> PostgreSQL</span>{' '}
                            </span>
                            <span className='stackStyle'>
                                <img
                                    src={postman}
                                    alt='Postman'
                                    className='stack'
                                />{' '}
                                <span> Postman</span>{' '}
                            </span>
                            <span className='stackStyle'>
                                <img
                                    src={typescript}
                                    alt='TypeScript'
                                    className='stack'
                                />{' '}
                                <span> TypeScript</span>{' '}
                            </span>
                            <span className='stackStyle'>
                                <img
                                    src={sql}
                                    alt='SQL'
                                    className='stack'
                                />{' '}
                                <span> SQL</span>{' '}
                            </span>
                        </div>
                    </div>
                </div>
            </Fade>
        </>
    );
};
export default TechStack;
