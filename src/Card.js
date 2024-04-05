import { Link } from 'react-router-dom';
import "./Card.css"

export default function Card({ id, image, name, age }){
    return (
      <Link to={`/roommates/details/${id}`}>
        <div>
          <h1>{name}, {age}</h1>
        <img src={image}/>  
        </div>
      </Link>
    )
}