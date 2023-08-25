const React = require('react');
const client = require('../client');
const {Link} = require('react-router-dom');

class HomePage extends React.Component {
	constructor(props) {
		super(props);
		this.state = { libros: [], autores: [], bibliotecas: [] };
	}
	componentDidMount() {

		client({ method: 'GET', path: '/api/libros' }).done(response => {
			this.setState({ libros: response.entity._embedded.libros });
		});

		client({ method: 'GET', path: '/api/autores' }).done(response => {
			this.setState({ autores: response.entity._embedded.autores });
		});

		client({ method: 'GET', path: '/api/bibliotecas' }).done(response => {
			this.setState({ bibliotecas: response.entity._embedded.bibliotecas });
		});

	}
	render() {
		return (
			<>
				<h1>EC4-Anticona</h1>

				<div style={  {"width": "100%", "display": "flex"}   }>
					<div style={{"width": "calc(100% / 3)"}}>
						<Titulo entidad="Bibliotecas" emoji="👩🏼‍🎤" />
						<BibliotecaList bibliotecas={this.state.bibliotecas} />
						
					</div>
				</div>

			</>
		)
	}
}

const Titulo = (props) => {
	return (
		<>
			<hr />
			<h2>{props.emoji} - {props.entidad}</h2>
			<hr />
			Lista completa de {props.entidad.toLowerCase()}
		</>
	)
}


class LibroList extends React.Component {
	render() {
		const libros = this.props.libros.map(libro =>
			<Libro key={libro._links.self.href} libro={libro} />
		);
		return (
			<table border="1">
				<tbody>
					<tr>
						<th>Nombre</th>
						<th>Año</th>
						<th>Acciones</th>
					</tr>
					{libros}
				</tbody>
			</table>
		)
	}
}

class AutorList extends React.Component {
	render() {
		const autores = this.props.autores.map(autor =>
			<Autor key={autor._links.self.href} autor={autor} />
		);
		return (
			<table border="1">
				<tbody>
					<tr>
						<th>Nombre</th>
						<th>Acciones</th>
					</tr>
					{autores}
				</tbody>
			</table>
		)
	}
}

class BibliotecaList extends React.Component {
	render() {
		const bibliotecas = this.props.bibliotecas.map(biblioteca =>
			<Biblioteca key={biblioteca._links.self.href} biblioteca={biblioteca} />
		);
		return (
			<table border="1">
				<tbody>
					<tr>
						<th>Nombre</th>
						<th>Acciones</th>
					</tr>
					{bibliotecas}
				</tbody>
			</table>
		)
	}
}

class Libro extends React.Component {
	render() {
		const id = this.props.libro._links.self.href.split("/").slice(-1)
		return (
			<tr>
				<td>{this.props.libro.nombre}</td>
				<td>{this.props.libro.año}</td>
				<td>
					<Link to={"/ver-libro/" + id}>Ver</Link> | 
					<Link to={"/editar-libro/" + id}>Editar</Link>
				</td>
			</tr>
		)
	}
}
class Autor extends React.Component {
	render() {
		const id = this.props.autor._links.self.href.split("/").slice(-1)

		return (
			<tr>
				<td>{this.props.autor.nombre}</td>
				<td>
					<Link to={"/ver-autor/" + id}>Ver</Link>
				</td>
			</tr>
		)
	}
}
class Biblioteca extends React.Component {
	render() {
		const id = this.props.biblioteca._links.self.href.split("/").slice(-1)

		return (
			<tr>
				<td>{this.props.biblioteca.nombre}</td>
				<td>
					<Link to={"/ver-biblioteca/" + id}>Ver</Link>
				</td>
			</tr>
		)
	}
}

module.exports = HomePage;