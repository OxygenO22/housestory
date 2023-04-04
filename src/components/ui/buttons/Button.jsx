import React from 'react';
import './Button.scss';

export const Button = ({classname, name}) => {
  return (
    <button className={classname}>
      {name}
    </button>
  )
}
