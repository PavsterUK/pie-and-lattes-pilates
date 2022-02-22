import React from 'react'

import { bubble as Menu } from 'react-burger-menu';

const Sidebar = (props) => {
  return (
    <Menu right width={ '80%' } left {...props}>
        <ul >
        <li>
          <button onClick={props.setIsHome}>Home</button>
        </li>
        <li>
          <button onClick={props.setIsWhatsPilates}>What's pilates?</button>
        </li>
        <li>
          <button onClick={props.setIsPricing}>Pricing</button>
        </li>
        <li>
          <button onClick={props.setIsAboutMe}> About Me</button>
        </li>
        <li>
          <button onClick={props.setIsContacts}>Contacts</button>
        </li>
      </ul>
    </Menu>
  )
}

export default Sidebar