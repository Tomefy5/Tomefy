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
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum aperiam, eveniet</p>
                </div>
            </div>

            <div className="formation card mt-5">
                <div className="card-header">
                    <div className="container-logo container-logo-sayna bg-secondary me-3"></div>
                    SAYNA
                </div>
                <div className="card-body">
                    <h6 className="card-title">Autodidact formation</h6>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum aperiam, eveniet</p>
                </div>
            </div>

            <div className="formation card mt-5">
                <div className="card-header">
                    <div className="container-logo container-logo-udemy bg-secondary me-3"></div>
                    Udemy
                </div>
                <div className="card-body">
                    <h6 className="card-title">Autodidact formation</h6>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum aperiam, eveniet</p>
                </div>
            </div>
        </div>
    )
}

export default Formations;