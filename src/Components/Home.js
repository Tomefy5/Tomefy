import React from "react";
import ProfilDescri from './ProfilDescri';
import Competencies from './Competencies';
import Projects from './Projects';
import Contact from './Contact';


function Home() {
    return (
        <>
            <ProfilDescri />
            <Projects />
            <Competencies />
            <Contact />
        </>
    )
}

export default Home