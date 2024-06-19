const allCashbox = [
  [12, 4500],
  [7, 3210],
  [4, 650],
  [3, 1250],
  [9, 7830],
  [1, 990],
  [6, 13900],
  [1, 370]
];

const getAveragePriceGoods = arr => {
  let countOfGoods = arr.reduce((sum, b) => sum + b[0], 0);
  let totalPrice = arr.reduce((sum, b) => sum + b[1], 0);

  return totalPrice / countOfGoods
}

console.log(getAveragePriceGoods(allCashbox));