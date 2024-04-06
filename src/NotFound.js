import Error from '../src/assets/error.png'
import './NotFound.css';

export default function NotFound(){
    return (
        <div className='error-container'>
            <h2 className='error-header'>404 PAGE NOT FOUND</h2>
            <img className='error' src={Error} />
        </div>
    )
}