import "./index.scss"
import ProductCount from '@components/ProductCount';
import { formatCurrency } from "@/composables/format";
import { addItem, removeFromCart } from "@/stores/cart";
import { Link } from "react-router-dom";

interface CartItemProps {
	imageUrl: string;
	name: string;
	productId: string;
	manufacturerId: string;
	quantity: number;
	price: number;
}

const CartItem = ({
	imageUrl = "",
	name,
	productId,
	manufacturerId,
	quantity,
	price,
}: CartItemProps) => {
	return (
		<div className="citem">
			<img src={imageUrl} alt={name} className="citem-img" />
			<div className="citem-content">
				<div className="citem-header">
					<Link className="citem-namelink" to={`/product/${productId}`}><h2 className="citem-name">{name}</h2></Link>
					<button className="citem-remove" title="Remove Item" onClick={() => removeFromCart(productId)}>
						Remove
					</button>
				</div>
				<div className="citem-id">#{productId} • MFR #{manufacturerId}</div>
				<ProductCount
					quantity={quantity}
					onIncrease={() => { addItem(productId, true) }}
					onDecrease={() => { addItem(productId, false) }}
				/>
				<strong className="citem-price">
					${formatCurrency(price)}
				</strong>
			</div>
		</div>
	);
};

export default CartItem;
