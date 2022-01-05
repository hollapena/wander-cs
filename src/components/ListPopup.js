import React from 'react'

function ListPopup(props) {
  return (props.trigger) ? (
    <div className="popup">
      <div className="popup-inner">
        
        {props.children}
      </div>
    </div>
  ): "";
}

export default ListPopup
