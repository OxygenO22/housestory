import React from 'react';
import './ButtonsTool.scss';
import { Link } from 'react-router-dom';
import { buttonsToolData } from './ButtonsToolData';

export const ButtonsTool = () => {
  return (
    <div className='buttons__tools'>
      {
        buttonsToolData.map(icon => 
        <div className='buttons__tools-item'  key={icon.id}>
          <Link className='buttons__tools-inner' to={icon.path}>
            <img src={icon.src} alt={icon.name}></img>
          </Link>
        </div>
        )
      }
    </div>
  )
}
