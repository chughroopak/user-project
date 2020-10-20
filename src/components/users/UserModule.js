import React from 'react';
import { Route } from 'react-router-dom';
import CreateUser from './CreateUser';
import ViewAllUsers from './ViewAllUsers';
export default () => {
	return (
		<div className='container'>
			<Route exact path='/users/create' component={CreateUser} />
			<Route exact path='/users/view' component={ViewAllUsers} />
		</div>
	);
};
