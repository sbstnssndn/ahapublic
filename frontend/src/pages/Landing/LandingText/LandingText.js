import React from 'react';
import LandingTextItem from '../LandingTextItem/LandingTextItem';

const LandingText = (props) => (
    <React.Fragment>
			<h1 className="display-6">¿Qué hacemos en AHA Inclusión?</h1>
			<LandingTextItem>
				AHA gestiona la diversidad y la inclusión laboral para personas en situación de discapacidad (PESD).
			</LandingTextItem>
			<LandingTextItem>
				AHA gestiona organizaciones, desde donde buscamos ser los mejores socios para alcanzar mejores resultados de negocio, a través de la Gestión de la Inclusión.
			</LandingTextItem>
		</React.Fragment>
);

export default LandingText;