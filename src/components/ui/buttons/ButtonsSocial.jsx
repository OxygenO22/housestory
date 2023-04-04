import React from 'react';
import './ButtonsSocial.scss';
import { Link } from 'react-router-dom';
import { iconsFooter, iconsHeader } from './ButtonsSocialData';

export const ButtonsSocial = ({place}) => {
  const renderOption = () => place === 'footer' ? iconsFooter : iconsHeader;
  return (
    <div className='social__wrapper'>
      {
        renderOption().map(icon => 
        <div className={`${icon.classNameOption}__social-item`}  key={icon.id}>
          <Link className={`${icon.classNameOption}__social-inner`} to={icon.path}>
            <img src={icon.src} alt={icon.name}></img>
          </Link>
        </div>
        )
      }
    </div>
  )
}
