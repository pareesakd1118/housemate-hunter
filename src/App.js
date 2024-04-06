import './App.css';
import NavBar from './NavBar';
import City from './City';
import FirstPage from './FirstPage'
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import RoommateDetail from './RoommateDetail';

function App() {
  const [allData, setAllData] = useState([])
  const [userData, setUserData] = useState(allData)
  
  const navigate = useNavigate();

  useEffect(() => {
    getData()
  }, [])

  function getData(){
    fetch('http://localhost:3001/api/v1/roommates')
    .then(res => res.json())
    .then(data => setAllData(data))
  }


  function filterByCity(event){
    setUserData(allData.filter(user => {
      return user.city === event.target.value
    }))

    navigate(`/roommates/${event.target.value}`)
  }

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/roommates/:city' element={<City userInfo={userData} setUserData={setUserData} allData={allData}/>}/>
        <Route path='/' element={<FirstPage filterByCity={filterByCity} setUserData={setUserData}/>} />
        <Route path='/roommates/details/:id' element={<RoommateDetail allData={allData}/>} />

      </Routes>
    </div>
  );
}

export default App;

