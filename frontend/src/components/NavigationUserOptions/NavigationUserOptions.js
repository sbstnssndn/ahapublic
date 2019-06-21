import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { LinkContainer } from 'react-router-bootstrap'
import { USER_TYPE_POSTULANTE, USER_TYPE_EMPRESA, USER_TYPE_AHA } from '../../constants';
import LoginButton from '../Navigation/LoginButton';

const NavigationUserOptions = ( props ) => {

	let userOptions = null;
	if (props.isAuthenticated) {
		userOptions = (
			<Button variant="outline-secondary" onClick={() => props.handleLogout('/login')}>
				<i className="fas fa-user-times pr-2"></i> Cerrar sesión
			</Button>
		);
	} else {
		userOptions = <LoginButton />;
	}
	/*
	switch (props.userType) {
		case USER_TYPE_POSTULANTE:
		case USER_TYPE_EMPRESA:
		case USER_TYPE_AHA:
			userOptions = (
				<Button variant="outline-secondary" onClick={() => props.handleLogout('/login')}>
					<i className="fas fa-user-times pr-2"></i> Cerrar sesión
				</Button>
			);
			break;
		default:
			userOptions = <LoginButton />;
			break;
	}
	*/
	return (
		<React.Fragment>
			{ userOptions }
		</React.Fragment>
	);
}

export default NavigationUserOptions;