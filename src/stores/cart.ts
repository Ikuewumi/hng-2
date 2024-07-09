import { map, computed } from "nanostores"

export interface CartItem {
	id: string;
	name: string;
	price: number;
	quantity: number;
}


type UserCartItem = Omit<CartItem, "quantity">

export const $cart = map<Record<string, CartItem>>({})
export const $cartTotal = computed($cart, (cart) => {
	const items = Object.keys(cart)
	return items.reduce((sum, acc) => sum + (cart[acc].quantity * cart[acc].price), 0)
})
export const $cartCount = computed($cart, (cart) => {
	const items = Object.keys(cart)
	return items.reduce((sum, acc) => sum + cart[acc].quantity, 0)
})



const enterItemToCart = (cartItem: UserCartItem) => {
	if (cartItem.id in $cart.get()) return console.warn('do not attempt to manipulate the store')
	$cart.setKey(cartItem.id, { ...cartItem, quantity: 0 })
}


export const addToCart = (cartItem: UserCartItem, quantity: number = 1) => {
	if (!(cartItem.id in $cart.get())) {
		enterItemToCart(cartItem)
	}

	const previousCartState = $cart.get()[cartItem.id]
	const newQty = previousCartState.quantity + quantity;

	if (newQty < 0) return;

	return $cart.setKey(cartItem.id, {
		...previousCartState,
		quantity: newQty
	})
}



export const addItem = (cartId: string, add: boolean = true) => {
	if (!(cartId in $cart.get())) return;

	const cartItem = $cart.get()[cartId]

	const newQty = cartItem.quantity + (add ? 1 : -1)

	if (newQty < 0) return
	if (newQty === 0) return removeFromCart(cartId)

	$cart.setKey(cartId, {
		...cartItem,
		quantity: newQty
	})

}

export const removeFromCart = (cartId: string) => {
	if (!(cartId in $cart.get())) return;

	const currentCartItem = $cart.get()[cartId]

	$cart.setKey(cartId, {
		...currentCartItem,
		quantity: 0
	})

}
