import { Link } from 'react-router-dom';
import "./Card.css"
import PropTypes from "prop-types";

export default function Card({ id, image, name, age }){
    return (
      <Link to={`/roommates/details/${id}`}>
        <div>
          <h3>{name}, {age}</h3>
          <img className="grid-image" src={image}/>  
        </div>
      </Link>
    )
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired
}