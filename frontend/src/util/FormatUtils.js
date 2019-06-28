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

  //let run = '19.702.948-k';
  let temp = '';

  for (let i=0; i<rut.length; i++){
    if (rut.charAt(i) !== ' '
      && rut.charAt(i) !== '.'
      && rut.charAt(i) !== '-'){
        temp = temp + rut.charAt(i);
      }
  }

  const dv = temp.charAt(temp.length-1);
  let nRut = temp.substring(0, temp.length-2);
  let fRut = '';

  if (temp.length <= 1 || !dv || !nRut)
    return rut;

  fRut = numberFormat(nRut);
  console.log(fRut+'-'+dv);

  return fRut+'-'+dv;
}