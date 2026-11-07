import "./Card.css";
import { StarIcon } from "@heroicons/react/24/solid";

// `description` can be a string (one paragraph) or an array of strings (bullets).
function Card({ job, location, description }) {
  return (
    <div className="card">
      <div className="deco">
        <StarIcon className="star" />
        <hr className="line"></hr>
      </div>
      <div className="job">
        <h2 id="job-title">{job}</h2>
        <h3 className="location" id="loc">
          {location}
        </h3>
        {Array.isArray(description) ? (
          <ul className="exp-bullets">
            {description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <h3 id="exp-descri">{description}</h3>
        )}
      </div>
    </div>
  );
}

export default Card;
