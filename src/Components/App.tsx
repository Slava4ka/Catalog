import React from 'react'
import { ApplicationState } from '../store/store'
import { HashRouter, Route, withRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { compose, Store } from 'redux'
import Catalog from './Catalog/Catalog'
import Header from './Header/Header'
import Cart from './Cart/Cart'
import MessageBox from './MessageBox/MessageBox'

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
			<AppContainer />
		</Provider>
	</HashRouter>
)

export default AppDone
