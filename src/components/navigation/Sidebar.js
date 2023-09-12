import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

import { bubble as Menu } from "react-burger-menu";

const Sidebar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleStateChange = (state) => {
    setMenuOpen(state.isOpen);
  };

  return (
    <Menu
      onStateChange={(state) => handleStateChange(state)}
      isOpen={menuOpen}
      right
      width={"80vw"}
    >
      <ul onBlur={() => setMenuOpen(false)}>
        <li>
          <Link className="mobile-link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="mobile-link" to="/whats-reformer">
            What's a Reformer?
          </Link>
        </li>
        <li>
          <Link className="mobile-link" to="/pricing-bookings">
            Pricing and Bookings
          </Link>
        </li>
        <li>
          <Link className="mobile-link" to="/our-team">
            Our Team
          </Link>
        </li>
        <li>
          <Link className="mobile-link" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </Menu>
  );
};

export default Sidebar;
