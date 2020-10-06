import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { agregarPeliculaFavorita } from '../../Actions/Actions';
import { NavLink } from 'react-router-dom';

//Componente RenderMovies
const RenderMovies = () => {
	//Usamos useSelector para suscribirnos al store de Redux
	const state = useSelector((state) => state.peliculasEncontradas);
	const dispatch = useDispatch();
	console.log(state);
	return (
		<>
			RenderMovies
			{state &&
				state.map((movie, i) => {
					return (
						<div key={i}>
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
