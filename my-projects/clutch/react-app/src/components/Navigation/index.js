import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Navigation.css';

function Navigation() {

	const sessionUser = useSelector(state => state.session.user);

	let sessionLinks;

	if (sessionUser) {
		sessionLinks = (
			<>
				<div className="session-links">

					<div>TODO ADD LOGOUT, ADD CONTRIBUTE</div>

				</div>
			</>
		)
	} else {
		sessionLinks = (
			<>

				<div className="session-links">
					<div>TODO ADD SIGN UP</div>
				</div>

			</>
		)
	}

	return (
		<>
			<div className='nav-main'>
				<div className="nav-title">Clutch</div>
				{sessionLinks}
			</div>
		</>
	)

}

export default Navigation;
