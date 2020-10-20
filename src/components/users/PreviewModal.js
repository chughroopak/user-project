import React, { Component } from 'react';
import { firestoreConnect } from 'react-redux-firebase';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

class PreviewModal extends Component {
	state = {
		name: '',
		gender: '',
		category: '',
		technology: [],
		mobile: '',
		email: ''
	};

	componentWillUnmount() {
		window.$('#previewModal').modal('hide');
	}

	componentDidUpdate(props) {
		let prevProps = props.props;
		const {
			name,
			gender,
			category,
			technology,
			mobile,
			email
		} = this.props.props;
		if (prevProps.name !== name) {
			this.setState({ name });
		}
		if (prevProps.email !== email) {
			this.setState({ email });
		}
		if (prevProps.category !== category) {
			this.setState({ category });
		}
		if (
			technology &&
			technology.length !== 0 &&
			technology.length !== this.state.technology.length
		) {
			this.setState({ technology });
		}

		if (prevProps.gender !== gender) {
			this.setState({ gender });
		}
		if (prevProps.mobile !== mobile) {
			this.setState({ mobile });
		}
	}

	onSubmit = e => {
		e.preventDefault();

		const newUser = this.state;

		const { firestore, history } = this.props;

		firestore.add({ collection: 'users' }, newUser).then(() => {
			history.push('/');
			alert('User Created Successfully!');
		});
	};

	render() {
		const { name, gender, category, technology, mobile, email } = this.state;
		console.log();
		return (
			<div
				className='modal fade'
				id='previewModal'
				tabIndex='-1'
				role='dialog'
				aria-labelledby='previewModalLabel'
				aria-hidden='true'>
				<div className='modal-dialog' role='document'>
					<div className='modal-content'>
						<div className='modal-header'>
							<h5 className='modal-title' id='previewModalLabel'>
								Please verify the information provided
							</h5>
							<button
								type='button'
								className='close'
								data-dismiss='modal'
								aria-label='Close'>
								<span aria-hidden='true'>&times;</span>
							</button>
						</div>
						<div className='modal-body'>
							<ul className='list-group'>
								<li className='list-group-item'>
									<strong>Name</strong>: {name}
								</li>
								<li className='list-group-item'>
									<strong>Gender</strong>: {gender}
								</li>
								<li className='list-group-item'>
									<strong>Email</strong>: {email}
								</li>
								<li className='list-group-item'>
									<strong>Mobile</strong>: {mobile}
								</li>
								<li className='list-group-item'>
									<strong>Category</strong>: {category}
								</li>
								<li className='list-group-item'>
									<strong>Technology</strong>: {technology.join(', ')}
								</li>
							</ul>
						</div>
						<div className='modal-footer'>
							<button
								type='button'
								className='btn btn-secondary'
								data-dismiss='modal'>
								Close
							</button>
							<button
								type='button'
								className='btn btn-primary'
								onClick={this.onSubmit}>
								Save changes
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

PreviewModal.propTypes = {
	firestore: PropTypes.object.isRequired,
	name: PropTypes.string,
	technology: PropTypes.array,
	category: PropTypes.string,
	gender: PropTypes.string,
	email: PropTypes.string,
	mobile: PropTypes.string
};

export default firestoreConnect()(withRouter(PreviewModal));
