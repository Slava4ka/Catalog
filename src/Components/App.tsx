import React from 'react'
import { ApplicationState, persistor } from '../store/store'
import { HashRouter, Route, withRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { compose, Store } from 'redux'
import Catalog from './Catalog/Catalog'
import Header from './Header/Header'
import Cart from './Cart/Cart'
import MessageBox from './MessageBox/MessageBox'
import { PersistGate } from 'redux-persist/integration/react'
import MySpinner from './common/MySpinner/MySpinner'

interface MainProps {
	store: Store<ApplicationState>
}

const App: React.FC = () => {
	return (
		<div className="App">
			<Header />
			<MessageBox />
			<Route path={'/catalog'} render={() => <Catalog />} />
			<Route path={'/cart'} render={() => <Cart />} />
		</div>
	)
}

const AppContainer = compose(withRouter)(App)

const AppDone: React.FC<MainProps> = ({ store }: MainProps) => (
	<HashRouter>
		<Provider store={store}>
			<PersistGate loading={<MySpinner />} persistor={persistor}>
				<AppContainer />
			</PersistGate>
		</Provider>
	</HashRouter>
)

export default AppDone
