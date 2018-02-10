import React, { Component } from 'react';

class ShoppingCart extends Component {
	render() {
		return (
    	<div className="container-fluid" id="ShoppingCart">
          <div className="container-fluid">
            <div className="cart-items">
            	<h1>This is ShoppingCart Component</h1>
            	<h2>Your Cart</h2>
            	<ul>
            		<li><a href="#">x</a></li>
            		<li><a href="#">x</a></li>
            	</ul>
            	<p>Total <span>$</span></p>
            	<button>Back</button>
            </div>
          </div>
      </div>
    	)
	}
}

export default ShoppingCart;