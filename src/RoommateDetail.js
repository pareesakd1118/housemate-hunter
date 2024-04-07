
import { useParams } from 'react-router-dom';

function RoommateDetails ( {allData} ) {

    const { id } = useParams();
    const details = allData.find(user => user.id.toString() === id);

    if (!details) {
        return (
            <h1>No user found.</h1>
        )
    }

    return (
        <div className="roommate-details">
            <h2>{details.name}, {details.age}</h2>
            <div className="detail"><strong>Smoker:</strong> {details.isSmoker ? 'Yes' : 'No'} </div>
            <div className="detail"><strong>Pets:</strong> {details.hasPets ? 'Yes' : 'No'} </div>
            <div className="detail"><strong>Max Budget: $</strong>{details.maxBudget} </div>
            <div className="detail"> <strong>Gender:</strong> {details.gender}</div>
            <div className="detail"> <strong>About Me:</strong> {details.bio}</div>
            <div className="detail"> <strong>Additional Notes:</strong> {details.important}</div>
            <div className="profile-image"> 
                <img src = {details.image} alt={`Profile pic for ${details.name}`}/>
            </div>
        </div>
    )
}

export default RoommateDetails;

