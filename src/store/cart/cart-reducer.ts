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
	const fromCatalog: ProductToCart = catalog.find(item => {
		return item.id === id
	})
	if (typeof fromCatalog === 'undefined') {
		return [...products]
	} else {
		const itemFromCatalog: ProductInCart = products.find(item => {
			return item.product.id === id
		})
		if (typeof itemFromCatalog === 'undefined') {
			return [...products, { product: fromCatalog, quantity: 1 }]
		} else {
			return products.map(item => {
				if (item.product.id === fromCatalog.id) {
					return { ...item, quantity: item.quantity + 1 }
				} else return item
			})
		}
	}
}

const countTotalPrice = (products: Array<CartPosition>): number => {
	if (!products) {
		return 0
	} else {
		console.log(products)
		return products
			.map(p => p.product.price * p.quantity)
			.reduce((sum, current) => sum + current)
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
			return { ...state }
		}
		case catalogActionTypes.DROP_ITEM: {
			return { ...state }
		}
		case catalogActionTypes.COUNT_TOTAL_PRICE: {
			return {
				...state,
				totalPrice: countTotalPrice(state.products)
			}
		}
		default:
			return state
	}
}

export default cartReducer
