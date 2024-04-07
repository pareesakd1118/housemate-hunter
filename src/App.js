import './App.css';
import NavBar from './NavBar';
import City from './City';
import FirstPage from './FirstPage'
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import RoommateDetail from './RoommateDetail';
import NotFound from './NotFound';
import ErrorMessage from './ErrorMessage';

function App() {
  const [allData, setAllData] = useState([])
  const [userData, setUserData] = useState(allData)
  const [error, setError] = useState('')

  const navigate = useNavigate();

  useEffect(() => {
    getData()
  }, [])

  function getData(){
    fetch('http://localhost:3001/api/v1/roommate')
    .then(res => {
      if(!res.ok){
        throw new Error(`${res.status} Error: ${res.statusText}. Unable to retrieve roommates at this time. Please try again later.`)
      } else {
        return res.json()
      }
    })
    .then(data => setAllData(data))
    .catch(error => {
      setError(error.message)
      console.log(error)
    })
  }


  function filterByCity(event){
    setUserData(allData.filter(user => {
      return user.city === event.target.value
    }))

    navigate(`/roommates/${event.target.value}`)
  }

  if(error){
    return (
      <ErrorMessage error={error}/>
    )
  } else {
      return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/roommates/:city' element={<City userInfo={userData} setUserData={setUserData} allData={allData}/>}/>
        <Route path='/' element={<FirstPage filterByCity={filterByCity} setUserData={setUserData}/>} />
        <Route path='/roommates/details/:id' element={<RoommateDetail allData={allData}/>} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
  }

;
}

export default App;

