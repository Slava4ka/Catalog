import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import catalogReducer from './catalog-reducer'
import { CatalogState } from './types'

export interface ApplicationState {
	catalog: CatalogState
}

const reducers = combineReducers({
	catalog: catalogReducer
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
