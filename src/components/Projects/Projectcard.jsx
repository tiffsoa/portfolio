import { FolderIcon } from "@heroicons/react/24/outline";
import "./Projectcard.css"

function Projectcard({name, tech, github}) {
    // Placeholder URLs (starting with "TODO") get the same box but no link.
    const hasLink = Boolean(github) && !github.startsWith("TODO");

    const content = (
        <>
            <FolderIcon id="folder"/>
            <h2 id="project-name">{name}</h2>
            <div className="tech-project">
            {tech.map((item, index) =>(
                <span key={index} className="tech-stack">
                    {item}
                </span>
             ))} </div>
        </>
    );

    return (
            <div className="project-card">
                {hasLink ? (
                    <a className="project-link" href={github} target="_blank" rel="noopener noreferrer">
                        {content}
                    </a>
                ) : (
                    <div className="project-link">
                        {content}
                    </div>
                )}
            </div>
    );
}

export default Projectcard;
