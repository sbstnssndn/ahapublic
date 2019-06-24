export const emailIsValid = (email) => {
  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
}

export const passwordLengthIsValid = (pass) => {
	if (pass.length < 6 && pass.length > 30)
		return true;

	return false;
}

export const rutIsValid = (run) => {
	let len = run.length;
	let temp = '';

	if (len < 2){
		return false;
	}

	for (let i=0; i<len; i++){
		if (run.charAt(i) !== ' '
			&& run.charAt(i) !== '.'
			&& run.charAt(i) !== '-'){
				temp = temp + run.charAt(i);
			}
	}

	len = temp.length;
	let rut = temp;

	if (len > 2)
		rut = temp.substring(0, len-1);
	else
		rut = temp.charAt(0);

	let verificador = temp.charAt(len-1);

	if (rut == null || verificador == null){
		return false;
	}

	let sum = 0;
	let mul = 2;

	for (let i=rut.length-1; i>=0; i--){
		sum = sum + rut.charAt(i) * mul;

		if (mul === 7)
			mul = 2;
		else
			mul++;
	}

	const res = sum % 11
	let dvr = '0';

	if (res === 1)
		dvr = 'k';
	else if (res === 0)
		dvr = '0';
	else {
		const dvi = 11-res
		dvr = dvi + '';
	}

	if (dvr !== verificador.toLowerCase()) {
		return false;
	}
	
	return true;
}

export const phoneIsValid = (phone) => {
	const len = phone.length;

	if (len !== 9 && len !== 12) {
		return false;
	}

	if (len === 9) {
		return /^[0-9]*$/.test(phone);
	}

	if (len === 12) {
		const mas = phone.charAt(0)

		if (mas !== '+') {
			return false;
		}

		const num = phone.substring(1, len-1);
		return /^[0-9]*$/.test(num);
	}
}

export const genericIsValid = (text) => {
	if (text.length > 255)
		return false;

	return true;
}