import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import MiniTrip from "./MiniTrip";

function Trips() {
  const [trips, setTrips] = useState([]);

  const navigate = useNavigate();

  // const uId = JSON.parse(localStorage.getItem("userId"));

  useEffect(() => {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    function getTrips() {
      const uId = JSON.parse(localStorage.getItem("userId"));
      axios
        .get(`http://localhost:3456/api/trip/?user_id=${uId}`)
        .then((res) => {
          console.log(res.data);
          setTrips(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    getTrips();

    return () =>{
      source.cancel();
    }
  }, []);

  function handleTripClick(e, tripInfo) {
    e.preventDefault();
    navigate("/home/trip");
    localStorage.setItem("current_trip", JSON.stringify(tripInfo));
  }

  return (
    <div className="body" id="trips">
      <h1>Your Trips</h1>
      <section>
        {trips.map((trip) => {
          return (
            <button
              id="tripbtn"
              key={trip.trip_id}
              value={trip.trip_id}
              onClick={(e) => handleTripClick(e, trip)}
            >
              <MiniTrip trip={trip} />
            </button>
          );
        })}
      </section>
    </div>
  );
}

export default Trips;
