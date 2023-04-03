import React from 'react';
import './ContentItem.scss';
import { articles } from './ContentItemData';

export const ContentItem = () => {
  return (
    <>
      {
        articles.map(data => 
          <div className='content__item' key={data.id}>
            {
              data.title !== '' 
              &&  
              <h2 className='content__item-title' title={data.title}>{data.title}</h2>}
            {
              data.subtitle !== '' 
              && 
              <h3 className='content__item-subtitle'>{data.subtitle}</h3>}
            {
              data.text !== '' 
              && 
              <div className='content__item-text-wrapper'>
                {
                  data.text.map(text => 
                    <p className='content__item-text' key={text.id}>{text.paragraph}</p>
                  )
                }
              </div>
            }
            {
              data.pictures !== ''
              &&
              <div className='content__pictures'>
                {
                  data.pictures.map(img => 
                    <div className='content__pictures-item' key={img.id}>
                      <img src={img.src} alt={img.alt} className='content__pictures-img' />
                    </div>
                  )
                }
              </div>
            }
          </div> 
        )
      }
    </>
  )
}
