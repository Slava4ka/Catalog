import {
	CatalogState,
	catalogActionTypes,
	FetchProducts,
	Product
} from './types'
import { Action, Dispatch, Reducer } from 'redux'
import { action } from 'typesafe-actions'
import { fetchProductsList } from '../utils/api'
import { ThunkAction } from 'redux-thunk'
import { ApplicationState } from './store'

const initialState: CatalogState = {
	isFetching: false,
	productsList: []
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
		default:
			return state
	}
}

const getProductsList = (items: Product[]) =>
	action(catalogActionTypes.FETCH_PRODUCTS, items)

const setToggleIsFetching = () => action(catalogActionTypes.TOGGLE_IS_FETCHING)

export const getProducts = (): ThunkAction<
	void,
	ApplicationState,
	null,
	Action<string>
> => async dispatch => {
	dispatch(setToggleIsFetching())
	const asyncResp = await fetchProductsList()
	dispatch(getProductsList(asyncResp.items))
	dispatch(setToggleIsFetching())
}

export default catalogReducer
