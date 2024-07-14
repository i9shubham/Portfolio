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
    const techStack = [
        {
            icon: html,
            name: 'HTML',
        },
        {
            icon: css,
            name: 'CSS',
        },
        {
            icon: js,
            name: 'JavaScript',
        },
        {
            icon: cplusplus,
            name: 'C++',
        },
        {
            icon: react,
            name: 'React Js',
        },
        {
            icon: mui,
            name: 'Material UI',
        },
        {
            icon: redux,
            name: 'Redux',
        },
        {
            icon: mysql,
            name: 'MySQL',
        },
        {
            icon: nodejs,
            name: 'Node.js',
        },
        {
            icon: express,
            name: 'Express Js',
        },
        {
            icon: mongodb,
            name: 'MongoDB',
        },
        {
            icon: git,
            name: 'Git',
        },
        {
            icon: docker,
            name: 'Docker',
        },
        {
            icon: java,
            name: 'Java',
        },
        {
            icon: nestjs,
            name: 'Nest.js',
        },
        {
            icon: nextjs,
            name: 'Next Js',
        },
        {
            icon: postgres,
            name: 'PostgreSQL',
        },
        {
            icon: postman,
            name: 'Postman',
        },
        {
            icon: typescript,
            name: 'TypeScript',
        },
        {
            icon: sql,
            name: 'SQL',
        },
    ];
    return (
        <>
            <div id='techStack'>
                <div>
                    <h1 className='centre bold'>My Tech Stack</h1>
                    <p className='centre'>
                        Technologies I've been working with recently
                    </p>
                    <div className='stackflex stackflex1'>
                        {techStack.map((tech) => (
                            <Fade bottom key={tech.name}>
                                <span className='stackStyle'>
                                    <img
                                        src={tech.icon}
                                        alt={tech.name}
                                        className='stack'
                                    />
                                    <span> {tech.name}</span>
                                </span>
                            </Fade>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};
export default TechStack;
