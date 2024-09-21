import React from "react";
import Profil from "./Profil";
import "../Styles/ProfilDescri.css"
import "../Styles/Formations.css"

function Formations() {
    return (
        <div className="formations mt-5">
            <Profil />
            <h2 className="formation-title mt-4">Courses I have taken in computer science</h2>
            <div className="formation card mt-5">
                <div className="card-header">
                    <div className="container-logo container-logo-misa bg-secondary me-3"></div>
                    MISA
                </div>
                <div className="card-body">
                    <h6 className="card-title">Academic formation</h6>
                    <p className="card-text">I pursued my academic training at MISA, where I gained a solid foundation in mathematics and the fundamentals of IT. My studies covered networks, systems, web development, and programming, equipping me with essential skills for a career in technology.</p>
                </div>
            </div>

            <div className="formation card mt-5">
                <div className="card-header">
                    <div className="container-logo container-logo-sayna bg-secondary me-3"></div>
                    SAYNA
                </div>
                <div className="card-body">
                    <h6 className="card-title">Autodidact formation</h6>
                    <p className="card-text">I undertook self-directed training at Sayna, where I honed my web development skills, focusing on JavaScript, SEO, web accessibility, and digital practices. This experience deepened my understanding of creating inclusive, optimized, and effective web applications.</p>
                </div>
            </div>

            <div className="formation card mt-5">
                <div className="card-header">
                    <div className="container-logo container-logo-udemy bg-secondary me-3"></div>
                    Udemy
                </div>
                <div className="card-body">
                    <h6 className="card-title">Autodidact formation</h6>
                    <p className="card-text">I pursued self-directed training on Udemy, focusing on React for front-end development. This experience has enhanced my skills and equipped me with the tools to create dynamic and engaging user interfaces.</p>
                </div>
            </div>
        </div>
    )
}

export default Formations;