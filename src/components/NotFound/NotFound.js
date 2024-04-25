import Error from '../../assets/error.png'
import './NotFound.css';
import { Link } from 'react-router-dom';

export default function NotFound(){
    return (
        <div className='error-container'>
            <h2 className='error-header'>404 PAGE NOT FOUND</h2>
            <img className='error' src={Error} />
            <div>
              <Link to={'/'}><button className='home-button'>Back to Homepage</button></Link>  
            </div>      
        </div>
    )
}