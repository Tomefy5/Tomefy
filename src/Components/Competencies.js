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
            <p className='skill-intro'>Dive into my skill set! From front-end development to back-end solutions, here’s a glimpse of the tools and technologies I wield to bring ideas to life.</p>
            <div className='container mt-5'>
                <div className='row g-3'>
                    <div className='col-12 col-lg-6'>
                        <div className='container-skill p-3 rounded'>
                            <img className='logo-react' src={logoReact} alt='Logo React' />
                            <h3 className='skill-name'>React</h3>
                            <p className='skill-descri'>I build interactive and dynamic user interfaces using React, leveraging its component-based architecture to create efficient and maintainable web applications.</p>
                        </div>
                    </div>
                    <div className='col-12 col-lg-6'>
                        <div className='container-skill p-3 rounded'>
                            <img className='logo-boostrap' src={logoBoostrap} alt='Logo Boostrap' />
                            <h3 className='skill-name'>Boostrap</h3>
                            <p className='skill-descri'>I use Bootstrap to create responsive, mobile-first web applications quickly. Its grid system and pre-built components help me design visually appealing layouts that adapt to any device.</p>
                        </div>
                    </div>
                    <div className='col-12 col-lg-6 mt-3'>
                        <div className='container-skill p-3 rounded'>
                            <img className='logo-php' src={logoPhp} alt='Logo PHP' />
                            <h3 className='skill-name'>PHP</h3>
                            <p className='skill-descri'> use PHP for server-side development, creating dynamic web applications that connect with databases for robust back-end solutions.</p>
                        </div>
                    </div>
                    <div className='col-12 col-lg-6 mt-3'>
                        <div className='container-skill p-3 rounded'>
                            <img className='logo-mysql' src={logoMySQL} alt='Logo MySQL' />
                            <h3 className='skill-name'>MySQL</h3>
                            <p className='skill-descri'>I use MySQL for database management, efficiently storing and retrieving data to support dynamic web applications.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Competencies;
