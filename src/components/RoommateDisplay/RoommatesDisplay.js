import Card from "../Card/Card"
import './RoommatesDisplay.css'
import { useParams } from 'react-router-dom'
import FilterBar from '../FilterBar/FilterBar';
import {useEffect, useState} from 'react';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import NotFound from '../NotFound/NotFound';
import Loading from '../Loading/Loading';
import PropTypes from "prop-types";
import Footer from '../Footer/Footer';

export default function RoommatesDisplay({userInfo, setUserData, allData, setAllData}){
const [error, setError] = useState('')
const [loading, setLoading] = useState(true)
let cityDetail = useParams().city

  useEffect(() => {
    getAllRoommates()
}, [])

function getAllRoommates(){
    fetch('https://deploy-attempt-2914159506b6.herokuapp.com/api/v1/roommates')
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
        setLoading(false)
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
    setUserData(allData.filter(user => user.city === cityDetail))
}

if(error){
    return (
        <ErrorMessage error={error}/>
    )
}

if(loading){
    return (
        <Loading />
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
    
if(userInfo.length){
    return (  
        <div>
            <FilterBar onApplyFilters={handleFilterChange} resetFilters={resetFilters} />
            <section className='roommate-container'>
            {allUsers} 
            </section>
            <Footer />
        </div>
    )
    } else {
        return (
            <NotFound />
        )
    }
}

RoommatesDisplay.propTypes = {
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

    setAllData: PropTypes.func.isRequired,

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

