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
export const ShortStats = require('../images/shortstats.png');

const projectObj = [
    {
        img: TechTree,
        heading: 'TechTree',
        desc: 'A platform enabling users to create tech trees linked to their social media and tech profiles.',
        link: 'https://techtree9.netlify.app/',
        githubLink: 'https://github.com/IngoleShubham/techTree/',
        stack: [
            'Javascript',
            'Nodejs',
            'Express',
            'React JS',
            'Mongodb',
            'MUI',
        ],
    },
    {
        img: ShortStats,
        heading: 'ShortStats',
        desc: 'A full-stack web application for customers to create short links, and track URL visits.',
        link: 'https://shortstats.netlify.app/',
        githubLink: 'https://github.com/i9shubham/shortUrl/',
        stack: ['React JS', 'Nodejs', 'Express', 'Mongodb', 'Axios'],
    },
    {
        img: SocialShare,
        heading: 'Social Share',
        desc: 'A web application allowing users to create and share thoughts, quotes, and ideas.',
        link: 'https://socialshareapp.netlify.app/',
        githubLink: 'https://github.com/IngoleShubham/social-share/',
        stack: [
            'React Js',
            'Node.js',
            'Express',
            'MongoDB',
            'MUI',
            'Redux',
            'Redux-Toolkit',
        ],
    },
    {
        img: glimpseai,
        heading: 'Glimpse AI',
        desc: 'A web app which fetches an AI generated images (glimpse) by Dall-E2.',
        link: 'https://glimpseai.up.railway.app',
        githubLink: 'https://github.com/Shubham7350/GlimpseAI',
        stack: [
            'PUG',
            'CSS',
            'Javascript',
            'Nodejs',
            'Express',
            'ChatGPT API',
        ],
    },
    {
        img: turban,
        heading: 'Turban India',
        desc: 'Created RESTful APIs for an VR application to fetch turbans and their information.',
        link: 'https://www.figma.com/proto/CewIfIYW856Ga1q244VhtL/SIH-2022-Project-Designs?node-id=75%3A10&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A2&show-proto-sidebar=1',
        githubLink: 'https://github.com/SIH-Deviants/turban_info_db',
        stack: [
            'Javascript',
            'Nodejs',
            'Express',
            'Mongodb',
            'Postman',
            'Sendgrid',
        ],
    },
    {
        img: spotify,
        heading: 'Spotify Clone',
        desc: 'This is a Spotify clone web app having featurs of playing and browsing music .',
        link: 'https://shubham7350.github.io/Music-Player/',
        githubLink: 'https://github.com/Shubham7350/Music-Player',
        stack: ['HTML', 'CSS', 'Javascript'],
    },
    {
        img: portfolio,
        heading: 'Portfolio Website',
        desc: 'This is a customize portfolio website for a software developer showcasing achievements and experiance of the developer.',
        link: 'https://shubhamingole.me/',
        githubLink: 'https://github.com/Shubham7350/Portfolio',
        stack: [
            'HTML',
            'CSS',
            'Javascript',
            'Nodejs',
            'Express',
            'React JS',
            'Mongodb',
        ],
    },
    {
        img: weatherApp,
        heading: 'City Weather',
        desc: 'Openweather API is used which can find weather according the city name.',
        link: 'https://cityweather-app.vercel.app/',
        githubLink: 'https://github.com/Shubham7350/weatherApp',
        stack: [
            'JavaScript',
            'React JS',
            'Axios',
            'Openweather API'
        ],
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
                                stack={project.stack}
                            />
                        ))}
                    </Fade>
                </div>
            </div>
        </>
    );
};

export default ProjectPage;
