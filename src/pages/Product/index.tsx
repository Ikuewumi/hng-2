import { useStore } from "@nanostores/react"
import { useParams } from "react-router-dom"
import "./index.scss"
import { $allItems } from "@/stores/global"
import { type Product } from "@/stores/global"
import ProductCount from "@/components/ProductCount"
import { useState } from "react"
import { formatCurrency } from "@/composables/format"
import { addToCart } from "@/stores/cart"

const Product = () => {

	const cartItem = useParams() as Record<"productId", string>
	const allProducts = useStore($allItems)
	const product = allProducts.find(item => item.productId === cartItem.productId) as unknown as Product
	const allImages = [product?.imageUrl ?? "", ...(product?.images ?? [])]
	const [qty, setQty] = useState(1)
	const [selectedImage, setSelectedImage] = useState(0);
	const [clicked, setClicked] = useState(false)
	let timerId: number;
	const INTERVAL = 3000

	const reduceQty = () => {
		if (qty === 1) return
		setQty(qty - 1)
	}

	const addItem = () => {
		if (!product) return;


		addToCart({
			name: product.name,
			id: product.productId,
			price: product.price
		}, qty)

		setClicked(true)
		clearTimeout(timerId)
		timerId = setTimeout(() => {
			setClicked(false)
			clearTimeout(timerId)
		}, INTERVAL) as unknown as number

	}

	return <>
		{product ?
			<div className="page-product">


				<div className="pimages">
					<picture className="pimages-picture">
						<img className="pimages-image" src={allImages[selectedImage]} alt="" />
					</picture>


					<ul className="pimages-list">

						{allImages.map((img, id) => <li key={id} className="pimages-li">
							<button onClick={() => setSelectedImage(id)} className="pimages-button" data-selected={id === selectedImage}>
								<img src={img} alt={product.name} className="pimages-preview" />
							</button>
						</li>
						)}

					</ul>
				</div>



				<div className="pcontent">
					<h1 className="pcontent-heading">{product.name}</h1>
					<p className="pcontent-text">{product.description}</p>
					<button className="pcontent-more">Read More</button>
					<div className="pcontent-review-bar">
						<figure className="pstars">
							<ul className="pstars-list">
								<li className="pstars-li">
									<svg className="pstars-star" width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M11 17.2513L5.81301 20.3793C5.61968 20.4922 5.42601 20.5397 5.23201 20.5217C5.03801 20.5037 4.86246 20.4383 4.70535 20.3257C4.54801 20.2128 4.42657 20.0653 4.34101 19.8833C4.25568 19.7013 4.24201 19.5 4.30001 19.2793L5.67701 13.3897L1.09768 9.42565C0.926567 9.27698 0.817567 9.10476 0.770678 8.90898C0.723567 8.71321 0.735901 8.52298 0.807678 8.33832C0.879456 8.15387 0.9829 8.0031 1.11801 7.88598C1.25312 7.76887 1.43779 7.69232 1.67201 7.65632L7.71534 7.12832L10.0617 1.56665C10.147 1.35976 10.2765 1.20676 10.45 1.10765C10.6236 1.00854 10.8069 0.958984 11 0.958984C11.1931 0.958984 11.3765 1.00854 11.55 1.10765C11.7236 1.20676 11.853 1.35976 11.9383 1.56665L14.2847 7.12832L20.328 7.65632C20.5622 7.69232 20.7469 7.76887 20.882 7.88598C21.0171 8.0031 21.1206 8.15387 21.1923 8.33832C21.2641 8.52298 21.2765 8.71321 21.2293 8.90898C21.1825 9.10476 21.0735 9.27698 20.9023 9.42565L16.323 13.3897L17.7 19.2793C17.758 19.5 17.7443 19.7013 17.659 19.8833C17.5735 20.0653 17.452 20.2128 17.2947 20.3257C17.1376 20.4383 16.962 20.5037 16.768 20.5217C16.574 20.5397 16.3803 20.4922 16.187 20.3793L11 17.2513Z" fill="#DBFA1C" />
									</svg>

								</li>


								<li className="pstars-li">
									<svg className="pstars-star" width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M11 17.2513L5.81301 20.3793C5.61968 20.4922 5.42601 20.5397 5.23201 20.5217C5.03801 20.5037 4.86246 20.4383 4.70535 20.3257C4.54801 20.2128 4.42657 20.0653 4.34101 19.8833C4.25568 19.7013 4.24201 19.5 4.30001 19.2793L5.67701 13.3897L1.09768 9.42565C0.926567 9.27698 0.817567 9.10476 0.770678 8.90898C0.723567 8.71321 0.735901 8.52298 0.807678 8.33832C0.879456 8.15387 0.9829 8.0031 1.11801 7.88598C1.25312 7.76887 1.43779 7.69232 1.67201 7.65632L7.71534 7.12832L10.0617 1.56665C10.147 1.35976 10.2765 1.20676 10.45 1.10765C10.6236 1.00854 10.8069 0.958984 11 0.958984C11.1931 0.958984 11.3765 1.00854 11.55 1.10765C11.7236 1.20676 11.853 1.35976 11.9383 1.56665L14.2847 7.12832L20.328 7.65632C20.5622 7.69232 20.7469 7.76887 20.882 7.88598C21.0171 8.0031 21.1206 8.15387 21.1923 8.33832C21.2641 8.52298 21.2765 8.71321 21.2293 8.90898C21.1825 9.10476 21.0735 9.27698 20.9023 9.42565L16.323 13.3897L17.7 19.2793C17.758 19.5 17.7443 19.7013 17.659 19.8833C17.5735 20.0653 17.452 20.2128 17.2947 20.3257C17.1376 20.4383 16.962 20.5037 16.768 20.5217C16.574 20.5397 16.3803 20.4922 16.187 20.3793L11 17.2513Z" fill="#DBFA1C" />
									</svg>
								</li>


								<li className="pstars-li">
									<svg className="pstars-star" width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M11 17.2513L5.81301 20.3793C5.61968 20.4922 5.42601 20.5397 5.23201 20.5217C5.03801 20.5037 4.86246 20.4383 4.70535 20.3257C4.54801 20.2128 4.42657 20.0653 4.34101 19.8833C4.25568 19.7013 4.24201 19.5 4.30001 19.2793L5.67701 13.3897L1.09768 9.42565C0.926567 9.27698 0.817567 9.10476 0.770678 8.90898C0.723567 8.71321 0.735901 8.52298 0.807678 8.33832C0.879456 8.15387 0.9829 8.0031 1.11801 7.88598C1.25312 7.76887 1.43779 7.69232 1.67201 7.65632L7.71534 7.12832L10.0617 1.56665C10.147 1.35976 10.2765 1.20676 10.45 1.10765C10.6236 1.00854 10.8069 0.958984 11 0.958984C11.1931 0.958984 11.3765 1.00854 11.55 1.10765C11.7236 1.20676 11.853 1.35976 11.9383 1.56665L14.2847 7.12832L20.328 7.65632C20.5622 7.69232 20.7469 7.76887 20.882 7.88598C21.0171 8.0031 21.1206 8.15387 21.1923 8.33832C21.2641 8.52298 21.2765 8.71321 21.2293 8.90898C21.1825 9.10476 21.0735 9.27698 20.9023 9.42565L16.323 13.3897L17.7 19.2793C17.758 19.5 17.7443 19.7013 17.659 19.8833C17.5735 20.0653 17.452 20.2128 17.2947 20.3257C17.1376 20.4383 16.962 20.5037 16.768 20.5217C16.574 20.5397 16.3803 20.4922 16.187 20.3793L11 17.2513Z" fill="#DBFA1C" />
									</svg>
								</li>


								<li className="pstars-li">
									<svg className="pstars-star" width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M11 17.2513L5.81301 20.3793C5.61968 20.4922 5.42601 20.5397 5.23201 20.5217C5.03801 20.5037 4.86246 20.4383 4.70535 20.3257C4.54801 20.2128 4.42657 20.0653 4.34101 19.8833C4.25568 19.7013 4.24201 19.5 4.30001 19.2793L5.67701 13.3897L1.09768 9.42565C0.926567 9.27698 0.817567 9.10476 0.770678 8.90898C0.723567 8.71321 0.735901 8.52298 0.807678 8.33832C0.879456 8.15387 0.9829 8.0031 1.11801 7.88598C1.25312 7.76887 1.43779 7.69232 1.67201 7.65632L7.71534 7.12832L10.0617 1.56665C10.147 1.35976 10.2765 1.20676 10.45 1.10765C10.6236 1.00854 10.8069 0.958984 11 0.958984C11.1931 0.958984 11.3765 1.00854 11.55 1.10765C11.7236 1.20676 11.853 1.35976 11.9383 1.56665L14.2847 7.12832L20.328 7.65632C20.5622 7.69232 20.7469 7.76887 20.882 7.88598C21.0171 8.0031 21.1206 8.15387 21.1923 8.33832C21.2641 8.52298 21.2765 8.71321 21.2293 8.90898C21.1825 9.10476 21.0735 9.27698 20.9023 9.42565L16.323 13.3897L17.7 19.2793C17.758 19.5 17.7443 19.7013 17.659 19.8833C17.5735 20.0653 17.452 20.2128 17.2947 20.3257C17.1376 20.4383 16.962 20.5037 16.768 20.5217C16.574 20.5397 16.3803 20.4922 16.187 20.3793L11 17.2513Z" fill="#DBFA1C" />
									</svg>
								</li>

								<li className="pstars-li">
									<svg className="pstars-star" width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M6.80001 17.4333L11 14.9L15.2 17.4667L14.1 12.6667L17.8 9.46665L12.9333 9.03332L11 4.49998L9.06668 8.99998L4.20001 9.43332L7.90001 12.6667L6.80001 17.4333ZM11 17.2513L5.81301 20.3793C5.61968 20.4922 5.42601 20.5397 5.23201 20.5217C5.03801 20.5037 4.86246 20.4383 4.70535 20.3257C4.54801 20.2128 4.42657 20.0653 4.34101 19.8833C4.25568 19.7013 4.24201 19.5 4.30001 19.2793L5.67701 13.3897L1.09768 9.42565C0.926567 9.27698 0.817567 9.10476 0.770678 8.90898C0.723567 8.71321 0.735901 8.52298 0.807678 8.33832C0.879456 8.15387 0.9829 8.0031 1.11801 7.88598C1.25312 7.76887 1.43779 7.69232 1.67201 7.65632L7.71534 7.12832L10.0617 1.56665C10.147 1.35976 10.2765 1.20676 10.45 1.10765C10.6236 1.00854 10.8069 0.958984 11 0.958984C11.1931 0.958984 11.3765 1.00854 11.55 1.10765C11.7236 1.20676 11.853 1.35976 11.9383 1.56665L14.2847 7.12832L20.328 7.65632C20.5622 7.69232 20.7469 7.76887 20.882 7.88598C21.0171 8.0031 21.1206 8.15387 21.1923 8.33832C21.2641 8.52298 21.2765 8.71321 21.2293 8.90898C21.1825 9.10476 21.0735 9.27698 20.9023 9.42565L16.323 13.3897L17.7 19.2793C17.758 19.5 17.7443 19.7013 17.659 19.8833C17.5735 20.0653 17.452 20.2128 17.2947 20.3257C17.1376 20.4383 16.962 20.5037 16.768 20.5217C16.574 20.5397 16.3803 20.4922 16.187 20.3793L11 17.2513Z" fill="#DBFA1C" />
									</svg>

								</li>
							</ul>
							<figcaption>4.0</figcaption>
						</figure>

						<strong className="pcontent-reviews">12k reviews</strong>
					</div>
					<strong className="pcontent-price">${formatCurrency(product.price)}</strong>



					<div className="pcontent-cart-bar">

						<ProductCount
							quantity={qty}
							onDecrease={reduceQty}
							onIncrease={() => setQty(qty + 1)}
						/>
						<button data-clicked={clicked} data-btn className="pcontent-cart-button" onClick={addItem}>
							{!clicked ? "Add To Cart" : `+${qty} item(s) to Cart`}
						</button>

					</div>
				</div>



				<div className="pdetails">
					<h2 className="pdetails-heading">Key Features</h2>

					<ul className="pdetails-list">

						{product.keyFeatures.map((feature, id) =>
							<li key={id} className="pdetails-li">{feature}</li>
						)}
					</ul>
				</div>

			</div>

			: <section className="ploading">
				<p className="ploading-text">Loading Product...</p>
			</section>}
	</>
}

export default Product;
