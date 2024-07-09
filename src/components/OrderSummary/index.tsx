import { formatCurrency } from "@/composables/format"
import { $cartTotal } from "@/stores/cart"
import { useStore } from "@nanostores/react"
import { Link } from "react-router-dom"
import CustomInput from "../CustomInput"
import { FormEventHandler } from "react"


const inputs = [
	{ id: "card-number", label: "Card Number" },
	{ id: "card-expiry", label: "Expiration (MM/YY)" },
	{ id: "card-cvc", label: "Card Security Code" }
]

const OrderSummary = ({
	isCart = true

}) => {

	const cartTotal = useStore($cartTotal)
	const submitForm: FormEventHandler<HTMLFormElement> = (e) => {
		e.preventDefault()
		alert("Form Filled....I don't know. HNG Stage 2 Site Completed?")
	}
	return <div className="summary">
		<h2 className="summary-heading">Order Summary</h2>
		<dl className="summary-list">

			<div className="summary-field"><dt className="summary-dt">Subtotal:</dt>
				<dd className="summary-dd">${formatCurrency(cartTotal)}</dd>
			</div>
			<div className="summary-field">
				<dt className="summary-dt">Duties and Taxes:</dt>
				<dd className="summary-dd">Due Upon Delivery</dd>
			</div>
			<div className="summary-field total">
				<dt className="summary-dt">Total:</dt>
				<dd className="summary-dd">${formatCurrency(cartTotal)}</dd>
			</div>
		</dl>
		{
			!isCart ? <>
				<hr className="summary-hr" />
				<h3 className="summary-fheading">Your Card Details</h3>

				<form onSubmit={submitForm} className="summary-form">
					{inputs.map((input) => <CustomInput key={input.id} {...input} />)}


					<div className="summary-fcheckbox">
						<input type="checkbox" id="summary-terms" />
						<label htmlFor="summary-terms">You agree to <span>terms & conditions</span> and <span>privacy policy</span></label>
					</div>
					<button data-btn className="summary-button to-payment">Place Order</button>
				</form>

			</> :
				<Link to="/checkout" data-btn className="summary-button card-form" aria-disabled={cartTotal <= 0}>Place Order</Link>
		}
	</div>
}

export default OrderSummary
