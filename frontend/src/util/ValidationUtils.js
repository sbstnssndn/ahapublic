export const genericIsValid = (text) => {
  if (text.length > 255)
    return false;

  return true;
}

export const emailIsValid = (email) => {
  if (email.length > 255)
    return false;

  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
}

export const passwordLengthIsValid = (pass) => {
  if (pass.length >= 6 && pass.length <= 30)
    return true;

  return false;
}

export const rutIsValid = (run) => {
  if (run === null)
    return false;

  if (run.length > 13)
    return false;

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
  if (phone === null)
    return false;

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

export const nameIsValid = (name) => {
  if (name === null)
    return false;

  if (name.length > 255)
    return false

  return /^( *[a-zA-ZÀ-ÿ\u00f1\u00d1]+ *)+$/.test(name);
}

export const moneyIsValid = (money) => {
  if (money === null)
    return false;

  if (money.length > 255)
    return false

  const len = money.length;
  let count = 0;
  let temp = '';

  for (let i=len-1; i>=0; i--){
    if (count === 3) {
      if (money.charAt(i) !== '.')
        temp = temp+money.charAt(i);

      count = 0;
    }

    else {
      temp = temp+money.charAt(i);
      count++;
    }
  }

  return /^[0-9]*$/.test(temp)
}

export const egresoIsValid = (year) => {
  if (year === null)
    return false;

  if (year.length > 4)
    return false;

  if (!/^[0-9]*$/.test(year))
    return false;

  const egreso = new Date(year+'/01/01');
  console.log(egreso)

  if (egreso > new Date() || egreso < new Date('1950/01/01'))
    return false;

  return true;
}

export const fillValidArray = (missingArray, id, arg) => {
  let temp = missingArray;

  if (temp == null)
    return missingArray;

  if (arg === 'push') {
    if (!temp.includes(id)){
      temp.push(id);
      return temp;
    }
  }

  if (arg === 'pop') {
    for(let i=0; i<temp.length; i++) {
      if (temp[i] === id) {
        temp.splice(i, 1);
        return temp;
      }
    }
  }

  return missingArray;
}

export const fieldFormValidation = (missingArray, element, singleField) => {

  let subtext = '';
  let missing = missingArray;

  switch(element){
    case('firstName'):
    case('lastName'):
    case('personaQueEntrevista'):
      if (singleField === '' || nameIsValid(singleField)) {
        subtext = ''
        missing = fillValidArray(missing, element, 'pop')
      }
      else {
        subtext = 'No se permiten números ni caracteres especiales (/, #, $, etc)'
        missing = fillValidArray(missing, element, 'push')
      }
      break;

    case('rut'):
      if (singleField === '' || rutIsValid(singleField)) {
        subtext = ''
        missing = fillValidArray(missing, element, 'pop')
      }
      else {
        subtext = 'Rut incorrecto'
        missing = fillValidArray(missing, element, 'push')
      }
      break;

    case('correo2'):
    case('email'):
      if (singleField === '' || emailIsValid(singleField)) {
        subtext = ''
        missing = fillValidArray(missing, element, 'pop')
      }
      else {
        subtext = 'Correo electrónico incorrecto'
        missing = fillValidArray(missing, element, 'push')
      }
      break;
    
    case('telefono1'):
    case('telefono2'):
    case('telefono'):
      if (singleField === '' || phoneIsValid(singleField)) {
        subtext = ''
        missing = fillValidArray(missing, element, 'pop')
      }
      else {
        subtext = 'El teléfono es incorrecto'
        missing = fillValidArray(missing, element, 'push')
      }
      break;

    case('password'):
      if (singleField === '' || passwordLengthIsValid(singleField)) {
        subtext = ''
        missing = fillValidArray(missing, element, 'pop')
      }
      else {
        subtext = 'La contraseña debe ser entre 6 y 30 caracteres'
        missing = fillValidArray(missing, element, 'push')
      }
      break;

    case('expectativaSueldo'):
      if (singleField === '' || moneyIsValid(singleField)) {
        subtext = ''
        missing = fillValidArray(missing, element, 'pop')
      }
      else {
        subtext = 'El monto ingresado es incorrecto'
        missing = fillValidArray(missing, element, 'push')
      }
      break;

    case('egreso'):
      if (singleField === '' || egresoIsValid(singleField)) {
        subtext = ''
        missing = fillValidArray(missing, element, 'pop')
      }
      else {
        subtext = 'Año incorrecto'
        missing = fillValidArray(missing, element, 'push')
      }
      break;

    default:
      if (singleField === '' || genericIsValid(singleField)) {
        subtext = ''
        missing = fillValidArray(missing, element, 'pop')
      }
      else {
        subtext = 'El valor ingresado supera la cantidad máxima permitida'
        missing = fillValidArray(missing, element, 'push')
      }
  }
  
  return {missing, subtext}
}