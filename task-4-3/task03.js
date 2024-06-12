const mathPoints = +prompt('Введите кол-во баллов по математике:');
const russianLangPoints = +prompt('Введите кол-во баллов по русскому языку:');
const infomaticPoints = +prompt('Введите кол-во баллов по информатике:');

const totalPoints = mathPoints + russianLangPoints + infomaticPoints;

const minSucсessPoints = 256;

if (minSucсessPoints <= totalPoints) {
  alert('Поздравляю, вы поступили на бюджет!')
} else {
  alert('К сожалению вы набрали недостаточно баллов.')
}