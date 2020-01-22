export enum catalogActionTypes {
	FETCH_PRODUCTS = '@@catalog/FETCH_PRODUCTS',
	FETCH_ERROR = '@@catalog/FETCH_ERROR',
	TOGGLE_IS_FETCHING = '@@catalog/TOGGLE_IS_FETCHING',
	ADD_MESSAGE = '@@message/ADD_MESSAGE',
	SET_VISIBILITY = '@@message/SET_VISIBILITY',
	ADD_ITEM = '@@cart/ADD_ITEM',
	REMOVE_ONE_ITEM = '@@cart/REMOVE_ONE_ITEM',
	DROP_ITEM = '@@cart/DROP_ITEM',
	COUNT_TOTAL_PRICE = '@@cart/COUNT_TOTAL_PRICE',
	DROP_CART = '@@cart/DROP_CART'
}

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
	addToCart: (id: number) => any
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
	readonly totalPrice: number
	readonly errors?: string
}

export interface Message {
	id: number
	text: string
	time: number
	isVisible: boolean
}

export interface MessageState {
	readonly message: Array<Message>
}

export type messageType = Message
