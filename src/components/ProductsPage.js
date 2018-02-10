import React, { Component } from 'react';
var data = require("../product-payload.json");

class ProductsPage extends Component {
	constructor(props) {
		super(props) 
		this.state = {
			data: data.products
		}
	}
	render() {
		return (
    	<div className="container-fluid" id="products-page">
          <div className="container-fluid">
          	<h2>Shop our featured collection</h2>
          	{this.state.data.map(item => 
          		<div className="one-item">
          			<img className="product-image" src={require("../images/" + item.filename)} />
          			<p className="name">{item.name}</p>
          			<p className="price">${item.price * .01}</p>
          			<button>Add to cart</button>
          		</div>
      		)}
          </div>
      </div>
    	)
	}
}

export default ProductsPage;