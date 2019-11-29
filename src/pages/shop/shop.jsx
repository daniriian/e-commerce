/* eslint-disable import/no-named-default */
/* eslint-disable react/prop-types */
import React from 'react';
import { Route } from 'react-router-dom';

import CollectionsOverviewContainer from '../../components/collections-overview/collection-overview.container';
import { default as CollectionPage } from '../collection/collection.container';

const ShopPage = ({ match }) => {
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};

export default ShopPage;
