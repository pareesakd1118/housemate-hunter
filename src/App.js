import './App.css';
import NavBar from './NavBar';
import City from './City';
import FirstPage from './FirstPage'
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import RoommateDetail from './RoommateDetail';
import NotFound from './NotFound';

export default function App() {
  const [allData, setAllData] = useState([])
  const [userData, setUserData] = useState(allData)
  const navigate = useNavigate();

  function filterByCity(event){
    setUserData(allData.filter(user => user.city === event.target.value))

    navigate(`/roommates/${event.target.value}`)
  }

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<FirstPage filterByCity={filterByCity} setUserData={setUserData}/>} />
        <Route path='/roommates/:city' element={<City userInfo={userData} setUserData={setUserData} allData={allData} setAllData={setAllData}/>}/>
        <Route path='/roommates/details/:id' element={<RoommateDetail allData={allData}/>} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

