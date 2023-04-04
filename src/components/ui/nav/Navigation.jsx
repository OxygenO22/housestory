import React from 'react';
import './Navigation.scss';
import { navItems } from './NavigationData';

export const Navigation = () => {
  return (
    <div className='navigation__wrapper'>
      {
        navItems.map(item => 
          <div className='navigation__item' key={item.id}>
            <p className='navigation__item-text'>{item.name}</p> 
            <div className='navigation__item-icon'>
              <img src={item.src} alt={item.alt} />
            </div>
          </div>
        )
      }
    </div>
  )
}
