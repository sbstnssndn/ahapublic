import react from 'react';
import { ReactComponent } from '*.svg';

class CardMenu extends Component {

	state = {
		hover: false
	}

	render () {

		return (
			<ReactFragment>
				<Button
					className="btn-block py-2">
					<Link className="text-white" to="/">
						<h2>
							<i className="fas fa-address-card"></i>
						</h2>
						<h5>Datos personales</h5>
					</Link>
				</Button>
				<Button className="btn-block py-2" variant="outline-secondary">
					<Link className="text-secondary" to="/">
						<h2>
							<i className="fas fa-briefcase"></i>
						</h2>
						<h5>Datos laborales</h5>
					</Link>
				</Button>
				<Button className="btn-block py-2" variant="outline-secondary">
					<Link className="text-secondary" to="/">
						<h2>
							<i className="fas fa-user"></i>
						</h2>
						<h5>Mi cuenta</h5>
					</Link>
				</Button>
			</ReactFragment>
		)

	}

}