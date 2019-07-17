import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Tab extends Component {

	onClick = () => {
    const { label, onClick } = this.props;
    onClick(label);
  }

  render() {
    const {
      onClick,
      props: {
        activeTab,
				label,
				icon,
				to,
      },
    } = this;

    let className = 'btn btn-secondary btn-block';

    if (activeTab === label) {
      className = 'btn btn-primary btn-block';
    }

    return (
			<Link className={className} role="button" to={to} onClick={onClick}>
				<h2>
					<i className={icon}></i>
				</h2>
				<h6>{ label }</h6>
			</Link>		
    );
  }
}

export default Tab;