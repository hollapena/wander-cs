import React from 'react'
import moment from 'moment';

function MiniTrip(props) {

  const options = {month: 'long', day:'numeric', year:'numeric'};

  const tripStart = new Date(props.trip.trip_start);
  const tripEnd = new Date(props.trip.trip_end);

  const uId = JSON.parse(localStorage.getItem("userId"));


  return (
    <div id="minitrip">
      <section id="triptitle">
        <h1>{props.trip.trip_name}</h1>
      </section>
      <h2>
        Organized by: {props.trip.first_name} {props.trip.last_name}
      </h2>
      <p>
        {tripStart.toLocaleString("en-US", options)} &nbsp;- &nbsp;
        {tripEnd.toLocaleString("en-US", options)}
      </p>
    </div>
  );
}

export default MiniTrip
