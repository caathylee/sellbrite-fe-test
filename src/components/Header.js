import React, { Component } from 'react';

class Header extends Component {
	render() {
		return (
		    <header>
		    	<nav>
				  <div className="container-fluid">
				    <div className="navbar-header">
				      <a className="navbar-brand" href="/"><img className="logo" src={require("../images/logo.png")} /><span>Cart.ly</span></a>
				    </div>
				    <a href="#">Shop</a>
			      	<a href="#" className="cart">Your Cart <span className="item-count"></span></a>
				  </div>
				</nav>
		    </header>
    	)
	}
}

export default Header;