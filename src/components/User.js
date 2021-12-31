import React from "react";
import {Routes, Route} from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import UserHome from "./UserHome";
import Trip from "./Trip";
import Trips from "./Trips";
import List from "./List";
import CreateList from "./CreateList";
import CreateTrip from "./CreateTrip";
import Weather from "./Weather";
import Map from "./Map";

function User(props) {
  return (
    <div id="usermain">
      <Header userLogout={props.userLogout} />

      <Routes id="body">
        <Route
          path="/"
          element={
            <UserHome
              userFirst={props.userFirst}
              userLast={props.userLast}
              userEmail={props.userEmail}
              userId={props.userId}
              userPass={props.userPass}
              authenticated={props.authenticated}
            />
          }
        />
        <Route path="trip" element={<Trip />} />
        <Route path="trips" element={<Trips />} />
        <Route path="list" element={<List />} />
        <Route path="newlist" element={<CreateList />} />
        <Route
          path="newtrip"
          element={
            <CreateTrip
              userFirst={props.userFirst}
              userLast={props.userLast}
              userEmail={props.userEmail}
              userId={props.userId}
              userPass={props.userPass}
              authenticated={props.authenticated}
             />
          }
        />
        <Route path="weather" element={<Weather />} />
        <Route path="map" element={<Map />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default User;
