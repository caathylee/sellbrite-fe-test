import React, { Component } from 'react';
import Header from './Header';
var data = require("../product-payload.json");

class ProductsPage extends Component {
	constructor(props) {
		super(props) 
		this.state = {
			data: data.products,
			cartItems: new Set()
		};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(id) {
		console.log("this is id " + id);
		var product = this.state.data[id];
		console.log("this is cart items " + this.state.cartItems);
		console.log ("this is product " + product);
		if(!this.state.cartItems.has(product)) {
			this.state.cartItems.add(product);
		}
		console.log(this.state.cartItems.entries());
	}

	render() {
		return (
    	<div className="container-fluid" id="products-page">
          <div className="container-fluid">
          	<h2>Shop our featured collection</h2>
          	{this.state.data.map((item, index) => 
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