import React from 'react';
import './FooterLinks.scss';
import { Link } from 'react-router-dom';

export const FooterLinks = ({name, path}) => {
  return (
    <Link className="footer__inner-link" to={path}>
        <p className="footer__inner-link-text">
          {name}
        </p>
    </Link>
  )
}
