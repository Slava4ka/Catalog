import { catalogActionTypes, Product } from '../types'
import { action } from 'typesafe-actions'
import { ThunkAction } from 'redux-thunk'
import { ApplicationState } from '../store'
import { Action } from 'redux'
import { fetchProductsList } from '../../utils/api'

const getProductsList = (items: Product[]) =>
	action(catalogActionTypes.FETCH_PRODUCTS, items)

const setToggleIsFetching = () => action(catalogActionTypes.TOGGLE_IS_FETCHING)

const setError = (error: string) =>
	action(catalogActionTypes.FETCH_ERROR, error)

export const getProducts = (): ThunkAction<
	void,
	ApplicationState,
	null,
	Action<string>
> => async dispatch => {
	dispatch(setToggleIsFetching())
	try {
		const asyncResp = await fetchProductsList()
		dispatch(getProductsList(asyncResp.items))
	} catch (e) {
		setError('Возникла ошибка')
		throw e
	}
	dispatch(setToggleIsFetching())
}
