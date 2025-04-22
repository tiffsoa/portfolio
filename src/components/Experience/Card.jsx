import './Card.css'

function Card({job, location, description}) {
    return (
        <div className='card'>
            <div className='deco'>

            </div>
            <div className='job'>
                <h2>{job}</h2>
                <h3>{location}</h3>
                <h4>{description}</h4>
            </div>
        </div>
    );
}

export default Card;