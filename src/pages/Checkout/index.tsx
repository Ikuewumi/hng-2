import CustomInput from "@/components/CustomInput"
import "./index.scss"
import OrderSummary from "@/components/OrderSummary"

const inputs = [
	{
		label: "First Name",
		id: "first-name"
	},
	{
		label: "Last Name",
		id: "last-name"
	},
	{
		label: "Phone Number",
		id: "phone-number"
	},
	{
		label: "Email Address",
		id: "email-address"
	},
	{
		label: "Company Name (Optional)",
		id: "company-name-optional"
	},
	{
		label: "Street Address",
		id: "street-address"
	},
	{
		label: "Town / City",
		id: "town-city"
	},
	{
		label: "Postcode / Zip",
		id: "postcode-zip"
	}
]




const Checkout = () => {
	return <div className="page-checkout">
		<div className="checkout-header">
			<h1 className="checkout-heading">Checkout</h1>
		</div>

		<div className="cform">
			<h2 className="cform-heading">Personal Details</h2>

			<form className="cform-form">
				{inputs.map(input => <CustomInput key={input.id} {...input} />)}
			</form>

		</div>


		<OrderSummary isCart={false} />

	</div>

}

export default Checkout
