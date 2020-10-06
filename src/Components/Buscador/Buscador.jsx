import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchApi } from '../../Redux/Actions/Actions';

//Componente Buscador de peliculas( dispatch a Api )
const Buscador = () => {
	//Hooks redux Dispatch
	const dispatch = useDispatch();
	//State donde guardaremos el estado del input
	const [nameMovie, setNameMovie] = useState('');
	//Aqui dispachamos la accion fetchApi a la cual le pasamos como arg el valor del input, luego seteamos el value del input a vacio
	const busquedaEnviada = (e) => {
		e.preventDefault();
		dispatch(fetchApi(nameMovie));
		setNameMovie('');
	};

	//Render
	return (
		<>
			<div>
				BUSCADOR
				<form onSubmit={busquedaEnviada}>
					<input
						placeholder="Pelicula"
						type="text"
						value={nameMovie}
						onChange={(e) => setNameMovie(e.target.value)}
					/>
					<button type="submit">Buscar</button>
				</form>
			</div>
		</>
	);
};

export default Buscador;
