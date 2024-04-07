import Error from '../src/assets/error.png';
import './ErrorMessage.css';

export default function ErrorMessage({error}){
    console.log(error)
    return (
        <div className='error-page'>
            <h1 className='error-text'>{error}</h1>
            <img className='error-img' src={Error} />
        </div>
    )
}