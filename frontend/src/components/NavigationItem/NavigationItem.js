import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap'

const NavigationItem = ( props ) => {
	return (
		<LinkContainer {...props} to={props.to} className="px-4">
			<Nav.Link>
				{ props.children }
			</Nav.Link>
		</LinkContainer>
	);
}

export default NavigationItem;