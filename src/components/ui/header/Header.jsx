import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import logo1 from '../../../icons/logo1.svg';
import box from '../../../icons/box.svg';
import { Button } from '../buttons/Button';
import { ButtonsSocial } from '../buttons/ButtonsSocial';

export const Header = () => {




  return (
    <div className='header__wrapper'>
      <div className="header__item header__item-logo">
        <Link to='/'>
          <div className="header__logo">
            <img className='header__img' src={logo1} alt="logo 1"></img>
          </div>
        </Link>
      </div>
      <div className="header__item">
        <div className="header__item-inner">
          <p>Пн-Сб: c 10:00 до 20:00</p>
          <p>Выходной: воскресенье</p>
        </div>
      </div>
      <div className="header__item">
        <Link style={{textDecoration: 'none'}} to='*'>
          <div className="header__item-inner-layout">
            <div className="header__box">
              <img className='header__box-img' src={box} alt="box"></img>
            </div>
            <div className="header__box-text-wrapper">
              <p className="header__box-text">
              Заказать 3D-макет дома
              </p>
            </div>
          </div>
        </Link>
      </div>
      <div className="header__item">
        Header item
        <div className='header__social'>
          <ButtonsSocial place={'header'}/>
        </div>
      </div>
      <div className="header__item header__item-button">
        <Button classname={"button__header"} name={"Заказать звонок"}/>
      </div>
      
    </div>
  )
}
