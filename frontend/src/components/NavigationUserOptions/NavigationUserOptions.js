import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { LinkContainer } from 'react-router-bootstrap'
import { USER_TYPE_POSTULANTE, USER_TYPE_EMPRESA, USER_TYPE_AHA } from '../../constants';
import LoginButton from '../Navigation/LoginButton';

const NavigationUserOptions = ( props ) => {

	let userOptions = null;
	switch (props.userType) {
		case USER_TYPE_POSTULANTE:
		case USER_TYPE_EMPRESA:
		case USER_TYPE_AHA:
			userOptions = (
				<LinkContainer to="/logout">
					<Nav.Link>
						<Button variant="outline-secondary">
							<i className="fas fa-user-times pr-2"></i> Cerrar sesión
						</Button>
					</Nav.Link>
				</LinkContainer>
			);
			break;
		default:
			userOptions = <LoginButton />;
			break;
	}

	return (
		<React.Fragment>
			{ userOptions }
		</React.Fragment>
	);
}

export default NavigationUserOptions;