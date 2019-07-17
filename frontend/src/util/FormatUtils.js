export const numberFormat = (number) => {
  let temp = '';
  let count = 0;

  for (let i=number.length-1; i>=0; i--) {
    temp = number.charAt(i) + temp;

    if (count === 2){
      temp = '.' + temp;
      count = 0;
    }
    else
      count++;
  }

  return temp;
}

export const rutFormat = (rut) => {

  const dv = rut.charAt(rut.length-1);
  let nRut = rut.substring(0, rut.length-1);

  if (rut.length <= 1 || !dv || !nRut)
    return rut;

  const fRut = numberFormat(nRut);

  return fRut+'-'+dv;
}