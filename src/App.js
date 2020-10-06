import React from 'react';
import NavBar from './Components/NavBar/NavBar';
import Buscador from './Components/Buscador/Buscador';
import Favoritos from './Components/Favoritos/Favoritos';
import MovieDetail from './Components/MovieDetail/MovieDetail';
import RenderMovies from './Components/RenderMovies/RenderMovies';
import { Route } from 'react-router-dom';

//Componete App
function App() {
	//Render
	return (
		<>
			{/* Generamos las rutas de nuestra app */}
			<NavBar />
			<Route exact path="/" component={Buscador} />
			<Route exact path="/" component={RenderMovies} />
			<Route path="/Favs" component={Favoritos} />
			<Route path="/movieDetail/:id" component={MovieDetail} />
		</>
	);
}

export default App;
