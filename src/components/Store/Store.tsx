import React, { Component } from 'react';

import IconSwitch from '../IconSwitch';
import ListView from '../ListView/ListView';
import CardsView from '../CardsView/CardsView';
import { PRODUCTS } from '../products';

import './Store.css';

export default class Store extends Component {
  state = { view: 'view_module' };

  handleClick = () => {
    this.setState(() => {
      return this.state.view === 'view_module'
      ? { view: 'view_list' }
      : { view: 'view_module' }
    });
  };

  render() {
    return (
      <div className="Store">
        <IconSwitch 
          icon={this.state.view}
          onSwitch={this.handleClick}
        />
        {this.state.view === 'view_list'
          ? <CardsView products={PRODUCTS} />
          : <ListView products={PRODUCTS} />
        }
      </div>
    );
  }
}
