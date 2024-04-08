import House from '../src/assets/house.png';
import './Loading.css';

export default function Loading(){
    return (
        <div className='loading-container'>
            <h1>Loading ...</h1>
            <img className='house' src={House} />
        </div>
    )
}