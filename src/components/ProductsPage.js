import React, { Component } from 'react';
import Header from './Header';
var data = require("../product-payload.json");

class ProductsPage extends Component {
	constructor(props) {
		super(props)
		console.log(this.props);
		this.props.shoppingCartData.data = data.products;
		this.props.shoppingCartData.cartItems = new Set();
		this.props.shoppingCartData.cartEmpty = true;

		/* = {
			data: data.products,
			cartItems: new Set()
		};*/
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(id) {
		var product = this.props.shoppingCartData.data[id];
		this.props.handleAddItemToCart(product);
	}

	render() {
		return (
    	<div className="container-fluid" id="products-page">
          <div className="container-fluid">
          	<h2>Shop our featured collection</h2>
          	{this.props.shoppingCartData.data.map((item, index) => 
          		<div className="one-item" id={index}>
          			<img className="product-image" src={require("../images/" + item.filename)} />
          			<p className="name">{item.name}</p>
          			<p className="price">${(item.price/100).toFixed(2)}</p>
          			<button onClick={this.handleClick.bind(this, index)}>Add to cart</button>
          		</div>
      		)}
          </div>
      </div>
    	)
	}
}

export default ProductsPage;