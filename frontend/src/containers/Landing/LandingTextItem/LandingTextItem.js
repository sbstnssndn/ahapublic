import React from 'react';

const LandingTextItem = (props) => (
	<div className="d-flex">
		<div className="p-4 align-self-center">
			<span style={{fontSize: '1.2em', color: 'Dodgerblue'}}>
					<i className="fas fa-check-square fa-2x"></i>
			</span>
		</div>
		<div className="p-4 align-self-end">
			{props.children}
		</div>
	</div>
);

export default LandingTextItem;