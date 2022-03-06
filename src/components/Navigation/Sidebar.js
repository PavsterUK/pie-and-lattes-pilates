import React, {useState} from "react";

import { bubble as Menu } from "react-burger-menu";

const Sidebar = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);

  React.useEffect(() => {
    openTab({ home: true });
  }, []);


  const handleStateChange = (state) => {
    setMenuOpen(state.isOpen);
  }

  const openTab = (tab) => {
    setMenuOpen(false);
    props.openTab(tab);
  }

  


  return (
    <Menu
      onStateChange={(state) => handleStateChange(state)}
      isOpen={menuOpen}
      right 
      width={"80vw"}>
      <ul>
        <li>
          <button onClick={() => openTab({home: true})}>Home</button>
        </li>
        <li>
          <button onClick={() => openTab({ whatsReformer: true })}>
            What's Reformer?
          </button>
        </li>
        <li>
          <button
            onClick={() => openTab({ pricingBookings: true })}
          >
            Pricing &amp; Bookings
          </button>
        </li>
        <li>
          <button onClick={() => openTab({ about: true })}> About</button>
        </li>
        <li>
          <button onClick={() => openTab({ contact: true })}>
            Contact
          </button>
        </li>
      </ul>
    </Menu>
  );
};

export default Sidebar;
