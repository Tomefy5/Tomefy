import React from "react";
import '../Styles/ProfilDescri.css'
import profil from '../Assets/profil_tomefy.png'

function ProfilDescri() {
    return (
        <div className="container-fluid mt-5">
            <div className="profil-descri container-fluid">
                <img src={profil} alt="photo profil" style={{ width: '50px' }} />
                <h2 className="profil-name">Tomefy Andry Tsiresy</h2>
            </div>
            <div className="container-fluid p-2 mt-3">
                <h1 className="profil-competence">Web Developer</h1>
                <p className="competence-descri">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum aperiam, eveniet veritatis labore facilis minus 
                    non magni et voluptate odit impedit? Rem odio reprehenderit quod officia sapiente molestias, voluptatibus sed </p>
            </div>
        </div>
    )
}

export default ProfilDescri