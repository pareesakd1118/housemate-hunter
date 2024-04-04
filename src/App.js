import './App.css';
import NavBar from './NavBar';
import City from './City';
import sampleData from './sampledata.js';
import FirstPage from './FirstPage'
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom'

function App() {
  const [userData, setUserData] = useState(sampleData)

  function filterByCity(event){
    if(event.target.value === 'SF'){
      setUserData(userData.filter(user => {
        return user.city === "San Francisco"}))
    } else {
      setUserData(userData.filter(user => {
        return user.city === "Denver"}))
    }

    console.log("userData:", userData)
  }

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/roommates/:city' element={<City userInfo={userData} />}/>
        <Route path='/' element={<FirstPage filterByCity={filterByCity}/>} />
      </Routes>
    </div>
  );
}

export default App;
