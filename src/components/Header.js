import React, { Component } from 'react';
import ShoppingCart from './ShoppingCart';

class Header extends Component {
	constructor(props) {
		super(props) 
		this.state = {
			shouldHide: true
		};
		this.showShoppingCart = this.showShoppingCart.bind(this);
		this.hideShoppingCart = this.hideShoppingCart.bind(this);

	}

	showShoppingCart() {
		this.setState({
			shouldHide: false
		})
	}

	hideShoppingCart() {
		this.setState({
			shouldHide: true
		})
	}

	render() {
		return (
		    <header>
		    	<nav>
				  <div className="container-fluid">
				    <div className="navbar-header">
				      <a className="navbar-brand" href="/"><img className="logo" src={require("../images/logo.png")} alt="Cart.ly logo" /><span>Cart.ly</span></a>
				    </div>
				    <a className={ "shop-link " + (this.state.shouldHide ? 'here' : '')}>Shop</a>
			      	<a className={ "cart-link " + (!this.state.shouldHide ? 'here' : '')} onClick = {this.showShoppingCart}>Your Cart <span className="item-count">{this.props.shoppingCartData.cartItems.size}</span></a>
				  </div>
				</nav>
				{!this.state.shouldHide ? <ShoppingCart shoppingCartData={this.props.shoppingCartData} onBack={this.hideShoppingCart}/> : null}
		    </header>
    	)
	}
}

export default Header;