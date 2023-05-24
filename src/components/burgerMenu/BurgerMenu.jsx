import React from 'react';
import './BurgerMenu.scss';
import { Link } from 'react-router-dom';
import { burgerMenuData } from './BurgerMenuData';

export const BurgerMenu = () => {
  return (
    <div className='burger__wrapper'>
      {  
        burgerMenuData.map(data => 
          <div className='burger__item-text' key={data.id}>
            <Link className='burger__link' to='*'>
              <p className='burger__text'>
                {data.text}
              </p>
            </Link>
          </div>
        )
      }
    </div>
  )
}
