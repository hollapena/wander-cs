import React, {useState, useEffect} from 'react';
import List from './List';
import Weather from './Weather';
import Map from './Map';
import axios from 'axios';
import {Routes, Route} from 'react-router-dom';


function Trip() {

  const [currentTrip, setCurrentTrip] = useState([]);
  const [tripAttendees, setTripAttendees] = useState([]);
  const [organizer, setOrganizer] = useState([]);

  const options = { month: "long", day: "numeric", year: "numeric" };

  const tripStart = new Date(currentTrip.trip_start);
  const tripEnd = new Date(currentTrip.trip_end);

   useEffect(() => {
     const checkForTrip = localStorage.getItem("current_trip");
     if (checkForTrip) {
       setCurrentTrip(JSON.parse(localStorage.getItem("current_trip")));
     };
     function getTripAttendees() {
       let trip = JSON.parse(localStorage.getItem("current_trip"));
       let trip_id = trip.trip_id;
       axios
         .get(`http://localhost:3456/api/trip/${trip_id}`)
         .then((res) => {
           setTripAttendees(res.data);
         })
         .catch((err) => {
           console.log(err);
         });
     }

     getTripAttendees();
    }, []);

    useEffect(() => {
     function findOrganizer() {
    
     for(let i = 0; i < tripAttendees.length; i++){
             if(tripAttendees[i].user_id === +tripAttendees[i].author_id){
               setOrganizer(tripAttendees[i]);
             }
   }}

     findOrganizer();

   }, [tripAttendees]);
    
  
  function handleEmailClick() {
    window.open(`mailto:${organizer.user_email}`);
  }
 
   console.log(tripAttendees)
   console.log(organizer)

  return (
    <div id="tripscreen" className="body">
      <div id="tripheader">
        <h1 id="maintriptitle">{currentTrip.trip_name}</h1>
        <p id="tripdate">
          {tripStart.toLocaleString("en-US", options)} &nbsp;- &nbsp;
          {tripEnd.toLocaleString("en-US", options)}
        </p>
        <h2 id="triporganizer">
          Organized by: <br />
          {organizer.first_name} {organizer.last_name}
        </h2>
        <button id="emailbtn" onClick={handleEmailClick} className="button">
          E-mail Organizer
        </button>
      </div>

      <List />
      <Weather />
      <Map />
    </div>
  );
}

export default Trip
