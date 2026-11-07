import Projectcard from "./Projectcard";
import './Projects.css'

function Projects() {
    return (
      <section id="projects" className="projects-section">
        <div className="projects-top">
          <h1>projects</h1>
          <h3>a showcase of my team and personal projects</h3>
        </div>
        <div className="projects-bottom">
          {/* TODO: fill in the real GitHub URLs for the next three projects.
                    Cards whose github starts with "TODO" render without a link. */}
          <Projectcard
            name="Handshake (Capstone)"
            tech={["TypeScript", "Nuxt", "PostgreSQL", "Vitest"]}
            github="TODO_HANDSHAKE_URL"
          />
          <Projectcard
            name="Campus Guide App"
            tech={["React Native", "TypeScript", "Google Maps API"]}
            github="https://github.com/yassineAbdellatif/Git-happens"
          />
          <Projectcard
            name="SUMMS Micro Mobility"
            tech={["Next.js", "TypeScript", "MongoDB", "Playwright"]}
            github="https://github.com/v3r1510/The-Blueprints"
          />
          <Projectcard
            name="Service Manager Website"
            tech={["HTML", "CSS", "JavaScript", "Express.js"]}
            github="https://github.com/v3r1510/Service_Manager_Website"
          />
          <Projectcard
            name="Peer Assessment System"
            tech={["HTML", "CSS", "Django"]}
            github="https://github.com/tiffsoa/-Code_Monkies-SOEN341_Project_F24-"
          />
          <Projectcard
            name="Personal Website"
            tech={["React"]}
            github="https://github.com/tiffsoa/portfolio"
          />
        </div>
        <hr id="projects-line"></hr>
      </section>
    );
}

export default Projects;
