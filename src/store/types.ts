export enum catalogActionTypes {
	FETCH_PRODUCTS = '@@catalog/FETCH_PRODUCTS',
	TOGGLE_IS_FETCHING = '@@catalog/TOGGLE_IS_FETCHING',
	FETCH_ERROR = '@@catalog/FETCH_ERROR',
	ADD_TO_CART = '@@catalog/ADD_TO_CART',
	REMOVE_FROM_CART = '@@catalog/REMOVE_FROM_CART'
}

export interface FetchProducts {
	type: typeof catalogActionTypes['FETCH_PRODUCTS']
}

export interface Product {
	id: number | boolean
	image: string | boolean
	name: string | boolean
	price: number | boolean
}

export interface CatalogState {
	readonly isFetching: boolean
	readonly productsList: Array<Product>
	readonly errors?: string
}

export interface CartPosition {
	product: Product
	quantity: number
}

export interface CartState {
	readonly productsCounter: number
	readonly products: Array<CartPosition>
	readonly errors?: string
}
