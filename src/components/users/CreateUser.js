import React, { Component } from 'react';
import TextInputGroup from '../layouts/TextInputGroup';
import validator from 'validator';
import classnames from 'classnames';

class CreateUser extends Component {
	state = {
		name: '',
		email: '',
		gender: '',
		mobile: '',
		category: '',
		technology: [],
		errors: {}
	};

	onChange = e => this.setState({ [e.target.name]: e.target.value });

	onTechnologyChange = e => {
		let { technology } = this.state;
		const value = e.target.value;
		let found = false;
		technology.forEach((item, index) => {
			if (item === value) {
				technology.splice(index, 1);
				found = true;
			}
		});
		if (!found) {
			technology.push(value);
		}
		this.setState({ technology: technology });
	};

	onSubmit = e => {
		e.preventDefault();
		console.log('On Submit');
		const { name, email, mobile, gender, category, errors } = this.state;

		if (!gender || gender === '') {
			errors.gender = 'Please Choose a gender';
		}

		if (!name || name === '') {
			errors.name = 'Name is required';
		} else if (name.length < 2 || name.length > 30) {
			errors.name = 'Name should be between 2 and 30 characters';
		}
		// else if (name.match('/A-Za-z0-9 /')) {
		// 	errors.name = 'Name can have only alphabets, numerals and space.';
		// }

		if (!email || email === '') {
			errors.email = 'Email is required';
		} else if (validator.isEmail(email)) {
			errors.email('Please provide a valid Email');
		}
		if (Object.keys(errors).length !== 0) {
			this.setState({ errors });
			return;
		}

		window.$('#exampleModal').modal('show');
	};

	render() {
		const { name, email, mobile, category, gender, errors } = this.state;
		return (
			<div>
				<h1>Create User</h1>
				<div className='row mx-auto'>
					<div className=' card card-body col'>
						<form onSubmit={this.onSubmit}>
							<TextInputGroup
								label='Name'
								name='name'
								placeholder='Name'
								onChange={this.onChange}
								value={name}
								error={errors.name}
							/>
							<div>
								<label htmlFor='gender-field-set'>Gender</label>
								<fieldset
									className={classnames('form-group', {
										'is-invalid': errors.gender
									})}
									name='gender-field-set'>
									<div className='form-check form-check-inline'>
										<input
											className='form-check-input'
											type='radio'
											name='gender'
											id='M'
											value='M'
											onChange={this.onChange}
										/>
										<label className='form-check-label' htmlFor='inlineRadio1'>
											Male
										</label>
									</div>
									<div className='form-check form-check-inline'>
										<input
											className='form-check-input'
											type='radio'
											name='gender'
											id='F'
											value='F'
											onChange={this.onChange}
										/>
										<label className='form-check-label' htmlFor='inlineRadio1'>
											Female
										</label>
									</div>
								</fieldset>
								{errors.gender && (
									<div className='invalid-feedback'>{errors.gender}</div>
								)}
							</div>
							<TextInputGroup
								label='Email'
								name='email'
								placeholder='Email'
								type='email'
								onChange={this.onChange}
								value={email}
								error={errors.email}
							/>
							<TextInputGroup
								label='Mobile'
								name='mobile'
								placeholder='Mobile'
								type='tel'
								onChange={this.onChange}
								value={mobile}
								error={errors.mobile}
							/>
							<div className='form-group'>
								<label htmlFor='category'>Category</label>
								<select
									className='form-control form-control-lg'
									id='category'
									name='category'
									onChange={this.onChange}
									placeholder='Category'
									value={category}>
									<option disabled hidden style={{ display: 'none' }} value=''>
										Select a category
									</option>
									<option value='General'>General</option>
									<option value='SC/ST'>SC/ST</option>
									<option value='OBC'>OBC</option>
								</select>
							</div>
							<div>
								<label htmlFor='technology-field-set'>Technology</label>
								<fieldset className='form-group' name='technology-field-set'>
									<div className='form-check form-check-inline'>
										<input
											className='form-check-input'
											type='checkbox'
											id='checkbox1'
											value='C'
											onChange={this.onTechnologyChange}
										/>
										<label className='form-check-label' htmlFor='checkbox1'>
											C
										</label>
									</div>
									<div className='form-check form-check-inline'>
										<input
											className='form-check-input'
											type='checkbox'
											id='checkbox2'
											value='C++'
											onChange={this.onTechnologyChange}
										/>
										<label className='form-check-label' htmlFor='checkbox2'>
											C++
										</label>
									</div>
									<div className='form-check form-check-inline'>
										<input
											className='form-check-input'
											type='checkbox'
											id='checkbox3'
											value='Java'
											onChange={this.onTechnologyChange}
										/>
										<label className='form-check-label' htmlFor='checkbox3'>
											Java
										</label>
									</div>
									<div className='form-check form-check-inline'>
										<input
											className='form-check-input'
											type='checkbox'
											id='checkbox4'
											value='Python'
											onChange={this.onTechnologyChange}
										/>
										<label className='form-check-label' htmlFor='checkbox4'>
											Python
										</label>
									</div>
									<div className='form-check form-check-inline'>
										<input
											className='form-check-input'
											type='checkbox'
											id='checkbox5'
											value='JavaScript'
											onChange={this.onTechnologyChange}
										/>
										<label className='form-check-label' htmlFor='checkbox5'>
											JavaScript
										</label>
									</div>
								</fieldset>
							</div>
							<input
								type='submit'
								className='btn btn-success btn-block btn-lg '
								value='Preview'
							/>
						</form>
					</div>
				</div>
				<div
					className='modal fade'
					id='exampleModal'
					tabIndex='-1'
					role='dialog'
					aria-labelledby='exampleModalLabel'
					aria-hidden='true'>
					<div className='modal-dialog' role='document'>
						<div className='modal-content'>
							<div className='modal-header'>
								<h5 className='modal-title' id='exampleModalLabel'>
									Modal title
								</h5>
								<button
									type='button'
									className='close'
									data-dismiss='modal'
									aria-label='Close'>
									<span aria-hidden='true'>&times;</span>
								</button>
							</div>
							<div className='modal-body'>...</div>
							<div className='modal-footer'>
								<button
									type='button'
									className='btn btn-secondary'
									data-dismiss='modal'>
									Close
								</button>
								<button type='button' className='btn btn-primary'>
									Save changes
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default CreateUser;
