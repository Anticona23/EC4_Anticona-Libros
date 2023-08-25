const React = require('react');
const {useState, useEffect} = require('react');
const { Link,useParams } = require('react-router-dom');
const client = require('../client');

const NuevoDetallePage = () => {
    let { id } = useParams();

    const [autores, setAutores] = useState([])
    const [libros, setLibros] = useState([])
    
    const [idAutor, setIdAutor] = useState('')
    const [idLibro, setIdLibro] = useState('')

    const handleSubmit = (evento)=>{
        evento.preventDefault();
        client({
            method: 'POST',
            path: '/api/detalles',
            entity: {
                biblioteca: 'http://localhost:8080/api/bibliotecas/'+id,
                autor: 'http://localhost:8080/api/autores/'+idAutor,
                libro: 'http://localhost:8080/api/libros/'+idLibro},
            headers: {'Content-Type': 'application/json'}
        }).done(()=>{
           window.location = '/';
        })
    }

    useEffect(() => {
        client({
            method: 'GET',
            path: '/api/autores'
        }).done(response=>{
            setAutores(response.entity._embedded.autores)
        })
        client({
            method: 'GET',
            path: '/api/libros'
        }).done(response=>{
            setLibros(response.entity._embedded.libros)
        })

    },[])

    return (
        <>
            <h1>Nuevo Detalle de Libro</h1>
            <form onSubmit={handleSubmit}>

                <label htmlFor='autor'>Autor </label>
                <select name="autor" id="autor" onChange={(e)=>{setIdAutor(e.target.value)}}>
                    {autores.map(autor => {	
                        const value = autor._links.self.href.split('/').slice(-1)
                        return (
                            <option key={value} value={value}>[{autor.nombre}]</option>
                        )
                    })}
                </select><br />
                
                <label>Libro </label>
                <select name="libro" id="libro" onChange={(e)=>{setIdLibro(e.target.value)}}>
                    {libros.map(libro => {	
                        const value = libro._links.self.href.split('/').slice(-1)
                        return (
                            <option key={value} value={value}>({libro.nombre})</option>
                        )
                    })}
                </select><br />

                <input type="submit" value="Nuevo Detalle de libro" />

            </form>
            <Link to="/">Volver</Link>
        </>
    )
}

module.exports = NuevoDetallePage;