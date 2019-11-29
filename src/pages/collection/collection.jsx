/* eslint-disable react/prop-types */
import React from 'react';

import CollectionItem from '../../components/collection-item/collection-item';

import './collection.scss';

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h1 className="title">{title}</h1>
      <div className="items">
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CollectionPage;
