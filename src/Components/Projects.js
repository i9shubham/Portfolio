import "./Projects.css"
import Project from "./project/Project"

export const glimpseai = require("../images/glimpseai.png");
export const turban = require("../images/turban-india.png");
export const spotify = require("../images/spotify-clone.png");
export const portfolio = require("../images/portfolio.png");
export const weatherApp = require("../images/weather-app.png");


const projectObj = [
    {
        img: glimpseai,
        heading: "Glimpse AI",
        desc: "A web app which fetches an AI generated images (glimpse), created with Pug, CSS, Nodejs, and Express.",
        link: "https://glimpseai.up.railway.app",
        githubLink: "https://github.com/Shubham7350/GlimpseAI"
    },
    {
        img: turban,
        heading: "Turban India",
        desc: "In this project I have created RESTful APIs for an VR application with tech used Nodejs, Express, and Mongodb",
        link: "https://www.figma.com/proto/CewIfIYW856Ga1q244VhtL/SIH-2022-Project-Designs?node-id=75%3A10&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A2&show-proto-sidebar=1",
        githubLink: "https://github.com/SIH-Deviants/turban_info_db"
    },
    {
        img: spotify,
        heading: "Spotify Clone",
        desc: "This is a Spotify clone web app created with HTML, CSS, Javascript, Nodejs, and Express.",
        link: "https://shubham7350.github.io/Music-Player/",
        githubLink: "https://github.com/Shubham7350/Music-Player"
    },
    {
        img: portfolio,
        heading: "Portfolio Website",
        desc: "This is a customize portfolio website for a software developer created with React JS, Javascript, & React Icons Library.",
        link: "https://shubhamingole.me/",
        githubLink: "https://github.com/Shubham7350/Portfolio"
    },
    {
        img: weatherApp,
        heading: "City Weather",
        desc: "This website is created with React + Vite js, Openweather API & axios library, which can find weather according the city name.",
        link: "https://cityweather-app.vercel.app/",
        githubLink: "https://github.com/Shubham7350/weatherApp"
    }
]
// console.log(projectObj[0].img)
const ProjectPage = ()=>{
    return(
        <>
            <div id="projects">
                <div className="myprojects">
                    <Project img={projectObj[0].img} heading={projectObj[0].heading} desc={projectObj[0].desc} githubLink={projectObj[0].githubLink} link={projectObj[0].link} />
                    <Project img={projectObj[1].img} heading={projectObj[1].heading} desc={projectObj[1].desc} githubLink={projectObj[1].githubLink} link={projectObj[1].link} />
                    <Project img={projectObj[3].img} heading={projectObj[3].heading} desc={projectObj[3].desc} githubLink={projectObj[3].githubLink} link={projectObj[3].link} />
                    <Project img={projectObj[4].img} heading={projectObj[4].heading} desc={projectObj[4].desc} githubLink={projectObj[4].githubLink} link={projectObj[4].link} />
                    <Project img={projectObj[2].img} heading={projectObj[2].heading} desc={projectObj[2].desc} githubLink={projectObj[2].githubLink} link={projectObj[2].link} />
                </div>
            </div>
        </>
    )
}

export default ProjectPage