import { action } from 'typesafe-actions'
import { catalogActionTypes } from '../types'
import { Action, ActionCreator } from 'redux'

const addMessage = (text: string, time: number) => {
	return action(catalogActionTypes.ADD_MESSAGE, { text, time })
}

const hideMessage = (id: number) => {
	return action(catalogActionTypes.SET_VISIBILITY, id)
}

export const messageToState: ActionCreator<Action> = (messageText: string) => {
	return addMessage(messageText, 5000)
}

export const hideMessageInState: ActionCreator<Action> = (
	messageId: number
) => {
	return hideMessage(messageId)
}
