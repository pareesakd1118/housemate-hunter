import PropTypes from 'prop-types';

export default function FirstPage({filterByCity}){

function handleSubmit(event){
    event.preventDefault()

    filterByCity(event)
}

    return (
        <div>
            <select onChange={event => handleSubmit(event)}id="selectCity" name="selectCity">
                <option disabled selected value="">Select a City</option>
                <option value={"San Francisco"}>San Francisco</option>
                <option value={"Denver"}>Denver</option>  
            </select>
        </div>

            
    
    )
}           


FirstPage.propTypes = {
    filterByCity: PropTypes.func.isRequired,
};
