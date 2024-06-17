const calculate = (sum, quantity, promo) => {
  let currentSum = sum;

  if (quantity > 10) {
    currentSum -= sum * 0.03;
  }

  if (currentSum > 30000) {
    currentSum -= (currentSum - 30000) * 0.15;
  }

  if (promo === "METHED") {
    currentSum -= currentSum * 0.1;
  }

  if (promo === "G3H2Z1" && currentSum > 2000) {
    currentSum = currentSum - 500;
  }

  return currentSum;
}

console.log(calculate(50000, 11, 'qw'));