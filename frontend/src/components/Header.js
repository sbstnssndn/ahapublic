//Dependencias
import React, { Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

//Assets
import './Header.css';

class Header extends Component {

    static propTypes = {
        title : PropTypes.string.isRequired,
        menu : PropTypes.array.isRequired
    };

    render() {

        const { title , menu } = this.props;

        return(
            <div className="Header">

                <h2>  {title} </h2>

                <ul className="Menu">
                    {
                        menu && menu.map((link, key) =>
                            <li key={key}>
                                <Link to={link.url}> {link.title} </Link>
                            </li>
                        )
                    }
                </ul>

            </div>
        );
    }
}

export default Header;
