import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from './Loading';
import ErrorMessage from './ErrorMessage';
import './RoommateDetail.css'
import Footer from './Footer'

export default function RoommateDetails() {
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchSpecificRoommate = async () => {
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

    fetchSpecificRoommate();
  }, [id]);

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <ErrorMessage error={error}/>
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
  );
}

