import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import PropTypes from 'prop-types';
import User from './User';

class ViewAllUsers extends Component {
	render() {
		const { users } = this.props;
		if (users) {
			return (
				<div className='container'>
					<h3 className='display-3 text-center mb-4'>All Users</h3>
					<div className='row'>
						{users.map((user, key) => (
							<User user={user} key={key} />
						))}
					</div>
					<br />
				</div>
			);
		} else {
			return <h3 className='display-4 text-center'>Still Loading...</h3>;
		}
	}
}

ViewAllUsers.propTypes = {
	firestore: PropTypes.object.isRequired,
	users: PropTypes.array
};

export default compose(
	firestoreConnect([
		{
			collection: 'users'
		}
	]),
	connect((state, props) => ({
		users: state.firestore.ordered.users
	}))
)(ViewAllUsers);
