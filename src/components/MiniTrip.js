import React from 'react'

function MiniTrip(props) {

  const uId = JSON.parse(localStorage.getItem("userId"));


  return (
    <div id="minitrip">
      <section id="triptitle">
        <h1>{props.trip.trip_name}</h1>
      </section>
      <h2>Organized by: {props.trip.first_name} {props.trip.last_name}</h2>
      <p>{props.trip.trip_start} - {props.trip.trip_end}</p>
    </div>
  );
}

export default MiniTrip
