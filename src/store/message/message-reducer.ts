import { catalogActionTypes, MessageState, messageType } from '../types'
import { Reducer } from 'redux'

const initialState: MessageState = {
	message: []
}

const push = (
	messages: messageType[],
	newMessage: messageType
): messageType[] => {
	return [
		...messages,
		{
			id: messages.length,
			text: newMessage.text,
			time: newMessage.time,
			isVisible: true
		}
	]
}

const remove = (messages: messageType[], id: number): messageType[] => {
	return messages.filter(m => m.id !== id)
}

const messageReducer: Reducer<MessageState> = (
	state = initialState,
	action
) => {
	switch (action.type) {
		case catalogActionTypes.ADD_MESSAGE: {
			return {
				...state,
				message: push(state.message, action.payload)
			}
		}
		case catalogActionTypes.SET_VISIBILITY: {
			return {
				...state,
				message: remove(state.message, action.payload)
			}
		}
		default:
			return state
	}
}

export default messageReducer
