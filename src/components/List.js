import React from 'react'
import CreateList from './CreateList';

function List(props) {
  return (
    <div className="subcomponent">
      <h1>Your Packing Lists</h1>
      <CreateList list_id={props.list_id} currentTrip={props.currentTrip}/>
    </div>
  )
}

export default List
