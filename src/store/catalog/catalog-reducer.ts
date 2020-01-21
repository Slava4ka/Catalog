import { CatalogState, catalogActionTypes, Product } from '../types'
import { Reducer } from 'redux'

const initialState: CatalogState = {
	isFetching: false,
	productsList: [],
	errors: ''
}

const catalogReducer: Reducer<CatalogState> = (
	state = initialState,
	action
) => {
	switch (action.type) {
		case catalogActionTypes.FETCH_PRODUCTS: {
			return { ...state, productsList: action.payload }
		}
		case catalogActionTypes.TOGGLE_IS_FETCHING: {
			return { ...state, isFetching: !state.isFetching }
		}
		case catalogActionTypes.FETCH_ERROR: {
			return { ...state, errors: action.payload }
		}
		default:
			return state
	}
}

export default catalogReducer
