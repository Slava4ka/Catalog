import { action } from 'typesafe-actions'
import { catalogActionTypes, Product } from '../types'
import { Action, ActionCreator } from 'redux'
import store, { ApplicationState } from '../store'
import { ThunkAction } from 'redux-thunk'

const addItemAction = (id: number, catalog: Array<Product>) => {
	return action(catalogActionTypes.ADD_ITEM, { id, catalog })
}

const removeItemAction = (id: number) => {
	return action(catalogActionTypes.REMOVE_ONE_ITEM, id)
}

const dropItemAction = (id: number) => {
	return action(catalogActionTypes.DROP_ITEM, id)
}

const countTotalPriceAction = () => {
	return action(catalogActionTypes.COUNT_TOTAL_PRICE)
}
/*
export const addToCart: ActionCreator<Action> = (id: number) => {
	addItemAction(id, store.getState().catalog.productsList)
	return countTotalPriceAction()
}
*/

export const addToCart = (
	id: number
): ThunkAction<void, ApplicationState, null, Action<string>> => dispatch => {
	dispatch(addItemAction(id, store.getState().catalog.productsList))
	dispatch(countTotalPriceAction())
}
export const removeFromCart: ActionCreator<Action> = (id: number) => {
	removeItemAction(id)
	return countTotalPriceAction()
}

export const dropFromCart: ActionCreator<Action> = (id: number) => {
	dropItemAction(id)
	return countTotalPriceAction()
}
