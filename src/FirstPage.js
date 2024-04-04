import { Link } from 'react-router-dom';
import { useState } from 'react';
import sampleData from './sampledata.js';
import { useNavigate } from 'react-router-dom';


export default function FirstPage({filterByCity}){

function handleSubmit(event){
    event.preventDefault()

    filterByCity(event)
}

    return (
        <div>
            <select onChange={event => handleSubmit(event)}id="selectCity" name="selectCity">
                <option disabled selected value="">Select a City</option>
                <option value={"San Francisco"}>San Francisco</option>
                <option value={"Denver"}>Denver</option>  
            </select>
        </div>

            
    
    )
}           
