import React from 'react';
import './ButtonVideoReview.scss';
import playButton from '../../../icons/play-button.svg'
import { Link } from 'react-router-dom';

export const ButtonVideoReview = () => {
  return (
    <div className='buttonvr__wrapper'>
      <Link className='buttonvr__link' to='*'>
        <div className='buttonvr__icon-wrapper'>
          <img src={playButton} alt='playButton' />
        </div>
        <div className='buttonvr__text-wrapper'>
          <p className='buttonvr__text'>
            Видеоотзыв
          </p>
        </div>
      </Link>
    </div>
  )
}
