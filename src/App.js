import './App.css';
import NavBar from './NavBar';
import RoommatesDisplay from './RoommatesDisplay';
import CitySelection from './CitySelection'
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
    <main className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<CitySelection filterByCity={filterByCity} setUserData={setUserData}/>} />
        <Route path='/roommates/:city' element={<RoommatesDisplay userInfo={userData} setUserData={setUserData} allData={allData} setAllData={setAllData}/>}/>
        <Route path='/roommates/details/:id' element={<RoommateDetail allData={allData}/>} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </main>
  )
}

