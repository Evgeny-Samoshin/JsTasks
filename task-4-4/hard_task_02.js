// К сожалению додумался не сам. 
// Решение взял отсюда: https://www.techiedelight.com/find-minimum-number-without-using-conditional-statement-ternary-operator/

const getMinNumber = (a, b) => {
  return (a > b) * b + (a < b) * a
}

console.log(getMinNumber(3, 10));