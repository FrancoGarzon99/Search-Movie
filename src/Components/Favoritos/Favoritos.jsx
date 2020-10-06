import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removerPeliculaFavorita } from '../../Redux/Actions/Actions';
import { Link } from 'react-router-dom';

//Componente Favoritos
export const Favoritos = () => {
	//Usamos useDispatch para dispachar la accion removePeliculaFavorita
	const dispatch = useDispatch();
	//Usamos useSelector para suscribirnos al store de Redux
	const state = useSelector((state) => state.peliculasFavoritas);

	//Render
	return (
		<>
			{state &&
				state.map((movie, i) => {
					return (
						<div key={i}>
							{/* Recorremos el array que tenemos guardado en nuestro store de redux */}
							<Link to={`/movieDetail/${movie.id}`}>
								<h5>{movie.title}</h5>
							</Link>
							{/* Dispachamos la accion Remover pelicula y eliminamos la pelicula seleccionada */}
							<button
								onClick={() => dispatch(removerPeliculaFavorita(movie.id))}
							>
								x
							</button>
						</div>
					);
				})}
		</>
	);
};
export default Favoritos;
