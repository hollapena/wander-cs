import React from 'react'

function Header(props) {
  return (
    <div id="header">
      <a id="homebtn" href="/home">
        <img
          src="https://cdn2.iconfinder.com/data/icons/user-interface-169/32/home-36.png"
          alt="Home"
        />
      </a>
      <button id="logoutbtn" className="navbutton" onClick={props.userLogout}>
        Logout
      </button>
    </div>
  );
}

export default Header
