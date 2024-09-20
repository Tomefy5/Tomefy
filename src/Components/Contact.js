import React from "react";
import "../Styles/Contact.css"
import facebook from "../Assets/social-media/facebook.svg"
import github from "../Assets/social-media/github.svg"
import linkedin from "../Assets/social-media/linkedin.svg"
import gmail from "../Assets/social-media/gmail.svg"

function Contact() {
    return (
        <div className="container-fluid mt-5 pb-5">
            <h2 className="contact-title">Contact me</h2>
            <p className="contact-descri">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum aperiam</p>
            <div className="container-social-media container-fluid">
                <a href="./"><img className="social-media-logo social-media-logo-github" src={github} alt="logo github" /></a>
                <a href="./"><img className="social-media-logo social-media-logo-facebook" src={facebook} alt="logo facebook" /></a>
                <a href="./"><img className="social-media-logo social-media-logo-linkedin" src={linkedin} alt="logo linkedin" /></a>
                <a href="./"><img className="social-media-logo social-media-logo-gmail" src={gmail} alt="logo gmail" /></a>
                <a href="./" className="email">tomefyandrytsiresy@gmail.com</a>
            </div>
        </div>
    )
}

export default Contact;