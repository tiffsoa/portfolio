import Projectcard from "./Projectcard";
import './Projects.css'

function Projects() {
    return (
        <section id="projects" className="projects-section">
            <div className="projects-top">
                <h1>projects</h1>
                <h3>a showcase of my personal projects</h3>
            </div>
            <div className="projects-bottom">
                <Projectcard 
                name='Service Manager Website'
                tech={['HTML', 'CSS', 'JavaScript', 'Express.js']}
                github='https://github.com/v3r1510/Service_Manager_Website'/>
                <Projectcard 
                name='Personal Website'
                tech={['React']}
                github='https://github.com/tiffsoa/portfolio'/>
                <Projectcard 
                name='Brain Buster'
                tech={['Python']}
                github='https://github.com/tiffsoa/game_python_348'/>
                <Projectcard 
                name='Password Generator'
                tech={['Python']}
                github='https://github.com/tiffsoa/password-generator'/>
                <Projectcard 
                name='Peer Assessment System'
                tech={['HTML', 'CSS', 'Django']}
                github='https://github.com/tiffsoa/-Code_Monkies-SOEN341_Project_F24-'/>
            </div>
            <hr id="projects-line"></hr>
        </section>
    );
}

export default Projects;