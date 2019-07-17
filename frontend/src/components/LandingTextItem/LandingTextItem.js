import React from 'react';

const LandingTextItem = ( props ) => (

	<div className="d-flex">
		<div className="p-4 align-self-center">
			<span style={{fontSize: '1.2em', color: props.color}}>
					<i className={props.iconClass}></i>
			</span>
		</div>
		<div className="p-4 align-self-end">
			{ props.children }
		</div>
	</div>

);

export default LandingTextItem;