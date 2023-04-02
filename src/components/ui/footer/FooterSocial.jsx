import React from 'react';
import './FooterSocial.scss';
import vk from '../../../icons/vk.svg';
import instagram from '../../../icons/instagram.svg';
import facebook from '../../../icons/facebooksvg.svg';
import youtube from '../../../icons/yotube.svg';
import { Link } from 'react-router-dom';

export const FooterSocial = () => {
  const icons = [
    {id: 1, name: 'vk', src: `${vk}`, path: '*'},
    {id: 2, name: 'instagram', src: `${instagram}`, path: '*'},
    {id: 3, name: 'facebook', src: `${facebook}`, path: '*'},
    {id: 4, name: 'youtube', src: `${youtube}`, path: '*'},
  ]
  return (
    <div className='footer__social'>
      {icons.map(icon => 
      <div className='footer__social-item'  key={icon.id}>
        <Link className='footer__social-inner' to={icon.path}>
          <img className='footer__social-icon-img' src={icon.src} alt={icon.name}></img>
        </Link>
      </div>
      )}
    </div>
  )
}
