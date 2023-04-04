import React from 'react';
import './NavSubmenu.scss';
import { Link } from 'react-router-dom';

export const NavSubmenu = ({isShow, submenuId, id, item}) => {

  return (
    <div className={`navigation__submenu ${isShow && submenuId === id && item.submenu?.length !== 0 ? 'active' : ''}`}>
      {  
        item.submenu?.map(parf => 
          <div className='navigation__submenu-item-text' key={parf.id}>
            <Link className='navigation__submenu-link' to='*'>
              <p className='navigation__submenu-text'>
                {parf.paragraph}
              </p>
            </Link>
          </div>
        )
      }
    </div>
  )
}
