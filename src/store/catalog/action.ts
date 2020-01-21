import { catalogActionTypes, Product } from '../types'
import { action } from 'typesafe-actions'
import { ThunkAction } from 'redux-thunk'
import { ApplicationState } from '../store'
import { Action } from 'redux'
import { fetchProductsList } from '../../utils/api'

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
