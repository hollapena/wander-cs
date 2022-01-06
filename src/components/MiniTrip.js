import React, {useState, useEffect} from 'react';
import axios from 'axios';

function MiniTrip(props) {

  const options = {month: 'long', day:'numeric', year:'numeric'};

  const tripStart = new Date(props.trip.trip_start);
  const tripEnd = new Date(props.trip.trip_end);

  const uId = JSON.parse(localStorage.getItem("userId"));

const [currentTrip, setCurrentTrip] = useState([]);
const [tripAttendees, setTripAttendees] = useState([]);
const [organizer, setOrganizer] = useState([]);


console.log(props.trip)
useEffect(() => {
 
    setCurrentTrip(props.trip);
  function getTripAttendees() {
    // let trip = JSON.parse(localStorage.getItem("current_trip"));
    let trip_id = props.trip.trip_id;
    axios
      .get(`http://localhost:3456/api/trip/${trip_id}`)
      .then((res) => {
        console.log(res.data)
        setTripAttendees(res.data);
        // localStorage.setItem("trip_attendees", JSON.stringify(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  getTripAttendees();
}, [props.trip]);



useEffect(() => {
  function findOrganizer() {
    // localStorage.setItem("trip_attendees", JSON.stringify(tripAttendees));
    for (let i = 0; i < tripAttendees.length; i++) {
      if (tripAttendees[i].user_id === +tripAttendees[i].author_id) {
        setOrganizer(tripAttendees[i]);
      }
    }
  }

  findOrganizer();
}, [tripAttendees]);
     
  return (
    <div id="minitrip">
      <section id="triptitle">
        <h1>{props.trip.trip_name}</h1>
      </section>
      <h2>
        Organized by: {organizer.first_name} {organizer.last_name}
      </h2>
      <p>
        {tripStart.toLocaleString("en-US", options)} &nbsp;- &nbsp;
        {tripEnd.toLocaleString("en-US", options)}
      </p>
    </div>
  );
}

export default MiniTrip
