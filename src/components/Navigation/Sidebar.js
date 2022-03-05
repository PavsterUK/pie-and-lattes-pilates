import React from "react";

import { bubble as Menu } from "react-burger-menu";

const Sidebar = (props) => {

  let isMenuOpen = function(state) {
    return state.isOpen;
  };

  return (
    <Menu
      isOpen={isMenuOpen}
      right 
      width={"80vw"}>
      <ul>
        <li>
          <button onClick={ () => props.openTab({ home: true })}>Home</button>
        </li>
        <li>
          <button onClick={() => props.openTab({ whatsReformer: true })}>
            What's Reformer?
          </button>
        </li>
        <li>
          <button
            onClick={() => props.openTab({ pricingBookings: true })}
          >
            Pricing &amp; Bookings
          </button>
        </li>
        <li>
          <button onClick={() => props.openTab({ about: true })}> About</button>
        </li>
        <li>
          <button onClick={() => props.openTab({ contact: true })}>
            Contact
          </button>
        </li>
      </ul>
    </Menu>
  );
};

export default Sidebar;
