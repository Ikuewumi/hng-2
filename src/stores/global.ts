import { atom } from "nanostores";



export interface Product {
	name: string;
	price: number;
	manufacturingId: string;
	productId: string;
	keyFeatures: string[];
	description: string;
	imageUrl: string,
	images: string[]
}

export const $loader = atom(true)
export const $allItems = atom<Product[]>([])


const URL = "/data.json"
export const runMount = async () => {
	try {
		$loader.set(true)
		const res = await fetch(URL)
		const data = await res.json() as Product[]
		$allItems.set(data)
		$loader.set(false)

	}

	catch (e) {
		$loader.set(true)
	}
}


runMount()

