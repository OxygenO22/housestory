import React from 'react';
import './Body.scss';
import { Header } from '../ui/header/Header';
import { Navigation } from '../ui/nav/Navigation';
import { Head } from '../ui/head/Head';
import { Content } from '../ui/content/Content';
import { SubFooter } from '../ui/subfooter/SubFooter';
import { Footer } from '../ui/footer/Footer';
import { BodyPictures } from './BodyPictures';


export const Body = () => {
  return (
    <div className='body__main'>
      <div className="body__inner">
        <BodyPictures />
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
