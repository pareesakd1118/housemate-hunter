
import Card from "./Card"
import './City.css'
import { useParams } from 'react-router-dom'
import FilterBar from './FilterBar';
import {useEffect, useState} from 'react';
import ErrorMessage from './ErrorMessage';
import NotFound from './NotFound';

export default function City({userInfo, setUserData, allData, setAllData}){
const [error, setError] = useState('')
console.log('userinfo:', userInfo)
let cityDetail = useParams().city

useEffect(() => {
    getData()
  }, [])

  function getData(){
    fetch('http://localhost:3001/api/v1/roommates')
    .then(res => {
      if(!res.ok){
        throw new Error(`${res.status} Error: ${res.statusText}. Unable to retrieve roommates at this time. Please try again later.`)
      } else {
        return res.json()
      }
    })
    .then(data => {
        setUserData(data.filter(user => user.city === cityDetail))
        setAllData(data)
    })
    .catch(error => {
      setError(error.message)
    })
  }

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

setUserData(filteredUsers.filter(user => user.city === cityDetail))
}
function resetFilters() {

    setUserData(allData.filter(user => {
        return user.city === cityDetail; 
        
    }))
}

if(error){
    return (
        <ErrorMessage error={error}/>
    )
}
if(userInfo.length === 0){
    return (
        <NotFound />
    )
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