import "./Card.css";
import { StarIcon } from "@heroicons/react/24/solid";

function Card({ job, location, description }) {
  return (
    <div className="card">
      <div className="deco">
        <StarIcon className="star" />
        <hr className="line"></hr>
      </div>
      <div className="job">
        <h2>{job}</h2>
        <h3 className="location" id="loc">
          {location}
        </h3>
        <h3 id="exp-descri">{description}</h3>
      </div>
    </div>
  );
}

export default Card;
