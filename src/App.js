import './App.css';
import NavBar from './NavBar';
import City from './City';
import sampleData from './sampledata.js';

function App() {
    
  return (
    <div className="App">
      <NavBar />
      <City userInfo={sampleData}/>
    </div>
  );
}

export default App;
