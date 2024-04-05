import { useId } from "react"
import Card from "./Card"
import './City.css'
import { useParams } from 'react-router-dom'
import sampleData from './sampledata'
import FilterBar from './FilterBar';

export default function City({userInfo, setUserData }){
let cityDetail = useParams().city

const handleFilterChange = (filters) => {
    const filteredUsers = sampleData.filter(user => {
        const filterConditions = [
            filters.gender ? user.gender === filters.gender : true,
            filters.hasPets ? (filters.hasPets === 'yes' ? user.hasPets : !user.hasPets) : true,
            filters.isSmoker ? (filters.isSmoker === 'yes' ? user.isSmoker : !user.isSmoker) : true,
            filters.ageMax ? user.age <= filters.ageMax : true,
            filters.budgetRange ? (
              parseInt(user.maxBudget, 10) >= parseInt(filters.budgetRange.split('-')[0], 10) &&
              parseInt(user.maxBudget, 10) <= parseInt(filters.budgetRange.split('-')[1], 10)
            ) : true,
        ]
        return filterConditions.every(condition => condition === true);
    });

setUserData(filteredUsers)
}
function resetFilters() {
    setUserData(sampleData.filter(user => {
        return user.city === cityDetail; 
        // setGender("")
        // setHasPets("")
        // setIsSmoker("")
        // setAgeMax("")
        // setBudgetRange("")
    }))
}
const allUsers = userInfo.map(user => {
    
            return (
        <Card
            key={user.id}
            id={user.id}
            name={user.name}
            age={user.age}
            image={user.image}
        />
    )

    })


    return (
        <div>
<FilterBar onApplyFilters={handleFilterChange} resetFilters={resetFilters}/>
        <div className='roommate-container'>
            {allUsers} 
        </div>
        </div>
        
    )
}