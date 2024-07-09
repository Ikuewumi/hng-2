import "./index.scss"
import { useStore } from "@nanostores/react";
import { $cart, $cartCount } from "@/stores/cart";
import { $allItems } from "@/stores/global";
import CartItem from "@/components/CartItem";

import OrderSummary from "@/components/OrderSummary";
import { Link } from "react-router-dom";

const Cart = () => {
	const cartCount = useStore($cartCount)
	const cartItems = useStore($cart)
	const allItems = useStore($allItems)

	const cartIdList = Object.values(cartItems).map(cart => cart.id)
	const cartList = cartIdList.map((id) => {
		const cartItem = allItems.find(item => item.productId === id)!
		return {
			...cartItem,
			manufacturerId: cartItem.manufacturingId,
			quantity: cartItems[id].quantity
		}
	}).filter(cartItem => cartItem.quantity > 0)


	return <>

		<div className="page-cart">
			<div className="cart-header">
				<h1 className="cart-heading">Cart</h1>
				<p className="cart-count">Total Items ({cartCount})</p>
			</div>

			<div className="cart-main">
				{cartList.length ? <>
					<ul className="cart-list">
						{cartList.map((cart, id) => <li className="cart-li" key={id}><CartItem {...cart} /></li>)}
					</ul>
				</> : <section className="cart-none">
					<p className="cart-none-text">Your cart is empty. Start shopping.</p>
					<Link to="/#pick" data-btn className="cart-none-btn">Go To Store</Link>
				</section>}
			</div>


			<OrderSummary />
		</div>



	</>

}


export default Cart;
