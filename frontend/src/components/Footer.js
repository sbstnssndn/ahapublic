//Dependencias
import React, { Component} from 'react';
import PropTypes from 'prop-types';

class Footer extends Component {

    static propTypes = {
        copyright : PropTypes.string.isRequired
    };

    render() {

        const { copyright } = this.props;

        return(
            <div className="Footer">


                <p>
                    {copyright}
                </p>

            </div>
        );
    }
}

export default Footer;
