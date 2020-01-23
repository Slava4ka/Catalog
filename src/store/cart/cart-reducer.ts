import { CartPosition, CartState, catalogActionTypes, Product } from '../types'
import { Reducer } from 'redux'

const initialState: CartState = {
	productsCounter: 0,
	products: [],
	totalPrice: 0,
	errors: ''
}

type ProductToCart = Product | undefined
type ProductInCart = CartPosition | undefined

const add = (
	products: Array<CartPosition>,
	id: number,
	catalog: Array<Product>
): Array<CartPosition> => {
	const itemFromCart: ProductInCart = products.find(item => {
		return item.product.id === id
	})
	if (typeof itemFromCart === 'undefined') {
		const itemFromCatalog: ProductToCart = catalog.find(item => {
			return item.id === id
		})
		if (typeof itemFromCatalog === 'undefined') {
			return [...products]
		} else {
			return [...products, { product: itemFromCatalog, quantity: 1 }]
		}
	} else {
		return products.map(item => {
			if (item.product.id === id) {
				return { ...item, quantity: item.quantity + 1 }
			} else return item
		})
	}
}

const remove = (
	products: Array<CartPosition>,
	id: number
): Array<CartPosition> => {
	return products
		.map(item => {
			if (item.product.id === id) {
				return { ...item, quantity: item.quantity - 1 }
			} else return item
		})
		.filter(p => p.quantity > 0)
}

const dropItem = (
	products: Array<CartPosition>,
	id: number
): Array<CartPosition> => {
	return products.filter(item => item.product.id !== id)
}

const countTotalPrice = (products: Array<CartPosition>): number => {
	console.log(products)
	if (!products.length) {
		return 0
	} else {
		return products
			.map(p => p.product.price * p.quantity)
			.reduce((sum, current) => sum + current)
	}
}

const dropItemFromTotalCount = (
	count: number,
	id: number,
	products: Array<CartPosition>
): number => {
	const currentCount = products.find(p => p.product.id === id)
	if (typeof currentCount === 'undefined') {
		return count
	} else {
		return count - currentCount.quantity
	}
}

const cartReducer: Reducer<CartState> = (state = initialState, action) => {
	switch (action.type) {
		case catalogActionTypes.ADD_ITEM: {
			return {
				...state,
				productsCounter: state.productsCounter + 1,
				products: add(state.products, action.payload.id, action.payload.catalog)
			}
		}
		case catalogActionTypes.REMOVE_ONE_ITEM: {
			return {
				...state,
				productsCounter: state.productsCounter - 1,
				products: remove(state.products, action.payload)
			}
		}
		case catalogActionTypes.DROP_ITEM: {
			return {
				...state,
				productsCounter: dropItemFromTotalCount(
					state.productsCounter,
					action.payload,
					state.products
				),
				products: dropItem(state.products, action.payload)
			}
		}
		case catalogActionTypes.COUNT_TOTAL_PRICE: {
			return {
				...state,
				totalPrice: countTotalPrice(state.products)
			}
		}
		case catalogActionTypes.DROP_CART: {
			return initialState
		}
		default:
			return state
	}
}

export default cartReducer
