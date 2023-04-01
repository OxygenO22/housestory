import React from 'react';
import './Head.scss';
import { ToolsButton } from '../toolsButton/ToolsButton';
import { FormConsultation } from '../forms/formConsultation/FormConsultation';


export const Head = () => {
  return (
    <div className='head__wrapper'>
      
      Head
      <FormConsultation />
      <ToolsButton />
    </div>
  )
}
