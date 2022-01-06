import React, { useState } from "react";
import CreateList from "./CreateList";
import axios from 'axios';
import ListPopup from "./ListPopup";

function List(props) {
  const user_id = props.currentTrip.user_id;
  const [buttonPopup, setButtonPopup] = useState(false);

  const [listName, setListName] = useState("");
  

  function handleTitleChange(e) {
    setListName(e.target.value);
  }

  
  function addList(e) {
    e.preventDefault();
    axios
      .post("http://localhost:3456/api/addlist", {
        trip_id: props.currentTrip.trip_id,
        title: listName,
        author_id: user_id
      })
      .then((res) => {
        console.log(res.data)
        
        axios
          .post("http://localhost:3456/api/addlisttrips", {
            user_id: user_id,
            trip_id: props.currentTrip.trip_id,
            list_id: res.data[0].list_id,
          })
          .catch((err) => {
            console.log(err);
          });
      setListName('');
      window.location.reload();
  })}
  

  return (
    <div className="subcomponent">
      <h1>Your Packing Lists</h1>
      <div>
        <button onClick={() => setButtonPopup(true)}>
          Add a <br /> List
        </button>
        <ListPopup trigger={buttonPopup}>
          <label>List Name</label>
          <br />
          <input
            onChange={handleTitleChange}
            value={listName}
            type="text"
          ></input>
          <br /> <br />
          <button onClick={addList} className="button">
            Submit
          </button>
          <button onClick={() => setButtonPopup(false)} className="button">
            Close
          </button>
        </ListPopup>
        {/* <ListPopup trigger={collabButtonPopup}>
          <label>Add Collaborator</label>
          <input
            onChange={handleCollabChange}
            value={collaborators}
            type="text"
            placeholder="Email addresses separated by commas."
          ></input>

          <button onClick={addCollaborator} className="button">
            Add Collaborator
          </button>
          <button onClick={() => setCollabButtonPopup(false)} className="button">
            Close
          </button>
        </ListPopup> */}
      </div>
      <CreateList list_id={props.list_id} currentTrip={props.currentTrip} />
    </div>
  );
}

export default List;

