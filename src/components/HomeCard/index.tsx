import { Link } from "react-router-dom";
import "./index.scss"
import { EventHandler, SyntheticEvent, useState } from "react";
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
	const formatStr = (str: string) => {
		return `${str.slice(0, 50)}${str.length > 50 ? "..." : ""}`
	}

	const addElementToCart = (e: SyntheticEvent<HTMLButtonElement, MouseEvent>) => {
		e.preventDefault()
		e.stopPropagation()
		if (clicked) {
			return setClicked(false)
		}

		addToCart({
			name, price,
			id: productId
		}, 1)
		setClicked(true)
	}
	return (
		<Link className="hpcard-link" to={`product/${productId}`}>
			<div className="hpcard">
				<img className="hpcard-img" src={imageUrl} alt={name} />
				<h3 className="hpcard-name">{formatStr(name)}</h3>
				<p className="hpcard-id">#{productId} • MFR #{manufacturerId}</p>
				<div className="hpcard-price-bar">
					<strong className="hpcard-price">${formatCurrency(price)}</strong>
					<button data-btn className="hpcard-button" data-clicked={clicked} onClick={addElementToCart}>
						{clicked ? "Added To Cart" : "Add To Cart"}
					</button>
				</div>
			</div>
		</Link>
	);
};

export default HomeCard;
