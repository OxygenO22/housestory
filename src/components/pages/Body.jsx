import React from 'react';
import './Body.scss';
import { Header } from '../ui/header/Header';
import { Navigation } from '../ui/nav/Navigation';
import { Head } from '../ui/head/Head';
import { Content } from '../ui/content/Content';
import { SubFooter } from '../ui/subfooter/SubFooter';
import { Footer } from '../ui/footer/Footer';
import house1 from '../../pictures/house1.svg';
import tree from '../../pictures/tree1.svg';
import cloud1 from '../../pictures/cloud1.svg';
import cloud2 from '../../pictures/cloud2.svg';
import cloud4 from '../../pictures/cloud4.svg';
import sawdust1 from '../../pictures/sawdust1.svg';
import leaf from '../../pictures/leaf.svg';
import house2 from '../../pictures/house2.svg';
import cloud3 from '../../pictures/cloud3.svg';
import sawdust2 from '../../pictures/sawdust2.svg';
import tree2 from '../../pictures/tree2.svg';

export const Body = () => {
  return (
    <div className='body__main'>
      <div className="body__inner">
        <div className="body__picture-house">
        <img src={house1} alt="house_1" className="body__img-house" />
        </div>
        <div className="body__picture-tree">
          <img src={tree} alt="tree" className="body__img-tree" />
        </div>
        <div className="body__picture-cloud1">
          <img src={cloud1} alt="cloud1" className="body__img-cloud1" />
        </div>
        <div className="body__picture-cloud2">
          <img src={cloud2} alt="cloud2" className="body__img-cloud2" />
        </div>
        <div className="body__picture-cloud4">
          <img src={cloud4} alt="cloud4" className="body__img-cloud4" />
        </div>
        <div className="body__picture-sawdust1">
          <img src={sawdust1} alt="sawdust1" className="body__img-sawdust1" />
        </div>
        <div className="body__picture-leaf">
          <img src={leaf} alt="leaf" className="body__img-leaf" />
        </div>
        <div className="body__picture-house2">
          <img src={house2} alt="house2" className="body__img-house2" />
        </div>
        <div className="body__picture-cloud3">
          <img src={cloud3} alt="cloud3" className="body__img-cloud3" />
        </div>
        <div className="body__picture-sawdust2">
          <img src={sawdust2} alt="sawdust2" className="body__img-sawdust2" />
        </div>
        <div className="body__picture-tree2">
          <img src={tree2} alt="tree2" className="body__img-tree2" />
        </div>
        <Header />
        <Navigation />
        <Head />
        <Content />
        <SubFooter />
      </div>
        <Footer />
    </div>
  )
}
