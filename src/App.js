import React, { Component } from 'react';
import Header from './components/Header';
import ProductsPage from './components/ProductsPage';
import ShoppingCart from './components/ShoppingCart';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.shoppingCartData = {};
    this.handleAddItemToCart = this.handleAddItemToCart.bind(this);
  }

  handleAddItemToCart(product) {
    this.shoppingCartData.cartItems.add(product);
    this.setState({
      shoppingCartData: this.shoppingCartData
    });
    console.log(this.shoppingCartData.cartItems);
  }

  render() {
    return (
      <div className="App">
        <ProductsPage shoppingCartData = {this.shoppingCartData} handleAddItemToCart = {this.handleAddItemToCart}/>
        <ShoppingCart shoppingCartData = {this.shoppingCartData}/>
        <Header shoppingCartData = {this.shoppingCartData}/>
      </div>
    );
  }
}

export default App;
