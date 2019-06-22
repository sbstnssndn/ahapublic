import React from 'react';
import Tab from './Tab/Tab';
import { Link } from 'react-router-dom';
import { fixPath } from '../../util/common';

const Tabs = ( props ) => {
	return (
		<>
			<Link to={fixPath(props.match.url, 'cuenta')}>Cuenta</Link>
			<Tab />
		</>
	);
}

export default Tabs;