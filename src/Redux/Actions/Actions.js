//Actions creators

const peliculasEncontradas = (payload) => {
	return { type: 'LISTA_DE_PELICULAS', payload };
};
const detalleDePelicula = (payload) => {
	return { type: 'DETALLE_DE_PELICULA', payload };
};
export const agregarPeliculaFavorita = (payload) => {
	return { type: 'AGREGAR_PELICULA_FAVORITA', payload };
};
export const removerPeliculaFavorita = (id) => {
	return { type: 'REMOVER_PELICULA_FAVORITA', id };
};

//Actions creators asincronas

export const fetchApi = (inputValue, pageResult) => {
	return async (dispatch) => {
		const urlData = await fetch(
			`http://www.omdbapi.com/?apikey=20dac387&s=${inputValue}&page=${pageResult}`
		);
		const urlJson = await urlData.json();
		dispatch(peliculasEncontradas(urlJson.Search));
	};
};
export const detalleFetchApi = (id) => {
	return async (dispatch) => {
		const urlData = await fetch(
			`http://www.omdbapi.com/?apikey=20dac387&i=${id}&plot=full`
		);
		const urlJson = await urlData.json();
		dispatch(detalleDePelicula(urlJson));
	};
};
