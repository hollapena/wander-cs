import React, {useEffect, useState} from 'react'
import axios from 'axios';
import MiniTrip from './MiniTrip';

function Trips() {

  const [trips, setTrips] = useState([])

  const uId = JSON.parse(localStorage.getItem("userId"));

  useEffect(() => {
    function getTrips(){
      axios
        .get(`http://localhost:3456/api/trip/?user_id=${uId}`)
        .then((res) => {
             console.log(res.data)
          setTrips(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
      }

    getTrips();
  }, []);

  return (
    <div className="body"  id="trips">
      <h1>Your Trips</h1>
      <ul>
        {trips.map((trip) => {
          return <MiniTrip trip={trip} key={trip.trip_id} />;
        })}
      </ul>
    </div>
  );
}

export default Trips
