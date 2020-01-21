export enum catalogActionTypes {
	FETCH_PRODUCTS = '@@catalog/FETCH_PRODUCTS',
	TOGGLE_IS_FETCHING = '@@catalog/TOGGLE_IS_FETCHING',
	ADD_MESSAGE = '@@message/ADD_MESSAGE',
	REMOVE_MESSAGE = '@@message/REMOVE_MESSAGE',
	SET_VISIBILITY = '@@message/SET_VISIBILITY',
	FETCH_ERROR = '@@catalog/FETCH_ERROR',
	ADD_TO_CART = '@@cart/ADD_TO_CART',
	REMOVE_FROM_CART = '@@cart/REMOVE_FROM_CART'
}

/*
export interface FetchProducts {
	type: typeof catalogActionTypes['FETCH_PRODUCTS']
}
*/

export interface Message {
	id: number
	text: string
	time: number
	isVisible: boolean
}

export interface MessageState {
	readonly message: Array<Message>
}

export type messageType = { message: Message }

export interface Product {
	id: number
	image: string
	name: string
	price: number
}

export interface CardProduct {
	id: number
	image: string
	name: string
	price: number
	sendMessage: (text: string) => any
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
