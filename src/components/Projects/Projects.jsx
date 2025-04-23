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
                tech={['HTML', 'CSS', 'JavaScript', 'Express.js']}/>
                <Projectcard 
                name='Personal Website'
                tech={['React']}/>
                <Projectcard 
                name='Brain Buster'
                tech={['Python']}/>
                <Projectcard 
                name='Password Generator'
                tech={['Python']}/>
                <Projectcard 
                name='Peer Assessment System'
                tech={['HTML', 'CSS', 'Django']}/>
            </div>
            <hr id="projects-line"></hr>
        </section>
    );
}

export default Projects;