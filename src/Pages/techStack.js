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
                        <img src={html} alt='' className='stack' />
                        <img src={css} alt='' className='stack' />
                        <img src={js} alt='' className='stack' />

                        <img src={react} alt='' className='stack' />
                        <img src={bootstrap} alt='' className='stack' />
                        <img src={vscode} alt='' className='stack' />

                        <img src={nodejs} alt='' className='stack' />
                        <img src={express} alt='' className='stack' />
                        <img src={mongodb} alt='' className='stack' />

                        <img src={git} alt='' className='stack' />
                        <img src={github} alt='' className='stack' />
                        <img src={cplusplus} alt='' className='stack' />
                    </div>
                </div>
            </div>
        </>
    )
}
export default TechStack