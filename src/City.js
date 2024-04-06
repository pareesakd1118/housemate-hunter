
import Card from "./Card"
import './City.css'
import { useParams } from 'react-router-dom'
import FilterBar from './FilterBar';
import PropTypes from "prop-types";

export default function City({userInfo, setUserData, allData}){
let cityDetail = useParams().city

const handleFilterChange = (filters) => {
    const filteredUsers = allData.filter(user => {
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

    setUserData(allData.filter(user => {
        return user.city === cityDetail; 
        
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
<FilterBar onApplyFilters={handleFilterChange} resetFilters={resetFilters} />
        <div className='roommate-container'>
            {allUsers} 
        </div>
        </div>
        
    )
}

City.propTypes = {
    userInfo: PropTypes.arrayOf(
        PropTypes.shape({
            key: PropTypes.number.isRequired,
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            age: PropTypes.number.isRequired,
            image: PropTypes.string.isRequired,
        })
    ).isRequired,
    setUserData: PropTypes.func.isRequired,
    allData: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            age: PropTypes.number.isRequired,
            isSmoker: PropTypes.bool.isRequired,
            hasPets: PropTypes.bool.isRequired,
            maxBudget: PropTypes.number.isRequired,
            gender: PropTypes.string.isRequired,
            bio: PropTypes.string,
            important: PropTypes.string,
            image: PropTypes.string.isRequired,
        })
    ).isRequired
  };

