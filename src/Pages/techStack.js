import './techStack.css'
import html from '../images/vscode-icons_file-type-html.svg'
import css from '../images/vscode-icons_file-type-css.svg'
import js from '../images/vscode-icons_file-type-js-official.svg'
import react from '../images/logos_react.svg'
import bootstrap from '../images/logos_bootstrap.svg'
import vscode from '../images/vscode-icons_file-type-vscode.svg'
import git from '../images/logos_git-icon.svg'
import github from '../images/akar-icons_github-fill.svg'
import nodejs from '../images/nodejs_logo.svg'
import express from '../images/expressjs-ar21.svg'
import mongodb from '../images/mongodb.svg'
import cplusplus from '../images/icons8-c++.svg'

const TechStack = () => {
    return(
        <>
            <div id="techStack">
                <div>
                    <h1 className="centre bold">My Tech Stack</h1>
                    <p className="centre">Technologies I've been working with recently</p>
                    <div className='stackflex stackflex1'>
                        <span className='stackStyle'><img src={html} alt='HTML' className='stack' /> HTML</span>
                        <span className='stackStyle'><img src={css} alt='CSS' className='stack' /> CSS</span>
                        <span className='stackStyle'><img src={js} alt='JavaScript' className='stack' /> JavaScript</span>

                        <span className='stackStyle'><img src={react} alt='React JS' className='stack' /> React JS </span>
                        <span className='stackStyle'><img src={bootstrap} alt='Bootstrap' className='stack' /> Bootstrap </span>
                        <span className='stackStyle'><img src={vscode} alt='VsCode' className='stack' /> VsCode </span>

                        <span className='stackStyle'><img src={nodejs} alt='Node JS' className='stack' /> Node JS </span>
                        <span className='stackStyle'><img src={express} alt='Express Js' className='stack' /> Express JS </span>
                        <span className='stackStyle'><img src={mongodb} alt='MongoDB' className='stack' /> MongoDB </span>

                        <span className='stackStyle'><img src={git} alt='Git' className='stack' /> Git </span>
                        <span className='stackStyle'><img src={github} alt='GitHub' className='stack' /> GitHub</span>
                        <span className='stackStyle'><img src={cplusplus} alt='C++' className='stack' /> C++ </span>
                    </div>
                </div>
            </div>
        </>
    )
}
export default TechStack