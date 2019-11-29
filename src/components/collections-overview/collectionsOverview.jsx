import React from 'react';

import CollectionPreview from '../collectionPreview/collectionPreview';

import './collectionsOverview.scss';

const CollectionsOverview = ({ collections }) => (
  <div className="collections-overview">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);

export default CollectionsOverview;
