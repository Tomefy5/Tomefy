import React from 'react';
import '../Styles/Competencies.css';
import logoReact from '../Assets/logos_skills/react.svg';
import logoPhp from '../Assets/logos_skills/php.svg';
import logoMySQL from '../Assets/logos_skills/mysql.svg';
import logoBoostrap from '../Assets/logos_skills/bootstrap.svg';

function Competencies() {
    return (
        <div className='skills-section container-fluid p-2'>
            <h2 className='skills-section-title'>What I can do?</h2>
            <p className='skill-intro'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum aperiam</p>
            <div className='container mt-5'>
                <div className='row g-3'>
                    <div className='col-12 col-md-6'>
                        <div className='container-skill p-3 rounded'>
                            <img className='logo-react' src={logoReact} alt='Logo React' />
                            <h3 className='skill-name'>React</h3>
                            <p className='skill-descri'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum aperiam, eveniet</p>
                        </div>
                    </div>
                    <div className='col-12 col-md-6'>
                        <div className='container-skill p-3 rounded'>
                            <img className='logo-boostrap' src={logoBoostrap} alt='Logo Boostrap' />
                            <h3 className='skill-name'>Boostrap</h3>
                            <p className='skill-descri'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum aperiam, eveniet</p>
                        </div>
                    </div>
                    <div className='col-12 col-md-6 mt-3'>
                        <div className='container-skill p-3 rounded'>
                            <img className='logo-php' src={logoPhp} alt='Logo PHP' />
                            <h3 className='skill-name'>PHP</h3>
                            <p className='skill-descri'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum aperiam, eveniet</p>
                        </div>
                    </div>
                    <div className='col-12 col-md-6 mt-3'>
                        <div className='container-skill p-3 rounded'>
                            <img className='logo-mysql' src={logoMySQL} alt='Logo MySQL' />
                            <h3 className='skill-name'>MySQL</h3>
                            <p className='skill-descri'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum aperiam, eveniet</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Competencies;
