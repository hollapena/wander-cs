import React, { useState } from "react";
import CreateList from "./CreateList";
import axios from 'axios';
import ListPopup from "./ListPopup";

function List(props) {
  const user_id = props.currentTrip.user_id;
  const [buttonPopup, setButtonPopup] = useState(false);
  const [listName, setListName] = useState("");
  const [collaborators, setCollaborators] = useState([]);

  function handleTitleChange(e) {
    setListName(e.target.value);
  }

  function handleColabChange(e) {
    setCollaborators(e.target.value);
  }
  function addList() {
    axios
      .post("http://localhost:3456/api/addlist", {
        trip_id: props.currentTrip.trip_id,
        title: listName,
        author_id: user_id,
      })
      .then((res) => {
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
      setListName('');
      setCollaborators([]);
  }

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
          <label>Add Collaborators</label>
          <textarea
            onChange={handleColabChange}
            value={collaborators}
            type="text"
            placeholder="Email addresses separated by commas."
          ></textarea>
          <button onClick={addList} className="button">Submit</button>
          <button onClick={() => setButtonPopup(false)} className="button">
            Close
          </button>
        </ListPopup>
      </div>
      <CreateList list_id={props.list_id} currentTrip={props.currentTrip} />
    </div>
  );
}

export default List;
