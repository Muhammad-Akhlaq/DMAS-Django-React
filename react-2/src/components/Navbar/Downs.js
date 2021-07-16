import React, { useState, useEffect } from 'react';
import {Items} from './Items';
import { Link } from 'react-router-dom';
import './Downs.css';

function Downs() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? 'Dropdown-menu clicked' : 'Dropdown-menu'}
      >
        {Items.map((items, index) => {
          return (
            <li key={index}>
              <Link
                className={items.cName}
                to={items.path}
                onClick={() => setClick(false)}
              >
                {items.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Downs;