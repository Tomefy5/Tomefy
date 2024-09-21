import React from "react";
import Profil from "./Profil";
import "../Styles/ProfilDescri.css"
import "../Styles/Tools.css"

function Tools() {
    return (
        <div className="tools mt-5">
            <Profil />
            <h2 className="tools-title mt-4">Tools and technologies I use daily</h2>
            <div className="row mt-5">
                <div className="col-12 col-md-4 p-3">
                    <h3 className="tool-skill-title">Programming Languages</h3>
                    <ul>
                        <li>Python</li>
                        <li>JavaScript</li>
                        <li>C</li>
                        <li>PHP</li>
                        <li>Java</li>
                        <li>HTML</li>
                        <li>CSS</li>
                    </ul>
                </div>
                <div className="col-12 col-md-4 p-3">
                    <h3 className="tool-skill-title">Frameworks and Libraries</h3>
                    <ul>
                        <li>React</li>
                        <li>Boostrap</li>
                        <li>Sass</li>
                        <li>Bulma</li>
                    </ul>
                </div>
                <div className="col-12 col-md-4 p-3">
                    <h3 className="tool-skill-title">Project Management Tools</h3>
                    <ul>
                        <li>Git</li>
                        <li>GitHub</li>
                    </ul>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-4 p-3">
                    <h3 className="tool-skill-title">Design and Prototyping Tools</h3>
                    <ul>
                        <li>Figma</li>
                        <li>Canva</li>
                        <li>Gimp</li>
                        <li>Photoshop</li>
                    </ul>
                </div>
                <div className="col-12 col-md-4 p-3">
                    <h3 className="tool-skill-title">Development Environments</h3>
                    <ul>
                        <li>Vs Code</li>
                        <li>Eclipse</li>
                        <li>Linux</li>
                        <li>Windows</li>
                        <li>OpenEuler</li>
                    </ul>
                </div>
                <div className="col-12 col-md-4 p-3">
                    <h3 className="tool-skill-title">Databases</h3>
                    <ul>
                        <li>MySQL</li>
                        <li>SQL</li>
                        <li>OpenGauss</li>
                    </ul>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-4 p-3">
                    <h3 className="tool-skill-title"> Backend Development</h3>
                    <ul>
                        <li>PHP</li>
                        <li>JavaScript</li>
                        <li>Python</li>
                        <li>CGI</li>
                    </ul>
                </div>
                <div className="col-12 col-md-4 p-3">
                    <h3 className="tool-skill-title"> Web Development Skills</h3>
                    <ul>
                        <li>SEO</li>
                        <li>Web Accessibility</li>
                        <li>Responsive Design</li>
                    </ul>
                </div>
                <div className="col-12 col-md-4 p-3">
                    <h3 className="tool-skill-title">Other Tools</h3>
                    <ul>
                        <li>npm</li>
                        <li>yarn</li>
                        <li>postman</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Tools