import React, { useState } from "react";
import axios from "axios";

function CreateTrip(props) {
  const [tripName, setTripName] = useState("");
  const [destinationZip, setDestinationZip] = useState('');
  const [listType, setListType] = useState("");
  const [tripStartDate, setTripStartDate] = useState("");
  const [tripEndDate, setTripEndDate] = useState("");
  const [tripDuration, setTripDuration] = useState(0);

  function newTrip(e) {
    e.preventDefault();

    const userId = props.userId

    console.log(userId);
    axios
      .post("http://localhost:3456/api/trip", {
        trip_start: tripStartDate,
        trip_end: tripEndDate,
        trip_name: tripName,
        destination_zip: destinationZip,
        user_id: userId,
      })
      .then((res) => {
        // axios.post("http://localhost:3456/api/usertrips", {
        //   user_id: userId,
        //   trip_id: res.data[0].trip_id
        // })
        console.log(res.data[1]);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleNameChange(e) {
    setTripName(e.target.value);
  }

  function handleZipChange(e) {
    setDestinationZip(e.target.value);
  }

  function handleStartChange(e) {
    setTripStartDate(e.target.value);
  }

  function handleEndChange(e) {
    setTripEndDate(e.target.value);
  }

  return (
    <div className="body">
      <h1>WooHoo!</h1>
      <h2>Let's get the Details!</h2>
      <br />
      <form className="form">
        <div className="form-item">
          <label>Trip Name</label>
          <br />
          <input
            type="text"
            placeholder="Name Your Adventure"
            value={tripName}
            onChange={handleNameChange}
          ></input>
        </div>
        <br />

        <div className="form-item">
          <label>Destination Zip Code</label>
          <br />
          <input
            type="number"
            placeholder="Zip Code"
            value={destinationZip}
            onChange={handleZipChange}
          ></input>
        </div>
        <br />

        <div className="form-item">
          <label>Trip Start Date</label>
          <br />
          <input
            type="date"
            placeholder="Date"
            value={tripStartDate}
            onChange={handleStartChange}
          ></input>
        </div>
        <br />

        <div className="form-item">
          <label>Trip End Date</label>
          <br />
          <input
            type="date"
            placeholder="Date"
            value={tripEndDate}
            onChange={handleEndChange}
          ></input>
        </div>
        <br />
        <div className="form-item">
          <label>List Type</label>
          <br />
          <label>New List</label>
          <input type="radio" value="newlist"></input>
        </div>
        <div>
          <button className="button" onClick={newTrip}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateTrip;
