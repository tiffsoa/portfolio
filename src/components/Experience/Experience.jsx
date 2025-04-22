import './Experience.css'
import Card from './Card'

function Experience() {
    return (
        <section id="experience" className="experience-section">
            <div className='top'>
                <h1>experience</h1>
                <h3>my professional journey and academic milestones</h3>
            </div>
            <div className="bottom-exp">
                <Card 
                job='Junior Functional Consultant'
                location='Vffice Inc. (Jan 2025 - May 2025)'
                description='Supported clients by
                 analyzing business needs and helping
                  implement solutions in Microsoft Dynamics 365 Business Central.'
                />
                <Card 
                job='BEng in Software Engineering'
                location='Concordia University (Jan 2024 - May 2028)'
                description='Coursework in Data Structure, Algorithms, 
                Web Development, Software Process and Practices, Operating Systems.'
                />
                <Card 
                job='Cashier'
                location='Bulkbarn (Oct 2023 - Apr 2024)'
                description='Provided customer service, 
                handled transactions and maintained a clean, organized retail environment. '
                />
                <Card 
                job='International Baccalaureate'
                location='Ecole Secondaire Mosaïque (Sept 2020 - May 2022)'
                description='HL Physics, HL History of Europe, HL French Literature,
                 SL Mathematics AA, SL Chemistry, SL English Literature'
                />
            </div>
            <hr></hr>
        </section>
    );
}

export default Experience;