import React, { useState, useEffect } from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom';

function CreateTrip(props) {
  const [tripName, setTripName] = useState("");
  const [destinationZip, setDestinationZip] = useState("");
  const [listType, setListType] = useState("");
  const [tripStartDate, setTripStartDate] = useState("");
  const [tripEndDate, setTripEndDate] = useState("");
  const [tripDuration, setTripDuration] = useState(0);
  const [templates, setTemplates] = useState([]);
  const [names, setNames] = useState([]);

  const uId = JSON.parse(localStorage.getItem('userId'));
  const navigate = useNavigate();

  useEffect(() => {
    const templates= localStorage.getItem("templates");
    if (templates) {
      setTemplates(JSON.parse(localStorage.getItem("templates")));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("templates", JSON.stringify(templates));
  }, [templates]);

  useEffect(() => {
    function getTemplates(){
    
    // const userId = props.userId
      axios
        .get(`http://localhost:3456/api/list/?user_id='${uId}'`)
        .then((res) => {
          setTemplates(res.data[0]);
        })
        .catch((err) => {
          console.log(err);
        });
      }

    getTemplates();
  }, [uId]);

  function newTrip(e) {
    e.preventDefault();

    console.log(uId);
    axios
      .post("http://localhost:3456/api/trip", {
        trip_start: tripStartDate,
        trip_end: tripEndDate,
        trip_name: tripName,
        destination_zip: destinationZip,
        title: listType,
        user_id: uId
      })
      .then((res) => {
        console.log(res.data[0])
        axios.post("http://localhost:3456/api/userstrips", {
          user_id: uId,
          trip_id: res.data[0][0].trip_id,
          list_id: res.data[0][1].list_id
        });
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
      navigate("/home/trips");
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

  function handleListChange(e) {
    setListType(e.target.value);
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
        <div id="templates" className="form-item">
          <label>Packing List Type</label>
          <br />
          <br />
          {templates.map((template) => {if(template.template === true){
            return(
            <div key={template.title}>
              <label>{template.title}</label>
              <input
                onClick={handleListChange}
                type="radio"
                value={template.title}
              ></input>
            </div>
            )
          }})}

          <label>New List</label>
          <br />
          <input
            onChange={handleListChange}
            type="text"
            placeholder="Name Your List"
          ></input>
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
