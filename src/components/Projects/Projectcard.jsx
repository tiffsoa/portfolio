import { FolderIcon } from "@heroicons/react/24/outline";
import "./Projectcard.css"

function Projectcard({name, tech, github}) {
    return (
        
            <div className="project-card">
                <a className="project-link" href={github} target="_blank">
                    <FolderIcon id="folder"/>
                    <h2 id="project-name">{name}</h2>
                    <div className="tech-project">
                    {tech.map((item, index) =>(
                        <span key={index} className="tech-stack">
                            {item}
                        </span>
                     ))} </div>
                </a>
            </div>


            
        
    );
}

export default Projectcard;