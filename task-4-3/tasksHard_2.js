const income = +prompt('Введите ваш доход');

const incomeThresholdLow = 15000;
const incomeThresholdHigh = 50000;


const lowTax = 0.13;
const midTax = 0.2;
const highTax = 0.3;

let taxSum;

if (income < incomeThresholdLow) {
  taxSum = Math.round((income * lowTax) * 100) / 100;

  console.log(`Доход: ${income}$. Сумма налога составляет ${taxSum}$`);
}

if (income >= incomeThresholdLow && income <= incomeThresholdHigh) {
  taxSum = Math.round(((incomeThresholdLow * lowTax) + ((income - incomeThresholdLow) * midTax)) * 100) / 100;

  console.log(`Доход: ${income}$. Сумма налога составляет ${taxSum}$`);
}

if (income > incomeThresholdHigh) {
  taxSum = Math.round(((incomeThresholdLow * lowTax) + ((incomeThresholdHigh - incomeThresholdLow) * midTax) + ((income - incomeThresholdHigh) * highTax)) * 100) / 100;

  console.log(`Доход: ${income}$. Сумма налога составляет ${taxSum}$`);
}