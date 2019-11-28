/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React, { useContext } from 'react';

import CollectionPreview from '../collectionPreview/collectionPreview';

import CollectionsContext from '../../contexts/collections/collections.context';

import './collectionsOverview.scss';

const CollectionsOverview = () => {
  const collectionsMap = useContext(CollectionsContext);
  const collections = Object.keys(collectionsMap).map(key => collectionsMap[key]);

  return (
    <div className="collections-overview">
      {collections.map(({ id, ...otherProps }) => (
        <CollectionPreview key={id} {...otherProps} />
      ))}
    </div>
  );
};

export default CollectionsOverview;
