import React, { useState } from 'react';
import './Navigation.scss';
import { navItems } from './NavigationData';
import { NavSubmenu } from './NavSubmenu';

export const Navigation = () => {
  const [isShow, setIsShow] = useState(false);
  const [submenuId, setSubmenuId] = useState(0);

  return (
    <div className='navigation__wrapper'>
      {
        navItems.map(item => 
          <div 
            className='navigation__item' 
            key={item.id} 
          >
            <div className='navigation__button'>
              <p className='navigation__item-text' onClick={() =>
              { 
              setIsShow(!isShow);
              setSubmenuId(item.id);
              }
            }>{item.name}</p> 
              <div className='navigation__item-icon' onClick={() =>
              { 
              setIsShow(!isShow);
              setSubmenuId(item.id);
              }
            }>
                <img src={item.src} alt={item.alt} />
              </div>
            </div>
            <NavSubmenu isShow={isShow} submenuId={submenuId} id={item.id} item={item} />
          </div>
        )
      }
    </div>
  )
}
