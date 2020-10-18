import React, { lazy, Suspense } from 'react';
import Navbar from './components/layouts/Navbar';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect
} from 'react-router-dom';
const UserModule = lazy(() => import('./components/users/UserModule'));
function App() {
	return (
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
					<Suspense fallback={<h3>Still Loading...</h3>}>
						<UserModule />
					</Suspense>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
