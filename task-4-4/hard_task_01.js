const getLaggestCommonDivisor = (a, b) => {
  if (a === b) {
    return a;
  }
  return a > b ? a % b : b % a;
}

console.log(getLaggestCommonDivisor(3, 10));