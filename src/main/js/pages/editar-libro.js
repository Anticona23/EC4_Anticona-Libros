const React = require('react');
const {useState, useEffect} = require('react');
const { Link, useParams } = require('react-router-dom');
const client = require('../client');

const EditarLibroPage = ()=>{

    const [libro, setLibro] = useState({})
    let { id } = useParams();

    useEffect(()=>{
        client({
            method: 'GET',
            path: '/api/libros/'+id
        }).done((response)=>setLibro(response.entity))
    },[])

    const handleSubmit = (evento)=>{
        evento.preventDefault();
        client({
            method: 'PATCH',
            path: '/api/libros/'+id,
            entity: libro,
            headers: {'Content-Type': 'application/json'}
        }).done(()=>window.location = '/')
    }

    return(
        <>
            <h1>Editar Libro</h1>

            <form onSubmit={handleSubmit}>
                <label>Nombre</label>
                <input type="text" id="nombre" name="nombre" value={libro.nombre} onChange={(e)=>setLibro({...libro, nombre: e.target.value})} /> <br/>
                <label>Año</label>
                <input type="text" id="año" name="año" value={libro.año} onChange={(e)=>setLibro({...libro, año: e.target.value})}  /> <br/>
                <label>Editorial</label>
                <input type="text" id="editorial" name="editorial" value={libro.editorial} onChange={(e)=>setLibro({...libro, editorial: e.target.value})}  /> <br/>
                
                <input type="submit" value="Editar Libro" />
            </form>

        </>
    )
}

module.exports = EditarLibroPage