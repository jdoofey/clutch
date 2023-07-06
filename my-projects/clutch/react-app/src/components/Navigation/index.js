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


				<ul class="nav-links">



					<div class="menu">

						<li><a href="/">Something</a></li>
						<li><a href="/">Another one</a></li>

						<li class="dropdown-list-ele">
							<a href="/">Dropdown</a>
							<ul class="dropdown">
								<li><a href="/">Dropdown 1 </a></li>
								<li><a href="/">Dropdown 2</a></li>
								<li><a href="/">Dropdown 2</a></li>
								<li><a href="/">Dropdown 3</a></li>
								<li><a href="/">Dropdown 4</a></li>
							</ul>

						</li>

						<li><a href="/">+1</a></li>
						<li><a href="/">Contact</a></li>
					</div>
				</ul>
				{sessionLinks}
			</div>
		</>
	)

}

export default Navigation;
