import Error from '../../assets/error.png';
import './ErrorMessage.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function ErrorMessage({error}){

    return (
        <div className='error-page'>
            <h1 className='error-text'>{error}</h1>
            <img className='error-img' src={Error} />
            <div>
                <Link to={'/'}><button className='home-button'>Back to Homepage</button></Link>
            </div>
        </div>
    )
}

ErrorMessage.propTypes = {
    error: PropTypes.string.isRequired
}