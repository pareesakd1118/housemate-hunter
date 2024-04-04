import React, { useState } from 'react'

export default function FilterBar({onApplyFilters}) {
    const [gender, setGender] = useState("")

    const handleApplyFilterClick = () => {
        onApplyFilters({
            gender,
        })
        
    };

    return (
        <div>
            <select onChange={event => setGender(event.target.value)} id="gender-field" name="gender-field">
                <option disabled selected value="">Gender</option>
                <option value={"male"}>Male</option>
                <option value={"female"}>Female</option>  
                <option value={"non-binary"}>Non-Binary</option> 
            </select>
            <button onClick={handleApplyFilterClick}>Apply Filters</button>
        </div>
    )    
};


setUserData(userData.filter(user => gender === user.gender))