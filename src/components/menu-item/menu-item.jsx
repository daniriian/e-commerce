/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import './menu-item.scss';
import { withRouter } from 'react-router-dom';

const MenuItem = props => {
  const { title, imageUrl, size, history, linkUrl, match } = props;
  return (
    <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
      <div className="background-image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
