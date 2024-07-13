import React from 'react';
import './Projects.css';
import Project from './project/Project';
import Fade from 'react-reveal/Fade';

export const glimpseai = require('../images/glimpseai.png');
export const turban = require('../images/turban-india.png');
export const spotify = require('../images/spotify-clone.png');
export const portfolio = require('../images/portfolio.png');
export const weatherApp = require('../images/weather-app.png');
export const TechTree = require('../images/techtree_img.png');
export const SocialShare = require('../images/socialshare.png');

const projectObj = [
    {
        img: TechTree,
        heading: 'TechTree',
        desc: 'A platform enabling users to create tech trees linked to their social media and tech profiles. Created using MERN Stack.',
        link: '#projects',
        githubLink: 'https://github.com/IngoleShubham/techTree/',
    },
    {
        img: SocialShare,
        heading: 'Social Share',
        desc: 'A web application allowing users to create and share thoughts, quotes, and ideas. Created with MERN Stack.',
        link: 'https://socialshareapp.netlify.app/',
        githubLink: 'https://github.com/IngoleShubham/social-share/',
    },
    {
        img: glimpseai,
        heading: 'Glimpse AI',
        desc: 'A web app which fetches an AI generated images (glimpse), created with Pug, CSS, Nodejs, and Express.',
        link: 'https://glimpseai.up.railway.app',
        githubLink: 'https://github.com/Shubham7350/GlimpseAI',
    },
    {
        img: turban,
        heading: 'Turban India',
        desc: 'Created RESTful APIs for an VR application with backend technologies Nodejs, Express, and Mongodb',
        link: 'https://www.figma.com/proto/CewIfIYW856Ga1q244VhtL/SIH-2022-Project-Designs?node-id=75%3A10&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A2&show-proto-sidebar=1',
        githubLink: 'https://github.com/SIH-Deviants/turban_info_db',
    },
    {
        img: spotify,
        heading: 'Spotify Clone',
        desc: 'This is a Spotify clone web app created with HTML, CSS, Javascript, Nodejs, and Express.',
        link: 'https://shubham7350.github.io/Music-Player/',
        githubLink: 'https://github.com/Shubham7350/Music-Player',
    },
    {
        img: portfolio,
        heading: 'Portfolio Website',
        desc: 'This is a customize portfolio website for a software developer created with React JS, Javascript, & React Icons Library.',
        link: 'https://shubhamingole.me/',
        githubLink: 'https://github.com/Shubham7350/Portfolio',
    },
    {
        img: weatherApp,
        heading: 'City Weather',
        desc: 'This website is created with React + Vite js, Openweather API & axios library, which can find weather according the city name.',
        link: 'https://cityweather-app.vercel.app/',
        githubLink: 'https://github.com/Shubham7350/weatherApp',
    },
];
// console.log(projectObj[0].img)
const ProjectPage = () => {
    return (
        <>
            <div id='projects'>
                <div className='myprojects'>
                    <Fade bottom>
                        {projectObj.map((project) => (
                            <Project
                                img={project.img}
                                heading={project.heading}
                                desc={project.desc}
                                githubLink={project.githubLink}
                                link={project.link}
                            />
                        ))}
                    </Fade>
                </div>
            </div>
        </>
    );
};

export default ProjectPage;
