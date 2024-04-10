import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from './Loading';
import ErrorMessage from './ErrorMessage';

export default function RoommateDetails() {
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`http://localhost:3001/api/v1/roommates/${id}`);
        
        if (!response.ok) {
          throw new Error(`${response.status} Error: ${response.statusText}. Unable to retrieve roommate at this time. Please try again later.`);
        }
        const data = await response.json();
      
        setDetails(data[0]);
        setError(null);
      } catch (error) {
        setError(error.message);
        setDetails(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <ErrorMessage error={error}/>
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
          <img src={details.image} alt={`Profile pic for ${details.name}`} />
      </div>
    </div>
  );
}

