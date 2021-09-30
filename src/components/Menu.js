import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';

const Menu = (props) => (
	<Navbar bg="secondary" variant="dark" style={{marginBottom: 30}}>
		<Container>
		<Navbar.Brand>BLOGapp</Navbar.Brand>
			<Nav className="me-auto">
				<Nav.Link><Link to='/' className="white">Usuarios</Link></Nav.Link>
				<Nav.Link><Link to='/tareas' className="white">Tareas</Link></Nav.Link>
			</Nav>
		</Container>
	</Navbar>
);

export default Menu;