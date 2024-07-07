import "./index.scss"

const Product = () => {
	return <div className="page-product">


		<div className="pimages">
			<picture className="pimages-picture">
				<img className="pimages-image" src="/screen.jpg" alt="" />
			</picture>


			<ul className="pimages-list">
				<li className="pimages-li"><button className="pimages-button"><img src="/screen.jpg" alt="" className="pimages-preview" /></button></li>
				<li className="pimages-li"><button className="pimages-button"><img src="/screen.jpg" alt="" className="pimages-preview" /></button></li>
				<li className="pimages-li"><button className="pimages-button"><img src="/screen.jpg" alt="" className="pimages-preview" /></button></li>

			</ul>
		</div>



		<div className="pcontent">
			<h1 className="pcontent-heading">Dell UltraSharp 38" 1600p Curved Monitor</h1>
			<p className="pcontent-text">The Midnight Apple 13" MacBook Air now features the Apple M3 chip, which has many improvements over its predecessor, the M2. Now built on 3nm process technology, the M3 8-Core Chip is combined with a 10-Core GPU. The next-gen GPU features Dynamic Caching, hardware-accelerated ray tracing, and mesh shading, all of which significantly increase performance for the most demanding creative apps and games. The M3 Chip also has a 16-Core Neural Engine that can leverage the power of AI for both macOS and a growing number of supported apps. It also has 16GB of unified RAM and a 512GB SSD. Add Wi-Fi 6E (802.11ax) and support for two external displays, and this MacBook Air delivers performance, power efficiency, and portability</p>
			<button className="pcontent-more">Read More</button>
			<div className="pcontent-review-bar">
				<figure className="pstars">
					<ul className="pstars-list">
						<li className="pstars-li"><svg data-btn className="pstars-star" data-starnumber="1" data-percent="100" viewBox="0 0 24 24"><use href="#star"></use></svg></li>
						<li className="pstars-li"><svg data-btn className="pstars-star" data-starnumber="2" data-percent="100" viewBox="0 0 24 24"><use href="#star"></use></svg></li>
						<li className="pstars-li"><svg data-btn className="pstars-star" data-starnumber="3" data-percent="100" viewBox="0 0 24 24"><use href="#star"></use></svg></li>
						<li className="pstars-li"><svg data-btn className="pstars-star" data-starnumber="4" data-percent="100" viewBox="0 0 24 24"><use href="#star"></use></svg></li>
						<li className="pstars-li"><svg data-btn className="pstars-star" data-starnumber="5" data-percent="90" viewBox="0 0 24 24"><use href="#star"></use></svg></li>
					</ul>
					<figcaption>4.0</figcaption>
				</figure>

				<strong className="pcontent-reviews">12k reviews</strong>
			</div>
			<strong className="pcontent-price">$1,041.73</strong>



			<div className="pcontent-cart-bar">

				<div className="pcount">
					<button className="pcount-remove" title="Remove Item">-</button>
					<span className="pcount-value">1</span>
					<button className="pcount-add" title="Add Item">+</button>
				</div>

				<button data-btn className="pcontent-cart-button">Add To Cart</button>

			</div>
		</div>



		<div className="pdetails">
			<h2 className="pdetails-heading">Key Features</h2>

			<ul className="pdetails-list">
				<li className="pdetails-li">Apple M3 8-Core Chip</li>
				<li className="pdetails-li">16GB Unified RAM | 512GB SSD</li>
				<li className="pdetails-li">13.6" 2560 x 1664 Liquid Retina Display</li>
				<li className="pdetails-li">10-Core GPU | 16-Core Neural Engine</li>
			</ul>
		</div>

	</div>
}

export default Product;
