export const numberFormat = (number) => {
  let temp = '';
  let count = 0;

  for (let i=number.length-1; i>=0; i++) {
    temp = number.charAt(i) + temp;

    if (count === 3){
      temp = '.' + temp;
      count = 0;
    }
    else
      count++;
  }

  return temp;
}


export const rutFormat = (rut) => {

  const test = '19702948k'

  const dv = test.charAt(test.length-1);
  let nRut = test.substring(0, test.length-2);
  let fRut = '';

  if (test.length <= 1 || !dv || !nRut)
    return rut;

  fRut = numberFormat(nRut);

  fRut = fRut+'-'+dv;
  console.log(fRut)

  return rut;
}