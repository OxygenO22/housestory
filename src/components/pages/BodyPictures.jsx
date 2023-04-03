import React from 'react';
import './BodyPictures.scss';
import { picturesList } from './BodyPicturesData';

export const BodyPictures = () => {
  return (
    <>
      {
        picturesList.map(data => 
          <div className={`body__picture-${data.wrapperClass}`} key={data.id}>
            <img src={data.src} alt={data.alt} />
          </div>
        )
      }
    </>
  )
}
