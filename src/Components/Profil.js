import React from "react";
import profil from '../Assets/profil_tomefy.png'
import '../Styles/ProfilDescri.css'


function Profil() {
    return (
        <>
            <div className="profil-descri container-fluid">
                <img src={profil} alt="photo profil" style={{ width: '50px' }} />
                <h2 className="profil-name">Tomefy Andry Tsiresy</h2>
            </div>
        </>
    )
}

export default Profil