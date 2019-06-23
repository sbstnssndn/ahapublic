import React from 'react';
import Button from 'react-bootstrap/Button';
import { USER_TYPE_AHA } from '../../constants';
import LoginButton from '../Navigation/LoginButton';

const NavigationUserOptions = ( props ) => {

	let userOptions = null;
	if (props.isAuthenticated) {
		if (props.userType === USER_TYPE_AHA) {
			userOptions = (
				<Button variant="outline-secondary" onClick={() => props.handleLogout('/login')}>
					<i className="fas fa-user-times pr-2"></i> Salir AHA
				</Button>
			);
		} else {
			userOptions = (
				<Button variant="outline-secondary" onClick={() => props.handleLogout('/login')}>
					<i className="fas fa-user-times pr-2"></i> Cerrar sesión
				</Button>
			);
		}
	} else {
		userOptions = <LoginButton />;
	}
	
	return (
		<React.Fragment>
			{ userOptions }
		</React.Fragment>
	);
}

export default NavigationUserOptions;