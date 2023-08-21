const React = require('react');
const { Link, useParams } = require('react-router-dom');
const {useState, useEffect} = require('react');
const client = require('../client');

const VerAutorPage = () => {

    let { id } = useParams();
    const [autor, setAutor] = useState({});

    useEffect(() => {
        client({
            method: 'GET',
            path: '/api/autores/' + id
        }).done(response=>setAutor(response.entity))
    }, [])


    return (
        <>
            <h1>Ver Autor</h1>

            <table>
                <tr>
                    <th>Nombre</th>
                    <td>{autor.nombre}</td>
                </tr>
            </table>

            <Link to="/">Volver</Link>
        </>
    )

}

module.exports = VerAutorPage;