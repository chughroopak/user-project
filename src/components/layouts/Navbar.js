import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
	return (
		<div>
			<nav className='navbar navbar-expand-lg navbar-dark bg-dark p-3 mb-5'>
				<div className='container'>
					<Link className='navbar-brand' to='/'>
						User Portal
					</Link>
					<button
						className='navbar-toggler'
						type='button'
						data-toggle='collapse'
						data-target='#navbarSupportedContent'
						aria-controls='navbarSupportedContent'
						aria-expanded='false'
						aria-label='Toggle navigation'>
						<span className='navbar-toggler-icon'></span>
					</button>

					<div
						className='collapse navbar-collapse '
						id='navbarSupportedContent'>
						<ul className='navbar-nav mr-auto'>
							<li className='nav-item'>
								<Link className='nav-link' to='/users/create'>
									Create User
								</Link>
							</li>
							<li className='nav-item'>
								<Link className='nav-link' to='/users/view'>
									View Users
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
}
