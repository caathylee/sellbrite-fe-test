import React, { Component } from 'react';

class ShoppingCart extends Component {
	constructor(props) {
		super(props) 
		this.state = {
			total: 0
		};
	}

	calculateTotal() {
		 var total = 0;
		 this.props.shoppingCartData.cartItems.forEach((value1, value2, set) =>
		 {
		 	total += value1.price;
		 })
		 this.total = (total/100).toFixed(2);
	}

	removeItem(product) {
		this.props.shoppingCartData.cartItems.delete(product);
		this.setState({});
	}

	render() {
		var data = Array.from(this.props.shoppingCartData.cartItems);
		this.calculateTotal();
		return (
    	<div className = "container-fluid" id="shopping-cart">
          <div className="container-fluid">
            <div className="cart-items">
            	<h2>Your Cart</h2>
            	<div className="items">
            			{
            				data.map((item, index) =>
            					<li key={index}>
            						<img className="cropped-product-image" src={require("../images/" + item.filename)} alt="" />
            						<p className="name">{item.name}</p>
            						<p className="price">${(item.price/100).toFixed(2)} <span className="btn-close" onClick={this.removeItem.bind(this,item)}></span></p>	
            					</li>
            				)
            			}
            		{data.length <= 0 ? <p>Nothing in your cart, start shopping.</p> : null}
            	</div>
            	<p className="total-price">Total <span onClick={this.handleClick}>${this.total}</span></p>
            	<button onClick={this.props.onBack}>Back</button>
            </div>
          </div>
      </div>
    	)
	}
}

export default ShoppingCart;