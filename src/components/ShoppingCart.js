import React, { Component } from 'react';

class ShoppingCart extends Component {
	constructor(props) {
		super(props) 
		this.state = {
			total: 0,
			calculateTotalPrice: function(){
				var currentTotal = 0;
				
			}
		};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		console.log(this.props.productsData);
	}

	render() {
	var data = Array.from(this.props.shoppingCartData.cartItems);
		return (
    	<div className="container-fluid" id="shopping-cart">
          <div className="container-fluid">
            <div className="cart-items">
            	<h2>Your Cart</h2>
            	<div className="items">
            			{
            				data.map((item, index) =>
            					<li>
            						<img className="product-image" src={require("../images/" + item.filename)} />
            						<p className="name">{item.name}</p>
            						<p className="price">${(item.price/100).toFixed(2)}</p>	
            					</li>
            				)
            			}
            		<p>Nothing in your cart, start shopping.</p>
            	</div>
            	<p>Total <span>${this.state.total}</span></p>
            	<button onClick={this.handleClick}>Back</button>
            </div>
          </div>
      </div>
    	)
	}
}

export default ShoppingCart;