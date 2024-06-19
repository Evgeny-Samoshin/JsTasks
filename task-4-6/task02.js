const allCashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];

const getAverageValue = (array) => {
 return  Math.floor(array.reduce((a, b) => a + b) / array.length)
}

console.log(getAverageValue(allCashbox));