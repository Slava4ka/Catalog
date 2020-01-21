import { MessageState, catalogActionTypes, messageType } from '../types'
import { Action, ActionCreator, Reducer } from 'redux'
import { action } from 'typesafe-actions'

const initialState: MessageState = {
	message: []
}

/*
const push = (messages: messageType[], newMessage: messageType): messageType[]=> {
return
}


const remove = (): messageType[]={}
*/
const messageReducer: Reducer<MessageState> = (
	state = initialState,
	action
) => {
	switch (action.type) {
		case catalogActionTypes.ADD_MESSAGE: {
			return {
				...state,
				message: [
					...state.message,
					{
						id: state.message.length,
						text: action.payload.text,
						time: action.payload.time,
						isVisible: true
					}
				]
			}
		}
		case catalogActionTypes.SET_VISIBILITY: {
			return {
				...state,
				message: state.message.filter(m => {
					return m.id !== action.payload
				})
				/*
                message: state.message.map(m => {
					if (m.id === action.payload) {
						return { ...m, isVisible: false }
					} else return m
				})
                 */
			}
		}
		default:
			return state
	}
}

export default messageReducer
