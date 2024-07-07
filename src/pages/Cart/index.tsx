import "./index.scss"

const Cart = () => {
	return <div className="page-cart">
		<div className="cart-header">
			<h1 className="cart-heading">My Cart</h1>
			<p className="cart-count">Total Items (4)</p>
		</div>


		<ul className="cart-list">
			<li className="cart-li">
				<div className="citem">
					<img src="/screen.jpg" alt="" className="citem-img" />
					<div className="citem-content">
						<div className="citem-header">
							<h2 className="citem-name">Dell UltraSharp 38" 1600p Curved Monitor</h2>
							<button className="citem-remove" title="Remove Item">Remove</button>
						</div>

						<div className="citem-id">#DEU3824DW • MFR #U3824DW</div>
						<div className="pcount">
							<button className="pcount-remove" title="Remove Item">-</button>
							<span className="pcount-value">1</span>
							<button className="pcount-add" title="Add Item">+</button>
						</div>
						<strong className="citem-price">$1,041.73</strong>
					</div>
				</div>
			</li>


			<li className="cart-li">
				<div className="citem">
					<img src="/screen.jpg" alt="" className="citem-img" />
					<div className="citem-content">
						<div className="citem-header">
							<h2 className="citem-name">Dell UltraSharp 38" 1600p Curved Monitor</h2>
							<button className="citem-remove" title="Remove Item">Remove</button>
						</div>

						<div className="citem-id">#DEU3824DW • MFR #U3824DW</div>
						<div className="pcount">
							<button className="pcount-remove" title="Remove Item">-</button>
							<span className="pcount-value">1</span>
							<button className="pcount-add" title="Add Item">+</button>
						</div>
						<strong className="citem-price">$1,041.73</strong>
					</div>
				</div>
			</li>


			<li className="cart-li">
				<div className="citem">
					<img src="/screen.jpg" alt="" className="citem-img" />
					<div className="citem-content">
						<div className="citem-header">
							<h2 className="citem-name">Dell UltraSharp 38" 1600p Curved Monitor</h2>
							<button className="citem-remove" title="Remove Item">Remove</button>
						</div>

						<div className="citem-id">#DEU3824DW • MFR #U3824DW</div>
						<div className="pcount">
							<button className="pcount-remove" title="Remove Item">-</button>
							<span className="pcount-value">1</span>
							<button className="pcount-add" title="Add Item">+</button>
						</div>
						<strong className="citem-price">$1,041.73</strong>
					</div>
				</div>
			</li>

		</ul>



		<div className="summary">
			<h2 className="summary-heading">Order Summary</h2>
			<dl className="summary-list">
				<div className="summary-field">
					<dt className="summary-dt">Subtotal:</dt>
					<dd className="summary-dd">$1,200.00</dd>
				</div>

				<div className="summary-field">
					<dt className="summary-dt">Duties and Taxes:</dt>
					<dd className="summary-dd">Duties & Taxes</dd>
				</div>


				<div className="summary-field total">
					<dt className="summary-dt">Total:</dt>
					<dd className="summary-dd">$1,200.00</dd>
				</div>
			</dl>

			<button data-btn className="summary-button to-payment">Proceed To Payment</button>

			<hr className="summary-hr" />

			<h3 className="summary-fheading">Your Card Details</h3>

			<button data-btn className="summary-button card-form">Place Order</button>
		</div>

	</div>

}


export default Cart;
