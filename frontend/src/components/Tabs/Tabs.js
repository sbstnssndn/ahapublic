import React, { Component } from 'react';

import Tab from './Tab/Tab';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Tabs extends Component {

	state = {
		activeTab: this.props.children[0].props.label,
	};

  onClickTabItem = (tab) => {
    this.setState({ activeTab: tab });
  }

  render() {
    const {
      onClickTabItem,
      props: {
				children,
				routes,
      },
      state: {
        activeTab,
      }
    } = this;

    return (
			<>
				<Container>
					<Row>
						<Col md={9} className="">

							{ routes }

						</Col>
						<Col md={3}>

							{children.map((child) => {
								const { label, to, icon } = child.props;

								return (
									<Tab
										activeTab={activeTab}
										key={label}
										label={label}
										icon={icon}
										to={to}
										onClick={onClickTabItem}
									/>
								);
							})}							

						</Col>
					</Row>
				</Container>
			</>
    );
  }
}

export default Tabs;