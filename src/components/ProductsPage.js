import React, { Component } from 'react';
import Header from './Header';
var data = require("../product-payload.json");
var cartItems = [];

class ProductsPage extends Component {
	constructor(props) {
		super(props) 
		this.state = {
			data: data.products,
			itemCount: 0,
			cartItems: []
		};
		this.handleClick = this.handleClick.bind(this);
	}

	getInitialState = function() {
		return {

		}
	}

	handleClick() {
		var cartItems = [];
		/*{ Grab parent with class name one-item and use the index to add the obj from data.products to add into cartItems }*/
		console.log("You clicked it the current count is " + this.state.itemCount);
		this.setState({
			itemCount: this.state.itemCount + 1
		});
	}

	render() {
		console.log("This is cartItems " + cartItems)
		return (
    	<div className="container-fluid" id="products-page">
          <div className="container-fluid">
          	<h2>Shop our featured collection</h2>
          	{this.state.data.map((item, index) => 
          		<div className={"one-item index-" + index} id={index}>
          			<img className="product-image" src={require("../images/" + item.filename)} />
          			<p className="name">{item.name}</p>
          			<p className="price">${(item.price/100).toFixed(2)}</p>
          			<button onClick={this.handleClick}>Add to cart</button>
          		</div>
      		)}
          </div>
      </div>
    	)
	}
}

export default ProductsPage;