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
export const removerPeliculaFavorita = (payload) => {
	return { type: 'REMOVER_PELICULA_FAVORITA', payload };
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
	// const apiData = async (url) => {
	// 	const urlApi = await fetch(url);
	// 	const urlApiJson = await urlApi.json();
	// 	return urlApiJson;
	// };
	// return {
	// 	type: 'DETALLE_DE_PELICULA',
	// 	payload: apiData(
	// 		`http://www.omdbapi.com/?apikey=20dac387&i=${id}&plot=full`
	// 	),
	// };
};
