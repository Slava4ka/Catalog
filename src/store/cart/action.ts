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

const dropCartAction = () => {
	return action(catalogActionTypes.DROP_CART)
}

export const addToCart = (
	id: number
): ThunkAction<void, ApplicationState, null, Action<string>> => dispatch => {
	dispatch(addItemAction(id, store.getState().catalog.productsList))
	dispatch(countTotalPriceAction())
}

export const removeFromCart = (
	id: number
): ThunkAction<void, ApplicationState, null, Action<string>> => dispatch => {
	dispatch(removeItemAction(id))
	dispatch(countTotalPriceAction())
}

export const dropFromCart = (
	id: number
): ThunkAction<void, ApplicationState, null, Action<string>> => dispatch => {
	dispatch(dropItemAction(id))
	dispatch(countTotalPriceAction())
}

export const dropCart: ActionCreator<Action> = () => {
	return dropCartAction()
}
