const React = require('react');
const ReactDOM = require('react-dom');
const {createBrowserRouter, RouterProvider} = require('react-router-dom');

const HomePage = require('./pages/home');
const NuevoAutorPage = require('./pages/nuevo-autor');
const VerAutorPage = require('./pages/ver-autor');

const NuevoLibroPage = require('./pages/nuevo-libro');
const VerLibroPage = require('./pages/ver-libro');
const EditarLibroPage = require('./pages/editar-libro');

const VerBibliotecaPage = require('./pages/ver-biblioteca');

const NuevoDetallePage = require('./pages/nuevo-detalle');


const router = createBrowserRouter([
	{ path: '/', element: <HomePage /> },
	{ path: '/ver-libro/:id', element: <VerLibroPage /> },
	{ path: '/nuevo-libro', element: <NuevoLibroPage /> },
	{ path: '/ver-autor/:id', element: <VerAutorPage /> },
	{ path: '/nuevo-autor', element: <NuevoAutorPage /> },
	{ path: '/editar-libro/:id', element: <EditarLibroPage /> },
	{ path: '/ver-biblioteca/:id', element: <VerBibliotecaPage /> },
	{ path: '/ver-biblioteca/:id/nuevo-detalle', element: <NuevoDetallePage /> },


])


ReactDOM.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
	document.getElementById('react'))
