import React from 'react';
import './Head.scss';
import { FormConsultation } from '../forms/formConsultation/FormConsultation';
import { ButtonVideoReview } from '../buttons/ButtonVideoReview';


export const Head = () => {
  return (
    <div className='head__wrapper'>
      <div className='head__item head__item-form'>
        <FormConsultation />
      </div>
      <div className='head__item head__item-buttonvr'>
        <ButtonVideoReview />
      </div>
    </div>
  )
}
