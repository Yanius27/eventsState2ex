import React, { Component } from "react";

import { IProduct } from "../products";
import ShopCard from "../ShopCard/ShopCard";

import './CardsView.css';

interface CardsViewProps {
  products: IProduct[];
}

export default class CardsView extends Component<CardsViewProps> {
  render() {
    const {products} = this.props;

    return (
      <div className="CardsView">
        {products.map((p, index) => (
          <ShopCard 
            key={index}
            name={p.name}
            price={p.price}
            color={p.color}
            img={p.img}
          />
        ))}
      </div>
    );
  }
}
