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
    console.log(event.target.value)
    if(event.target.value === 'SF'){
      setUserData(sampleData)
      setUserData(userData.filter(user => {
        console.log("user city", user.city)
        return user.city === "San Francisco"}))
        navigate("/roommates/sanfrancisco")
    } else {
      setUserData(sampleData)
      setUserData(userData.filter(user => {
        return user.city === "Denver"}))
        navigate("/roommates/denver")
    } 
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
