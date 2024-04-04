import './App.css';
import NavBar from './NavBar';
import City from './City';
import sampleData from './sampledata.js';
import FirstPage from './FirstPage'
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import RoommateDetail from './RoommateDetail';


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
        <Route path='/roommates/details/:id' element={<RoommateDetail sampleData={userData}/>} />

      </Routes>
    </div>
  );
}

export default App;

//filter by gender, pets, smoker, age max (max and all lower), budget ranges (under 1000, 1000-1999, 2-2.9, etc up to 5k)
//input fields, then submit via "apply filters" button
//Gender: male, female, non-binary
//Pets: true or false
//Smoker: Yes or No
//Budget: (see above)
//Age: input age and all lower
//
