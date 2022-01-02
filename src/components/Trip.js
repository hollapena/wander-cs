import React, {useState, useEffect} from 'react';
import List from './List';
import Weather from './Weather';
import Map from './Map';
import {Routes, Route} from 'react-router-dom';


function Trip() {

  const [currentTrip, setCurrentTrip] = useState([]);

  const options = { month: "long", day: "numeric", year: "numeric" };

  const tripStart = new Date(currentTrip.trip_start);
  const tripEnd = new Date(currentTrip.trip_end);

   useEffect(() => {
     const checkForTrip = localStorage.getItem("current_trip");
     if (checkForTrip) {
       setCurrentTrip(JSON.parse(localStorage.getItem("current_trip")));
     }
   }, []);

  function handleEmailClick() {
    window.open(`mailto:${}`);
  }

  return (
    <div className="body">
      <h1>{currentTrip.trip_name}</h1>
      <h2>Organized by: {currentTrip.first_name} {currentTrip.last_name}</h2>
      <button onClick={handleEmailClick} className="button">E-mail Organizer</button>
      <p>
        {tripStart.toLocaleString("en-US", options)} &nbsp;- &nbsp;
        {tripEnd.toLocaleString("en-US", options)}
      </p>

      <List />
      <Weather />
      <Map />
    </div>
  );
}

export default Trip
