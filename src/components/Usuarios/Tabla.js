import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Table, Button } from 'react-bootstrap';

const Tabla = (props) => {

	const ponerFilas = () => props.usuarios.map((usuario, key) => (
		<tr key={ usuario.id }>
			<td>
				{ usuario.name }
			</td>
			<td>
				{ usuario.email }
			</td>
			<td>
				{ usuario.website }
			</td>
			<td>
				<Button variant="danger"><Link to={ `/publicaciones/${key}`} className="white">Ver</Link></Button>
			</td>
		</tr>
	));

	return (
		<Table striped bordered hover variant="dark">
			<thead>
				<tr>
					<th>
						Nombre
					</th>
					<th>
						Correo
					</th>
					<th>
						Enlace
					</th>
					<th>
						Detalle
					</th>
				</tr>
			</thead>
			<tbody>
				{ ponerFilas() }
			</tbody>
		</Table>
	)
}

const mapStateToProps = (reducers) => {
	return reducers.usuariosReducer;
};

export default connect(mapStateToProps)(Tabla);