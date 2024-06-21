const getRandomArray = (arrLength) => {
  let arr = (new Array(arrLength)).fill(1);

  arr = arr.map(() => Math.floor(Math.random() * (1 - 100) + 100));

  return arr;
}

console.log(getRandomArray(12));