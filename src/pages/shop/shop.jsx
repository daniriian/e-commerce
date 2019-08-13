import React from 'react';
import SHOP_DATA from './shop.data.js';

import CollectionPreview from '../../components/collectionPreview/collectionPreview';

class ShopPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { collections: SHOP_DATA };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className='shop-page'>
        {collections.map(c => (
          <CollectionPreview key={c.id} title={c.title} items={c.items} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
