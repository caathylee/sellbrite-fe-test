import React, { Component } from 'react';
import Header from './components/Header';
import ProductsPage from './components/ProductsPage';
import ShoppingCart from './components/ShoppingCart';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <ProductsPage/>
        <ShoppingCart/>
      </div>
    );
  }
}

export default App;
