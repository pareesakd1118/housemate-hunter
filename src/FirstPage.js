import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function FirstPage({filterByCity}){
const [city, setCity] = useState('sanfranicso')

function handleSubmit(event){
    event.preventDefault()
    setCity(event.target.value)
    filterByCity(event)
    console.log(city)
}

    return (
        <form onSubmit={event => handleSubmit(event)}>
            <select id="selectCity" name="selectCity">
            <option disabled selected value="">Select a City</option>
            <option value="SF">San Francisco</option>
            <option value="DEN">Denver</option>
            </select>
            <Link to={`/roommates/${city}`}>
                <button type='submit'>Submit</button>
            </Link>
        </form>
    )
} 
