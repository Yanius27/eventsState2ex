import React, { Component } from "react";

import { IProduct } from "../products";
import ShopCard from "../ShopCard/ShopCard";

import './ListView.css';

interface ListViewProps {
  products: IProduct[];
}

export default class ListView extends Component<ListViewProps> {
  render() {
    const {products} = this.props;

    return (
      <div className="ListView">
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
