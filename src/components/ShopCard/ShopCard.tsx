import React, {Component} from 'react';

import {IProduct} from '../products';

import './ShopCard.css';


export default class ShopCard extends Component<IProduct> {
  render() {
    const {name, price, color, img} = this.props;

    return (
      <div
        className="ShopCard"
      >
        <img
          className='ShopCard__image'
          src={img}
        />
        <div className='ShopCard__header'>
          <h2 className='ShopCard__title'>{name.toUpperCase()}</h2>
          <span className='ShopCard__color'>{color}</span>
        </div>
        <div className="ShopCard__footer">
          <span className='ShopCard__price'>{`$${price}`}</span>
          <button className="ShopCard__add-btn">ADD TO CART</button>
        </div>
      </div>
    );
  }
}
