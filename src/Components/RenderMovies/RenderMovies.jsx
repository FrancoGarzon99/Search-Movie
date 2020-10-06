import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { agregarPeliculaFavorita } from '../../Redux/Actions/Actions';
import { NavLink } from 'react-router-dom';

//Componente RenderMovies
const RenderMovies = () => {
	//Importamos useDispatch para poder dispachar la accion de agregar peliculas a mis favoritos
	const dispatch = useDispatch();
	//Usamos useSelector para suscribirnos al store de Redux
	const state = useSelector((state) => state.peliculasEncontradas);

	//Render
	return (
		<>
			{/* mapeamos el estado y mostramos los datos traidos de la Api */}
			{state &&
				state.map((movie, i) => {
					return (
						<div key={i}>
							{/* Dispachamos la accion de agregar a favoritos */}
							<button
								onClick={() =>
									dispatch(
										agregarPeliculaFavorita({
											title: movie.Title,
											id: movie.imdbID,
										})
									)
								}
							>
								Fav
							</button>
							{/* Usamos navLink para dirigir a la pagina de detalle de la pelicula seleccionada */}
							<NavLink to={`/movieDetail/${movie.imdbID}`}>
								<img src={movie.Poster} alt="poster" />
							</NavLink>
							<h5>{movie.Title}</h5>
							<h6>{movie.Type}</h6>
							<h6>{movie.Year}</h6>
						</div>
					);
				})}
		</>
	);
};

export default RenderMovies;
