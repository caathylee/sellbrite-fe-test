import React, { Component } from 'react';

class Header extends Component {
	constructor(props) {
		super(props) 
	}

	render() {
		return (
		    <header>
		    	<nav>
				  <div className="container-fluid">
				    <div className="navbar-header">
				      <a className="navbar-brand" href="/"><img className="logo" src={require("../images/logo.png")} /><span>Cart.ly</span></a>
				    </div>
				    <a href="#" className="shop-link">Shop</a>
			      	<a href="#" className="cart-link">Your Cart <span className="item-count">{this.props.shoppingCartData.cartItems.size}</span></a>
				  </div>
				</nav>
		    </header>
    	)
	}
}

export default Header;