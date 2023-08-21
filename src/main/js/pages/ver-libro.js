const React = require('react');
const { Link, useParams } = require('react-router-dom');
const {useState, useEffect} = require('react');
const client = require('../client');

const VerLibroPage = () => {

    let { id } = useParams();
    const [libro, setLibro] = useState({});

    useEffect(()=>{
        client({
            method: 'GET',
            path: '/api/libros/' + id
        }).done(response=>setLibro(response.entity))
    }, [])



    return (
        <>
            <h1>Ver Libro</h1>

            <table>
                <tr>
                    <th>Nombre</th>
                    <td>{libro.nombre}</td>
                </tr>
                <tr>
                    <th>Año</th>
                    <td>{libro.año}</td>
                </tr>
                <tr>
                    <th>Editorial</th>
                    <td>{libro.editorial}</td>
                </tr>
            </table>

            <Link to="/">Volver</Link>
        </>
    )

}

module.exports = VerLibroPage;