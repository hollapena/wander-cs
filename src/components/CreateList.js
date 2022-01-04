import React, {useState, useEffect} from 'react';
import axios from 'axios';


function CreateList(props) {
  const [item, setItem] = useState('');
  const [quantity, setQuantity] = useState('');
  const [listItems, setListItems] = useState([]);
 
  const user_id = props.currentTrip.user_id;

useEffect(() => {
  axios.get(`http://localhost:3456/api/list/${props.list_id}`) 
  .then((res) => {
    setListItems(res.data)
    console.log(res.data)
  })
  .catch((err) => {
    console.log(err);
  })
},[props.list_id]);

function getItems() {
axios.get(`http://localhost:3456/api/list/${props.list_id}`) 
  .then((res) => {
    setListItems(res.data)
    console.log(res.data)
  })
  .catch((err) => {
    console.log(err);
  })
}

function deleteItem(e){
e.preventDefault();



}

function togglePacked(e){
  
}

function handleItemSubmit(e){
  e.preventDefault();
  
  axios
      .post("http://localhost:3456/api/list", {
        quantity: quantity,
        list_id: props.list_id,
        user_id: user_id,
        item: item
      })
      .then((res) => {
        setItem("");
        setQuantity("");
        getItems();
        })
      .catch((err) => {
        console.log(err)
      })
    };

  function handleItemChange(e) {
    setItem(e.target.value);
  }

  function handleQuantityChange(e) {
    setQuantity(e.target.value);
  }

  return (
    <div id="packinglist">
      <h1>List Title</h1>
      <form onSubmit={handleItemSubmit}>
        <label>Item</label>
        <input
          onChange={handleItemChange}
          value={item}
          type="text"
          placeholder="Item"
        ></input>
        <br />
        <label>Quantity</label>
        <input
          value={quantity}
          onChange={handleQuantityChange}
          id="itemquantity"
          type="number"
        ></input>
        <button type="submit" onClick={handleItemSubmit}>
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
              <input onClick={togglePacked} type="checkbox" value={item.ispacked}></input>
              <p>{item.item}</p>
              <p>{item.quantity}</p>
              <button onClick={deleteItem}>X</button>
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default CreateList
