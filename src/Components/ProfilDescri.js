import React from "react";
import '../Styles/ProfilDescri.css'
import profil from '../Assets/profil_tomefy.png'

function ProfilDescri() {
    return (
        <div className="profil-descri container-fluid">
            <img scrc={profil} alt="photo profil" style={{ width: '100px' }} />
        </div>
    )
}

export default ProfilDescri;