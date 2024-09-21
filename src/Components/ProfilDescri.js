import React from "react";
import '../Styles/ProfilDescri.css'
import Profil from "./Profil";

function ProfilDescri() {
    return (
        <div className="container-fluid mt-5 mb-5">
            <Profil />
            <div className="container-fluid p-2 mt-3">
                <h1 className="profil-competence">Versatile Developer</h1>
                <p className="competence-descri">As a versatile developer, I see myself as the Swiss Army knife of IT—handy in any situation! Whether diving into back-end mysteries or crafting sleek front-end experiences, I’m eager to explore the tech world. On a quest for knowledge, I turn caffeine into code and tackle challenges with a smile. Let’s create something amazing together! </p>
            </div>
        </div>
    )
}

export default ProfilDescri