/* eslint-disable react/prop-types */
import React, { useContext } from 'react';

import { CartContext } from '../../providers/cart/cart.provider';

import {
  CollectionItemContainer,
  BackgroundImage,
  CollectionFooter,
  NameContainer,
  PriceContainer,
  AddButton
} from './collection-item.styles';

const CollectionItem = ({ item }) => {
  const { name, price, imageUrl } = item;
  const { addItem } = useContext(CartContext);
  return (
    <CollectionItemContainer>
      <BackgroundImage className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <CollectionFooter>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>{price}</PriceContainer>
      </CollectionFooter>
      <AddButton onClick={() => addItem(item)} inverted>
        Add to cart
      </AddButton>
    </CollectionItemContainer>
  );
};

export default CollectionItem;
