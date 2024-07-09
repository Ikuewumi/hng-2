import { Link } from "react-router-dom";
import "./index.scss"
import { useState } from "react";
import { addToCart } from "@/stores/cart";
import { formatCurrency } from "@/composables/format";
interface HomeCardProps {
	imageUrl: string;
	name: string;
	productId: string;
	manufacturerId: string;
	price: number;
	onAddToCart?: () => void;
}

const HomeCard = ({
	imageUrl = "",
	name,
	productId,
	manufacturerId,
	price,
}: HomeCardProps) => {
	const [clicked, setClicked] = useState(false)

	const addElementToCart = () => {
		addToCart({
			name, price,
			id: productId
		}, 1)
		setClicked(true)
	}
	console.log(productId)
	return (
		<div className="hpcard">
			<img className="hpcard-img" src={imageUrl} alt={name} />
			<Link className="hpcard-link" to={`product/${productId}`}><h3 className="hpcard-name">{name}</h3></Link>
			<p className="hpcard-id">#{productId} • MFR #{manufacturerId}</p>
			<div className="hpcard-price-bar">
				<strong className="hpcard-price">${formatCurrency(price)}</strong>
				<button data-btn className="hpcard-button" data-clicked={clicked} onClick={addElementToCart}>
					{clicked ? "Added To Cart" : "Add To Cart"}
				</button>
			</div>
		</div>
	);
};

export default HomeCard;
