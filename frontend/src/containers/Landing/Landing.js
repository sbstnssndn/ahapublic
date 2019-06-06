import React, { Component } from 'react';
import NavbarLanding from '../../components/NavbarLanding/NavbarLanding';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './Landing.module.css';
import LandingText from './LandingText/LandingText';
import LandingForm from './LandingForm/LandingForm';



class Landing extends Component {

	render () {
		return (
			<React.Fragment>
				<NavbarLanding />

				<div id="home-section">
					<div className="dark-overlay">
						<Container className="home-inner">
							<Row>
								<Col lg={8} className="d-none d-lg-block">
									<LandingText />
								</Col>

								<Col lg={4}>
									<LandingForm />
								</Col>
							</Row>
						</Container>
					</div>
				</div>
			</React.Fragment>
		);
	}

}

export default Landing;