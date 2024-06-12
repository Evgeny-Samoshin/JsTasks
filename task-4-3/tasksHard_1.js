const income = +prompt('Введите ваш доход');

const incomeThresholdLow = 15000;
const incomeThresholdHigh = 50000;


const lowTax = 0.13;
const midTax = 0.2;
const highTax = 0.3;

if (income < incomeThresholdLow) {
  console.log(`Доход: ${income}$. Подоходный налог ${lowTax * 100}%. Сумма налога составляет ${Math.round((income * lowTax) * 100) / 100}$`);
}

if (income >= incomeThresholdLow && income <= incomeThresholdHigh) {
  console.log(`Доход: ${income}$. Подоходный налог ${midTax * 100}%. Сумма налога составляет ${Math.round((income * midTax) * 100) / 100}$`);
}

if (income > incomeThresholdHigh) {
  console.log(`Доход: ${income}$. Подоходный налог ${highTax * 100}%. Сумма налога составляет ${Math.round((income * highTax) * 100) / 100}$`);
}