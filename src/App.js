import './App.css';
import NavBar from './NavBar';
import City from './City';
import sampleData from './sampledata.js';
import FirstPage from './FirstPage'
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

function App() {
  const [userData, setUserData] = useState(sampleData)

  const navigate = useNavigate();

  function filterByCity(event){
    setUserData(sampleData.filter(user => {
      return user.city === event.target.value
    }))

    navigate(`/roommates/${event.target.value}`)
  }

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/roommates/:city' element={<City userInfo={userData} />}/>
        <Route path='/' element={<FirstPage filterByCity={filterByCity} setUserData={setUserData}/>} />
      </Routes>
    </div>
  );
}

export default App;
