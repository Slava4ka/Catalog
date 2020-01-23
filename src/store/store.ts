import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import catalogReducer from './catalog/catalog-reducer'
import { CartState, CatalogState, MessageState } from './types'
import messageReducer from './message/message-reducer'
import cartReducer from './cart/cart-reducer'
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'

const cartPersistConfig = {
	key: 'cartStore',
	storage
}

export interface ApplicationState {
	catalog: CatalogState
	messages: MessageState
	cartPersist: CartState
	//cart: CartState
}

const reducers = combineReducers({
	catalog: catalogReducer,
	messages: messageReducer,
	cartPersist: persistReducer(cartPersistConfig, cartReducer)
	//cart: cartReducer
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

export const persistor = persistStore(store)

export default store
