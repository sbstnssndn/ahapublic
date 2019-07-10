import { API_BASE_URL, ACCESS_TOKEN } from '../constants';
//import axios from 'axios';

const request = (options) => {
	const headers = new Headers({
			'Content-Type': 'application/json',
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

	console.log("Estoy en APIUtils/request(), response:");

	let ok = null;
	return fetch(options.url, options)
		.then(response => {
			ok = response.ok;
			return response.json();
		})
		.then(json => {
			if (!ok) {
				console.log(json)
				return Promise.reject(json);
			}
			return json;
		});
}

//const axiosRequest = (config) => {
	// {url: REQUIRED, method:, data:}
	// headers: {'X-Requested-With': 'XMLHttpRequest'}
	/*
	*	config = {
			url: API_BASE_URL + '/auth/signin',
			method: 'post',
			data: {
				email: 'cuenta@mail.com',
				password: '123456'
			},
			headers: {
				'Content-Type': 'application/json',
				'Authorization': 'Bearer ' + localStorage.getItem(ACCESS_TOKEN)
			}
		}
	*/
	// `withCredentials` indicates whether or not cross-site Access-Control requests
  // should be made using credentials
	//withCredentials: false, // default
	/*let headers = {
		'Content-Type': 'application/json',
	}

	if(localStorage.getItem(ACCESS_TOKEN)) {
		headers = {
			'Content-Type': 'application/json',
			'Authorization': 'Bearer ' + localStorage.getItem(ACCESS_TOKEN)
		}
	}

	config = Object.assign({}, { headers: headers }, config)

	return axios(config)
		.then(response => {
			//console.log(response);
		})
		.catch(error => {
			console.log(error);
		});
}*/

// loginRequest = { email: 'asdf', password: 'asdf' }
export const login = (loginRequest) => {
	return request({
			url: API_BASE_URL + "/auth/signin",
			method: 'POST',
			//data: loginRequest
			body: JSON.stringify(loginRequest)
	});
}

export const getCurrentUser = () => {
	console.log("Estoy en APIUtils/getCurrentUser()")
	if(!localStorage.getItem(ACCESS_TOKEN)) {
		console.log("getCurrentUser(): no está setteado el token")
		return Promise.reject("No access token set.");
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

/* */
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