
let numeroUm = 1;
let stringUm = '1';
let numeroTrinta = 30;
let stringTrinta = '30';
let numeroDez = 10;
let stringDez = '10';

if (numeroUm === Number(stringUm)) {
  console.log('As variáveis numeroUm e stringUm têm o mesmo valor, mas tipos diferentes');
} else {
  console.log('As variáveis numeroUm e stringUm não têm o mesmo valor');
}

if (numeroTrinta === Number(stringTrinta)) {
  console.log('As variáveis numeroTrinta e stringTrinta têm o mesmo valor e mesmo tipo');
} else {
  console.log('As variáveis numeroTrinta e stringTrinta não têm o mesmo tipo');
}

if (numeroDez === Number(stringDez)) {
  console.log('As variáveis numeroDez e stringDez têm o mesmo valor, mas tipos diferentes');
} else {
  console.log('As variáveis numeroDez e stringDez não têm o mesmo valor');
}

