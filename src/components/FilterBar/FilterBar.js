import './FilterBar.css'
import React, { useState } from 'react';
import PropTypes from "prop-types";


export default function FilterBar({onApplyFilters, resetFilters}) {

    const [gender, setGender] = useState("")
    const [hasPets, setHasPets] = useState('');
    const [isSmoker, setIsSmoker] = useState('');
    const [ageMax, setAgeMax] = useState('');
    const [budgetRange, setBudgetRange] = useState('');
  
    const handleApplyFilterClick = () => {
   
        onApplyFilters({
            gender,
            hasPets,
            isSmoker,
            ageMax,
            budgetRange,
        })    
    };

    return (
     <div className="filterbar-div">
            <div className="select-div">
                <select onChange={event => setGender(event.target.value)} id="gender-field" name="gender-field">
                    <option value="">Gender</option>
                    <option value={"male"}>Male</option>
                    <option value={"female"}>Female</option>  
                    <option value={"non-binary"}>Non-Binary</option> 
                </select>
                        
                <select onChange={(e) => setHasPets(e.target.value)} value={hasPets} name='pet-field'>
                    <option value="">Pets</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>

                
                <select onChange={(e) => setIsSmoker(e.target.value)} value={isSmoker}>
                    <option value="">Smoker</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>

                
                <input
                    type="number"
                    placeholder="Max Age"
                    value={ageMax}
                    onChange={(e) => setAgeMax(e.target.value)}
                />

                <select onChange={(e) => setBudgetRange(e.target.value)} value={budgetRange}>
                    <option value="">Budget</option>
                    <option value="0-999">Under $1000</option>
                    <option value="1000-1999">$1000-$1999</option>
                    <option value="2000-2999">$2000-$2999</option>
                    <option value="3000-3999">$3000-$3999</option>
                    <option value="4000-5000">$4000-$5000</option>
                </select>
            </div>
            <div className="button-div">
                <button className='filter-button' onClick={handleApplyFilterClick}>Apply Filters</button>
                <button className='filter-button' onClick={resetFilters}>Reset Filters</button>
            </div>
            <div class="divider-bar"></div>
        </div>
    )    
};

FilterBar.propTypes = {
    onApplyFilters: PropTypes.func.isRequired,
    resetFilters: PropTypes.func.isRequired
}
