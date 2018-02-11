import React, { Component } from 'react';

class ShoppingCart extends Component {
	constructor(props) {
		super(props) 
		this.state = {
			total: 0,
			shouldHide: true
		};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		console.log(this.props.productsData);
	}
	componentWillReceiveProps(nextProps)
	{
		 var total = 0;
		 nextProps.shoppingCartData.cartItems.forEach((value1, value2, set) =>
		 {
		 	total += value1.price;
		 })
		 this.setState({
		 	total: (total/100).toFixed(2)
		});
	}

	render() {
		var data = Array.from(this.props.shoppingCartData.cartItems);
		console.log(this.state.shouldHide);
		return (
    	<div className = { "container-fluid " + (this.state.shouldHide?'hidden':'') } id="shopping-cart">
          <div className="container-fluid">
            <div className="cart-items">
            	<h2>Your Cart</h2>
            	<div className="items">
            			{
            				data.map((item, index) =>
            					<li>
            						<img className="cropped-product-image" src={require("../images/" + item.filename)} />
            						<p className="name">{item.name}</p>
            						<p className="price">${(item.price/100).toFixed(2)} <span className="btn-close"></span></p>	
            					</li>
            				)
            			}
            		<p>Nothing in your cart, start shopping.</p>
            	</div>
            	<p className="total-price">Total <span>${this.state.total}</span></p>
            	<button onClick={this.handleClick}>Back</button>
            </div>
          </div>
      </div>
    	)
	}
}

export default ShoppingCart;