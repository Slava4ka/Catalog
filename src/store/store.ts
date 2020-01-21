import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import catalogReducer from './catalog/catalog-reducer'
import { CatalogState, MessageState } from './types'
import messageReducer from './message/message-reducer'

export interface ApplicationState {
	catalog: CatalogState
	messages: MessageState
}

const reducers = combineReducers({
	catalog: catalogReducer,
	messages: messageReducer
})

// Добавил composeEnhancers для работы приложения Redux dev tools
declare global {
	interface Window {
		// eslint-disable-next-line no-undef
		__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
	}
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
	reducers,
	composeEnhancers(applyMiddleware(thunkMiddleware))
)
export default store
