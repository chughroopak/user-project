import React from 'react';

export default function User({ user }) {
	const { name, category, gender, technology, email, mobile } = user;
	console.log(user);
	return (
		<div className='col col-md-4 col-sm-4 col-xs-12 m-0 p-1'>
			<div className='card'>
				<div className='card-header text-center'>
					<h4>{name}</h4>
				</div>
				<div className='card-body align-center'>
					<table className='table table-borderless'>
						<tbody>
							<tr>
								<th>Gender</th>
								<td>{gender}</td>
							</tr>
							<tr>
								<th>Category</th>
								<td>{category}</td>
							</tr>
							<tr>
								<th>Technology</th>
								<td>{technology ? technology.join() : ''}</td>
							</tr>
							<tr>
								<th>Email</th>
								<td>{email}</td>
							</tr>
							<tr>
								<th>Mobile</th>
								<td>{mobile}</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}
