import { rutIsValid } from './ValidationUtils'

export const rutFormat = (rut) => {

	console.log(rut)

	const dv = rut.charAt(rut.length-1);
	let cRut = rut.substring(0, rut.length-2);
	let fRut = '';

	if (rut.length <= 1 || dv === null || cRut === null)
		return rut;

	while (cRut.length > 3) {
		fRut = '.' + cRut.substring(cRut.length-3) + fRut;
		cRut = cRut.substring(0, cRut.length-3)
	}

	return cRut+fRut+'-'+dv;
}