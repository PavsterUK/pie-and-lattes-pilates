import React, {useState} from 'react'

import { bubble as Menu } from 'react-burger-menu';

const Sidebar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const setIsHomeHandler = () => {
    props.setIsHome();
    setIsOpen(false);
  }

  return (
    <Menu isOpen={ isOpen } right width={ '80%' } left {...props}>
  
        <ul >
        <li>
          <button onClick={setIsHomeHandler}>Home</button>
        </li>
        <li>
          <button onClick={props.setIsWhatsReformer}>What's Reformer?</button>
        </li>
        <li>
          <button onClick={props.setIsPricing}>Prices &amp; Bookings</button>
        </li>
        <li>
          <button onClick={props.setIsAboutMe}> About Me</button>
        </li>
        <li>
          <button onClick={props.setIsContacts}>Contact</button>
        </li>
      </ul>
    </Menu>
  )
}

export default Sidebar