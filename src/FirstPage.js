import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function FirstPage({filterByCity}){
const [city, setCity] = useState('')

function handleSubmit(event){
    event.preventDefault()
    filterByCity(event)
}
console.log('City:', city)
    return (
        <div>
            <select onChange={event => handleSubmit(event)} id="selectCity" name="selectCity">
                <option disabled selected value="">Select a City</option>
                <option value={"SF"}>San Francisco</option>
                <option value={"DEN"}>Denver</option>
            </select>
        </div>

            
    
    )
}           
