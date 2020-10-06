import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { detalleFetchApi } from '../../Redux/Actions/Actions';

//Componente MovieDetail
const MovieDetail = () => {
	//Usamos useDispatch para dispachar la accion detalleFetchApi y traer los datos de la pelicula seleccionada anteriormente
	const dispatch = useDispatch();
	//Usamos useParams para poder disponer de la id de la pelicula que fue seleccionada(Link)
	let { id } = useParams();
	//Cuando el componente se esta montando buscamos los datos a la Api y la guardamos en el store de redux
	useEffect(() => {
		dispatch(detalleFetchApi(id));
	}, [id, dispatch]);

	//Usamos useSelector para suscribirnos al store de Redux
	const state = useSelector((state) => state.detallePelicula);

	return (
		<>
			<h5>{state.Title}</h5>
		</>
	);
};

export default MovieDetail;
