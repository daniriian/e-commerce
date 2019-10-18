/* eslint-disable react/prop-types */
import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from '../../components/collectionPreview/collectionPreview';
import { selectCollections } from '../../redux/shop/shop.selectors';

const ShopPage = ({ collections }) => {
  return (
    <div className="shop-page">
      {collections.map(c => (
        <CollectionPreview key={c.id} title={c.title} items={c.items} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollections
});

export default connect(mapStateToProps)(ShopPage);
