import { API_BASE_URL, ACCESS_TOKEN } from '../constants';
//import axios from 'axios';

const request = (options) => {
	const headers = new Headers({
			'Content-Type': 'application/json'
	})
	
	// primero debe settearse la propiedad accessToken en el localstorage, se hace en Login.js
	// localStorage.setItem(ACCESS_TOKEN, response.accessToken);
	if(localStorage.getItem(ACCESS_TOKEN)) {
		headers.append('Authorization', 'Bearer ' + localStorage.getItem(ACCESS_TOKEN))
	}
	const defaults = { headers: headers };
	// a un objeto vacio {} le copio (append) los objetos defaults y options
	// también copio lo mismo a options
	/* 
	*	For deep cloning, we need to use other alternatives
	*	because Object.assign() copies property values. If the source value is a
	*	reference to an object, it only copies that reference value.
	*/
	options = Object.assign({}, defaults, options);

	//console.log("Estoy en APIUtils/request(), response:");

	let ok = null;
	return fetch(options.url, options)
		.then(response => {
			ok = response.ok;
			return response.json();
		})
		.then(json => {
			if (!ok) {
				return Promise.reject(json);
			}
			return json;
		});
}

// loginRequest = { email: 'asdf', password: 'asdf' }
export const login = (loginRequest) => {
	return request({
		url: API_BASE_URL + "/auth/signin",
		method: 'POST',
		body: JSON.stringify(loginRequest)
	});
}

export const getCurrentUser = () => {
	//console.log("Estoy en APIUtils/getCurrentUser()")
	if(!localStorage.getItem(ACCESS_TOKEN)) {
		//console.log("getCurrentUser(): no está setteado el token")
		return Promise.reject("No está disponible el token de acceso.");
	}

	return request({
			url: API_BASE_URL + "/user/me",
			method: 'GET'
	});
}

export const signup = (signupRequest) => {
	return request({
			url: API_BASE_URL + "/user/add",
			method: 'POST',
			body: JSON.stringify(signupRequest)
	});
}

export const updateCuenta = (id, accountData) => {
	return request({
			url: API_BASE_URL + `/user/${id}/add`,
			method: 'PUT',
			body: JSON.stringify(accountData)
	});
}

export const updatePerfilCandidato = (id, perfilCandidato) => {
	return request({
			url: API_BASE_URL + `/user/${id}/perfilCandidato`,
			method: 'PUT',
			body: JSON.stringify(perfilCandidato)
	});
}

export const updatePerfilLaboral = (id, updatePerfilLaboral) => {
	return request({
			url: API_BASE_URL + `/user/${id}/perfilLaboral`,
			method: 'PUT',
			body: JSON.stringify(updatePerfilLaboral)
	});
}

export const updatePerfilEmpresa = (id, perfilEmpresa) => {
	return request({
			url: API_BASE_URL + `/user/${id}/perfilEmpresa`,
			method: 'PUT',
			body: JSON.stringify(perfilEmpresa)
	});
}

export const createOferta = (id, oferta) => {
	return request({
			url: API_BASE_URL + `/user/${id}/oferta`,
			method: 'POST',
			body: JSON.stringify(oferta)
	});
}

/*TODO: generalizar las 4 funciones de arriba en esta:
export const updatePerfil = (endpoint, data) => {
	return request({
			url: API_BASE_URL + endpoint,
			method: 'PUT',
			body: JSON.stringify(data)
	});
}*/



export const addExperiencia = (id, experiencia) => {
	//console.log(JSON.stringify(experiencia))
	return request({
			url: API_BASE_URL + `/user/${id}/experiencia`,
			method: 'POST',
			body: JSON.stringify(experiencia)
	});
}

export const get = (endpoint) => {
	return request({
			url: endpoint,
			method: 'GET'
	});
}

export const getAllOfertas = () => {
	return request({
			url: API_BASE_URL + `/oferta/all`,
			method: 'GET'
	});
}

export const getOferta = (id) => {
	return request({
			url: API_BASE_URL + `/oferta/${id}`,
			method: 'GET'
	});
}

export const getUserFromOferta = (id) => {
	return request({
			url: API_BASE_URL + `/oferta/${id}/user`,
			method: 'GET'
	});
}

export const getRecommendationsByOferta = (id) => {
	return request({
			url: API_BASE_URL + `/oferta/${id}/recommendations`,
			method: 'GET'
	});
}


export const getOfertasFromUser = (id_user) => {
	return request({
			url: API_BASE_URL + `/user/${id_user}/oferta`,
			method: 'GET'
	});
}

export const getUser = (id) => {
	return request({
			url: API_BASE_URL + `/user/${id}`,
			method: 'GET'
	});
}

export const getUsersByRole = (role) => {
	return request({
			url: API_BASE_URL + `/user/${role}/all`,
			method: 'GET'
	});
}

export const addCurso = (id, curso) => {
	//console.log(JSON.stringify(curso))
	return request({
		url: API_BASE_URL + `/user/${id}/curso`,
		method: 'POST',
		body: JSON.stringify(curso)
	});
}

export const addTitulo = (id, titulo) => {
	//console.log(JSON.stringify(curso))
	return request({
		url: API_BASE_URL + `/user/${id}/titulo`,
		method: 'POST',
		body: JSON.stringify(titulo)
	});
}

export const getCursos = (userId) => {
	//console.log(JSON.stringify(curso))
	return request({
		url: API_BASE_URL + `/user/${userId}/curso`,
		method: 'GET'
	});
}

export const getDatosPostulante = (userId) => {
	return request({
		url: API_BASE_URL + `/user/${userId}`,
		method: 'GET'
	});
}

export const getDatosEmpresa = (userId) => {
	return request({
		url: API_BASE_URL + `/user/${userId}/perfilEmpresa`,
		method: 'GET'
	});
}

/*
export const addExperienciaExigida = (id, experienciaExigida) => {
	//console.log(JSON.stringify(curso))
	return request({
			url: API_BASE_URL + `/user/${id}/titulo`,
			method: 'POST',
			body: JSON.stringify(titulo)
	});
}*/

