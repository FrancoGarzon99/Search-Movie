//Inicializamos el estado de nuestro store el importamos las acciones que queremos realizar en nuestras App
const initialState = {
	peliculasEncontradas: [], //Aqui se guardaran todas las peliculas que pidamos a la Api
	peliculasFavoritas: [], // Aqui se guardaran nuestras peliculas favoritas!
	detallePelicula: {}, // Aqui se guardara todos los datos de una pelicula(la que nosotros seleccionemos)
};
//Creamos nuestros casos de  reducers
const Reducers = (state = initialState, action) => {
	switch (action.type) {
		case 'LISTA_DE_PELICULAS':
			return {
				...state,
				peliculasEncontradas: action.payload,
			};
		case 'DETALLE_DE_PELICULA':
			return {
				...state,
				detallePelicula: action.payload,
			};
		case 'AGREGAR_PELICULA_FAVORITA':
			return {
				...state,
				peliculasFavoritas: state.peliculasFavoritas.concat(action.payload),
			};
		case 'REMOVER_PELICULA_FAVORITA':
			return {
				...state,
				peliculasFavoritas: state.peliculasFavoritas.filter(
					(item) => item.title !== action.payload.title
				),
			};
		default:
			return state;
	}
};
export default Reducers;
