import { CartState } from '../types'
import { Reducer } from 'redux'

const initialState: CartState = {
	productsCounter: 0,
	products: [],
	errors: ''
}

const cartReducer: Reducer<CartState> = (state = initialState, action) => {
	switch (action.type) {
		default:
			return state
	}
}

export default cartReducer
