import React from "react";
import "../Styles/Projects.css"
import arrowLeft from "../Assets/small_icons/arrow-left.svg"
import arrowRight from "../Assets/small_icons/arrow-rigth.svg"

function Projects() {
    return (
        <div className="mt-5 mb-5 container-fluid">
            <h2 className="projects-section-title">My Projects</h2>
            <p className="project-section-descri mb-4">Explore my journey through code and creativity</p>
            {/* carousel of projects */}
            <div id="carouselProjects" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner p-2">
                    <div className="carousel-item active">
                        <div className="row custom-spacing">
                            <a href="./" className="carousel-item-child col-6 rounded">
                                <h3 className="project-name">Project 1</h3>
                                <p className="project-descri">In progress...</p>
                                <div className="badge">React</div>
                                <div className="badge">Html</div>
                                <div className="badge">Boostrap</div>
                            </a>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="row custom-spacing">
                            <a href="./" className="carousel-item-child col-6 rounded">
                                <h3 className="project-name">Project 2</h3>
                                <p className="project-descri">In progress...</p>
                                <div className="badge">React</div>
                                <div className="badge">Html</div>
                                <div className="badge">Boostrap</div>
                            </a>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="row custom-spacing">
                            <a href="./" className="carousel-item-child col-6 rounded">
                                <h3 className="project-name">Project 3</h3>
                                <p className="project-descri">In progress...</p>
                                <div className="badge">React</div>
                                <div className="badge">Html</div>
                                <div className="badge">Boostrap</div>
                            </a>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="row custom-spacing">
                            <a href="./" className="carousel-item-child col-6 rounded">
                                <h3 className="project-name">Project 4</h3>
                                <p className="project-descri">In progress...</p>
                                <div className="badge">React</div>
                                <div className="badge">Html</div>
                                <div className="badge">Boostrap</div>
                            </a>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselProjects" data-bs-slide="prev">
                    <img className="arrows" src={arrowLeft} alt="arrow left logo" />
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselProjects" data-bs-slide="next">
                    <img className="arrows" src={arrowRight} alt="arrow right logo" />
                </button>
            </div>
        </div>
    )
}

export default Projects;
