import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faTh, faWrench, faClock, faGift, faGem } from '@fortawesome/free-solid-svg-icons';
function HeaderItem(props) {
  
  return (
    <li className="nav-item">
      <FontAwesomeIcon icon={props.icon} className="icon" />
      <a href={`#${props.id}`}>{props.text}</a>
    </li>
  );
}

export default HeaderItem;
