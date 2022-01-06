import React, { useState, useEffect } from "react";
import axios from "axios";
import ListPopup from './ListPopup';

function CreateList(props) {
  const [item, setItem] = useState("");
  const [quantity, setQuantity] = useState("");
  const [listItems, setListItems] = useState([]);
  const [listTitle, setListTitle] = useState([]);
  const [collabButtonPopup, setCollabButtonPopup] = useState(false);
  const [collaborators, setCollaborators] = useState("");

  const user_id = props.currentTrip.user_id;
  localStorage.setItem("listId", JSON.stringify(props.list_id));

  useEffect(() => {
    const list_id = JSON.parse(localStorage.getItem("listId"));
    axios
      .get(`http://localhost:3456/api/list/${list_id}`)
      .then((res) => {
        let items = [];
        let title = [];
        items = res.data;
        title = items.pop();
        setListItems(items);
        setListTitle(title);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function getItems() {
    const list_id = JSON.parse(localStorage.getItem("listId"));
    axios
      .get(`http://localhost:3456/api/list/${list_id}`)
      .then((res) => {
        let items = [];
        let title = [];
        items = res.data;
        title = items.pop();
        setListItems(items);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function deleteItem(e, item_id) {
    e.preventDefault();
    axios
      .delete(`http://localhost:3456/api/items/${item_id}`)
      .then((res) => {
        getItems();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function togglePacked(e) {}

  function handleItemSubmit(e) {
    e.preventDefault();

    axios
      .post("http://localhost:3456/api/list", {
        quantity: quantity,
        list_id: props.list_id,
        user_id: user_id,
        item: item,
      })
      .then((res) => {
        setItem("");
        setQuantity("");
        getItems();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleItemChange(e) {
    setItem(e.target.value);
  }

  function handleQuantityChange(e) {
    setQuantity(e.target.value);
  }

  function handleCollabChange(e) {
    setCollaborators(e.target.value);
  }

  function addCollaborator(e) {
    e.preventDefault();
    axios.get(
      `http://localhost:3456/api/user/?email='${collaborators}'`
    )
    .then((res) => {
      console.log(res.data)
     axios .post("http://localhost:3456/api/collab", {
        trip_id: props.currentTrip.trip_id,
        list_id: props.list_id,
        user_id: res.data[0].user_id,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    })
    .catch((err) => {console.log(err)})
      
    setCollaborators("");
    setCollabButtonPopup(false);
  }

  return (
    <div id="packinglist">
      <h1>
        {listTitle.title} <br /> Packing List
      </h1>
      <button onClick={() => setCollabButtonPopup(true)}>
        Add a Collaborator
      </button>
      <ListPopup trigger={collabButtonPopup}>
        <label>Add Collaborator</label>
        <input
          onChange={handleCollabChange}
          value={collaborators}
          type="text"
          placeholder="Email address"
        ></input>
        <button onClick={addCollaborator} className="button">
          Add Collaborator
        </button>
        <button onClick={() => setCollabButtonPopup(false)} className="button">
          Close
        </button>
      </ListPopup>
      <br /><br /><br />
      <form onSubmit={handleItemSubmit}>
        <label>Item</label>
        <input
          onChange={handleItemChange}
          value={item}
          type="text"
          placeholder="Item"
        ></input>
        <label>Quantity</label>
        <input
          value={quantity}
          onChange={handleQuantityChange}
          id="itemquantity"
          type="number"
        ></input>
        <br />
        <button className="button" type="submit" onClick={handleItemSubmit}>
          Submit Item
        </button>
      </form>
      <section>
        <div id="listlabels">
          <p>Packed</p>
          <p>Item</p>
          <p>Quantity</p>
          <p>Delete</p>
        </div>
        {listItems.map((item) => {
          return (
            <div key={item.item_id} className="listitem">
              <input
                onClick={togglePacked}
                type="checkbox"
                value={item.ispacked}
              ></input>
              <p>{item.item}</p>
              <p>{item.quantity}</p>
              <button onClick={(e) => deleteItem(e, item.item_id)} value={item.item_id}>
                X 
              </button>
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default CreateList;
