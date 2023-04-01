import React from 'react';
import './Head.scss';
import { ToolsButton } from '../toolsButton/ToolsButton';
import { FormConsultation } from '../forms/formConsultation/FormConsultation';
import house1 from '../../../pictures/house1.svg';
import tree from '../../../pictures/tree1.svg';
import cloud1 from '../../../pictures/cloud1.svg';
import cloud2 from '../../../pictures/cloud2.svg';
import cloud4 from '../../../pictures/cloud4.svg';

export const Head = () => {
  return (
    <div className='head__wrapper'>
      <div className="head__picture-house">
        <img src={house1} alt="house_1" className="head__img-house" />
      </div>
      <div className="head__picture-tree">
        <img src={tree} alt="tree" className="head__img-tree" />
      </div>
      <div className="head__picture-cloud1">
        <img src={cloud1} alt="cloud1" className="head__img-cloud1" />
      </div>
      <div className="head__picture-cloud2">
        <img src={cloud2} alt="cloud2" className="head__img-cloud2" />
      </div>
      <div className="head__picture-cloud4">
        <img src={cloud4} alt="cloud4" className="head__img-cloud4" />
      </div>
      Head
      <FormConsultation />
      <ToolsButton />
    </div>
  )
}
