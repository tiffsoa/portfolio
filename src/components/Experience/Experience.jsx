import './Experience.css'
import Card from './Card'

function Experience() {
    return (
        <section id="experience" className="experience-section">
            <div className='top'>
                <h1>experience</h1>
                <h3>my professional journey and academic milestones</h3>
            </div>
            <div className="bottom">
                <Card 
                job='Job Name'
                location='Location'
                description='Description'
                />
            </div>
        </section>
    );
}

export default Experience;