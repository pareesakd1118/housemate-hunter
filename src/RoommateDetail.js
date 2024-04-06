
import { useParams } from 'react-router-dom';

function RoommateDetails ( {allData} ) {

    const { id } = useParams();
    const details = allData.find(user => user.id.toString() === id);

    if (!details) {
        return <div>No user found</div>
    }


    return (
        <div className="roommate-details">
            <h2>{details.name}, {details.age}</h2>
            <div classname="detail"><strong>Smoker:</strong> {details.isSmoker ? 'Yes' : 'No'} </div>
            <div classname="detail"><strong>Pets:</strong> {details.hasPets ? 'Yes' : 'No'} </div>
            <div classname="detail"><strong>Max Budget: $</strong>{details.maxBudget} </div>
            <div classname="detail"> <strong>Gender:</strong> {details.gender}</div>
            <div classname="detail"> <strong>About Me:</strong> {details.bio}</div>
            <div classname="detail"> <strong>Additional Notes:</strong> {details.important}</div>
            <div classname="profile-image"> 
                <img src = {details.image} alt={`Profile pic for ${details.name}`}/>
            </div>

        </div>
    )
}

export default RoommateDetails;

