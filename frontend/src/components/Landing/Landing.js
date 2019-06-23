import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import LandingText from '../LandingText/LandingText';
import RegisterForm from '../../containers/RegisterForm/RegisterForm';

import styles from './Landing.module.css';

const Landing = ( props ) => {
	return (
		<div className={styles.HomeSection}>
			<div className={styles.DarkOverlay}>
				<Container className={styles.HomeInner}>
					<Row>
						<Col lg={8} className="d-none d-lg-block">
							<LandingText />
						</Col>
						<Col lg={4}>
							<RegisterForm {...props} />
						</Col>
					</Row>
				</Container>
			</div>
		</div>
	)
}

export default Landing;