interface ProductCountProps {
	quantity: number;
	onIncrease: () => void;
	onDecrease: () => void;
}

const ProductCount = ({ quantity, onIncrease, onDecrease }: ProductCountProps) => {
	return (
		<div className="pcount">
			<button className="pcount-remove" title="Remove Item" onClick={onDecrease}>
				<svg width="14" height="2" viewBox="0 0 14 2" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M1.25 1.75C1.0375 1.75 0.859417 1.67808 0.71575 1.53425C0.571917 1.39042 0.5 1.21225 0.5 0.99975C0.5 0.787083 0.571917 0.609 0.71575 0.4655C0.859417 0.321833 1.0375 0.25 1.25 0.25H12.75C12.9625 0.25 13.1406 0.321917 13.2843 0.46575C13.4281 0.609583 13.5 0.78775 13.5 1.00025C13.5 1.21292 13.4281 1.391 13.2843 1.5345C13.1406 1.67817 12.9625 1.75 12.75 1.75H1.25Z" fill="black" />
				</svg>

			</button>
			<span className="pcount-value">{quantity}</span>
			<button className="pcount-add" title="Add Item" onClick={onIncrease}>
				<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M6.25 7.75H1.25C1.0375 7.75 0.859417 7.67808 0.71575 7.53425C0.571917 7.39042 0.5 7.21225 0.5 6.99975C0.5 6.78708 0.571917 6.609 0.71575 6.4655C0.859417 6.32183 1.0375 6.25 1.25 6.25H6.25V1.25C6.25 1.0375 6.32192 0.859417 6.46575 0.71575C6.60958 0.571917 6.78775 0.5 7.00025 0.5C7.21292 0.5 7.391 0.571917 7.5345 0.71575C7.67817 0.859417 7.75 1.0375 7.75 1.25V6.25H12.75C12.9625 6.25 13.1406 6.32192 13.2843 6.46575C13.4281 6.60958 13.5 6.78775 13.5 7.00025C13.5 7.21292 13.4281 7.391 13.2843 7.5345C13.1406 7.67817 12.9625 7.75 12.75 7.75H7.75V12.75C7.75 12.9625 7.67808 13.1406 7.53425 13.2843C7.39042 13.4281 7.21225 13.5 6.99975 13.5C6.78708 13.5 6.609 13.4281 6.4655 13.2843C6.32183 13.1406 6.25 12.9625 6.25 12.75V7.75Z" fill="black" />
				</svg>

			</button>
		</div>
	);
};

export default ProductCount;