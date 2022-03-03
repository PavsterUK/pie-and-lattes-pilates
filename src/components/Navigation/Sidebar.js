import React, { useState } from "react";

import { bubble as Menu } from "react-burger-menu";

const Sidebar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Menu isOpen={isOpen} right width={"80%"} left {...props}>
      <ul>
        <li>
          <button onClick={() => props.home({ home: true })}>Home</button>
        </li>
        <li>
          <button onClick={() => props.whatsReformer({ whatsReformer: true })}>
            What's Reformer?
          </button>
        </li>
        <li>
          <button
            onClick={() => props.pricingBookings({ pricingBookings: true })}
          >
            Pricing &amp; Bookings
          </button>
        </li>
        <li>
          <button onClick={() => props.about({ about: true })}> About</button>
        </li>
        <li>
          <button onClick={() => props.about({ contact: true })}>
            Contact
          </button>
        </li>
      </ul>
    </Menu>
  );
};

export default Sidebar;
