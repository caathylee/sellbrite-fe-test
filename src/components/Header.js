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
				    <div className="collapse navbar-collapse" id="myNavbar">
				      <ul className="nav navbar-nav">
				      	<li><a href="#">Shop</a></li>
				      	<li><a href="#">Your Cart</a><span className="cart-item-count"></span></li>
				      </ul>
				    </div>
				  </div>
				</nav>
		    </header>
    	)
	}
}

export default Header;