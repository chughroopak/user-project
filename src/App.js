import React, { lazy, Suspense } from 'react';
import Navbar from './components/layouts/Navbar';
import { Provider } from 'react-redux';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect
} from 'react-router-dom';

import { rrfProps, store } from './store';
const UserModule = lazy(() => import('./components/users/UserModule'));
function App() {
	return (
		<Provider store={store}>
			<ReactReduxFirebaseProvider {...rrfProps}>
				<Router>
					<div className='App'>
						<Navbar />
						<Switch>
							<Route
								exact
								path='/'
								render={() => {
									return <Redirect to='/users/create' />;
								}}
							/>
							<Suspense
								fallback={
									<h3 className='display-4 text-center'>Still Loading...</h3>
								}>
								<UserModule />
							</Suspense>
						</Switch>
					</div>
				</Router>
			</ReactReduxFirebaseProvider>
		</Provider>
	);
}

export default App;
