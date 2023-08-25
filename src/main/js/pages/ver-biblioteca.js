const React = require('react');
const { Link, useParams } = require('react-router-dom');
const { useState, useEffect } = require('react');
const client = require('../client');

const VerBibliotecaPage = () => {

    let { id } = useParams();
    const [biblioteca, setBiblioteca] = useState({});
    const [detalles, setDetalles] = useState([]);

    useEffect(() => {
        client({
            method: 'GET',
            path: '/api/bibliotecas/' + id
        }).done(response => setBiblioteca(response.entity))
        client({
            method: 'GET',
            path: '/api/bibliotecas/' + id + '/formacion'
        }).done(response => setDetalles(response.entity))
    }, [])


    return (
        <>
            <h1>Biblioteca</h1>
            <hr />

            <table border="1">
                <tbody>
                    <tr>
                        <th>Nombre</th>
                        <td>{biblioteca.nombre}</td>
                    </tr>
                </tbody>
            </table>
            <hr />

            <h2>Libros</h2>

            <table border="1">
                <thead>
                    <tr>
                        <th>Autor</th>
                        <th>Libro</th>
                    </tr>
                </thead>

                <tbody>
                    {detalles.map(detalle=>{
                        return(
                            <tr key={detalle.ID}>
                                <td>{detalle.AUTOR}</td>
                                <td>{detalle.LIBRO}</td>
                            </tr>
                        )
                    })}
                </tbody>

            </table>

            <hr />
            <Link to={`/ver-biblioteca/${id}/nuevo-detalle`}>Nuevo Libro</Link> |
            <Link to="/">Volver</Link>
        </>
    )
}

module.exports = VerBibliotecaPage;