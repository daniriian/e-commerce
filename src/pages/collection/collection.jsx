/* eslint-disable react/prop-types */
import React, { useContext } from 'react';

import CollectionItem from '../../components/collection-item/collection-item';

import CollectionsContext from '../../contexts/collections/collections.context';

import './collection.scss';

const CollectionPage = ({ match }) => {
  const collections = useContext(CollectionsContext);
  const collection = collections[match.params.collectionId];
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
