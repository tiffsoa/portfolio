import { FolderIcon } from "@heroicons/react/24/outline";
import "./Projectcard.css"

function Projectcard({name, tech}) {
    return (
        <div className="project-card">
            <FolderIcon id="folder"/>
            <h2 id="project-name">{name}</h2>
            <div className="tech-project">
                {tech.map((item, index) =>(
                    <span key={index} className="tech-stack">
                        {item}
                    </span>
                ))}
            </div>


        </div>
    );
}

export default Projectcard;