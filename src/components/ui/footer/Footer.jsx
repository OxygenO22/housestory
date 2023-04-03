import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';
import logo2 from '../../../icons/logo2.svg';
import logo3 from '../../../icons/logo3.svg';
import { Button } from '../buttons/Button';
import { FooterLinks } from './FooterLinks';
import {footerLinks1, footerLinks2} from './FooterData';
import { ButtonsSocial } from '../buttons/ButtonsSocial';

export const Footer = () => {

  return (
    <div className='footer__wrapper'>
      <div className="footer__item">
        <div className="footer__item-innerlogo">
        <Link to='/'>
          <div className="footer__logo2">
            <img className='footer__img' src={logo2} alt="logo2"></img>
          </div>
        </Link>
        <Button classname={"button__footer"} name={"Заказать звонок"}/>
        </div>
      </div>
      <div className="footer__item">
        <div className="footer__inner-links">
          {footerLinks1.map(data => 
              <FooterLinks key={data.id} name={data.name} path={data.path} />
            )
          }
        </div>
      </div>
      <div className="footer__item">
        <div className="footer__inner-links">
          {footerLinks2.map(data => 
              <FooterLinks key={data.id} name={data.name} path={data.path} />
            )
          }
        </div>
      </div>
      <div className="footer__item">
        <div className="footer__item-innerlogo">
          <p>Делимся крутыми проектами в соц.сетях. Подписывайтесь!</p>
          <div className='footer__social'>
            <ButtonsSocial place={'footer'}/>
          </div>
          <p>Разработка и продвижение сайта:</p>
          <Link to='/'>
            <div className="footer__logo3">
              <img className='footer__img' src={logo3} alt="logo3"></img>
            </div>
          </Link>
        </div>
      </div>
      
    </div>
  )
}
