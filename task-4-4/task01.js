const convertDollarToRuble = q => q * 73;

const convertDollarToEuro = q => q / 1.2;

const convertEuroToRuble = q => q * (73 * 1.2);

console.log(convertEuroToRuble(1));