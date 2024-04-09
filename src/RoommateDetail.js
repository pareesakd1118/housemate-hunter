import './RoommateDetail.css'
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom';
import Footer from "./Footer"

function RoommateDetails ( {allData} ) {
    const { id } = useParams();
    const details = allData.find(user => user.id.toString() === id);
    const navigate = useNavigate();

    if (!details) {
        return (
            <h1>No user found.</h1>
        )
    }

    return (
        <div className="roommate-details">
            <div className="outer-div">
                <div className="profile-image"> 
                    <img className="expanded-image" src = {details.image} alt={`Profile pic for ${details.name}`}/>
                </div>
                <div className="inner-div">
                    <h2>{details.name}, {details.age}</h2>
                    <div className="detail"><strong>Smoker:</strong> {details.isSmoker ? 'Yes' : 'No'} </div>
                    <div className="detail"><strong>Pets:</strong> {details.hasPets ? 'Yes' : 'No'} </div>
                    <div className="detail"><strong>Max Budget: $</strong>{details.maxBudget} </div>
                    <div className="detail"> <strong>Gender:</strong> {details.gender}</div>
                    <div className="detail"> <strong>About Me:</strong> {details.bio}</div>
                    <div className="detail"> <strong>Important Notes:</strong> {details.important}</div>
                    <button className="search-btn" onClick={() => navigate(-1)}>Back to search</button>
                </div>
            </div>
            <Footer />
        </div>
    )
}

RoommateDetails.propTypes = {
    allData: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            age: PropTypes.number.isRequired,
            isSmoker: PropTypes.bool.isRequired,
            hasPets: PropTypes.bool.isRequired,
            maxBudget: PropTypes.number.isRequired,
            gender: PropTypes.string.isRequired,
            bio: PropTypes.string,
            important: PropTypes.string,
            image: PropTypes.string.isRequired,
        })
    )
}


RoommateDetails.propTypes = {
    allData: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            age: PropTypes.number.isRequired,
            isSmoker: PropTypes.bool.isRequired,
            hasPets: PropTypes.bool.isRequired,
            maxBudget: PropTypes.number.isRequired,
            gender: PropTypes.string.isRequired,
            bio: PropTypes.string,
            important: PropTypes.string,
            image: PropTypes.string.isRequired,
        })
    )
}


export default RoommateDetails;

