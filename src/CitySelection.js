import PropTypes from 'prop-types';
import './CitySelection.css';
import Footer from "./Footer"

export default function CitySelection({filterByCity}){

function handleSubmit(event){
    event.preventDefault()
    filterByCity(event)
}

    return (
        <div className="first-page">
            <select className="city-select-field"onChange={event => handleSubmit(event)}id="selectCity" name="selectCity">
                <option disabled selected value="">Select a City</option>
                <option value={"San Francisco"}>San Francisco</option>
                <option value={"Denver"}>Denver</option>  
            </select>
            <h2>Housemate Hunter is now live in...</h2>
            <div className="sf-den-div">
                <div className="sf-div">
                    <img className="city-image" src="https://cdn.britannica.com/13/77413-050-95217C0B/Golden-Gate-Bridge-San-Francisco.jpg" alt="image of Golden Gate Bridge"/>
                    <h3>San Francisco, CA</h3>
                </div>
                <div className="den-div">
                    <img className="city-image" src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/06/06/12/denver-16th-street.jpg?quality=75&width=1368&auto=webp" alt="image of Golden Gate Bridge"/>
                    <h3>Denver, CO</h3>
                </div>
            </div>
            <Footer />
        </div>
    )
}           


CitySelection.propTypes = {
    filterByCity: PropTypes.func.isRequired,
};


CitySelection.propTypes = {
    filterByCity: PropTypes.func.isRequired,
};
