import "./Projects.css"
import Project from "./project/Project"

export const glimpseai = require("../images/glimpseai.png");
export const turban = require("../images/turban-india.png");
export const spotify = require("../images/spotify-clone.png");


const projectObj = [
    {
        img: glimpseai,
        heading: "Glimpse AI",
        desc: "A web app which fetches AI generated images (glimps), created with Pug, CSS, Nodejs, and Express.",
        link: "https://glimpseai.up.railway.app",
        githubLink: "https://github.com/Shubham7350/GlimpseAI"
    },
    {
        img: turban,
        heading: "Turban India",
        desc: "This project has created RESTful APIs for an VR application with tech used Nodejs, Express, and Mongodb",
        link: "https://www.figma.com/proto/CewIfIYW856Ga1q244VhtL/SIH-2022-Project-Designs?node-id=75%3A10&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A2&show-proto-sidebar=1",
        githubLink: "https://github.com/SIH-Deviants/turban_info_db"
    },
    {
        img: spotify,
        heading: "Spotify Clone",
        desc: "A Spotify colone web app created with HTML, CSS, Javascript, Nodejs, Express.",
        link: "https://shubham7350.github.io/Music-Player/",
        githubLink: "https://github.com/Shubham7350/Music-Player"
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
                    <Project img={projectObj[2].img} heading={projectObj[2].heading} desc={projectObj[2].desc} githubLink={projectObj[2].githubLink} link={projectObj[2].link} />
                </div>
            </div>
        </>
    )
}

export default ProjectPage