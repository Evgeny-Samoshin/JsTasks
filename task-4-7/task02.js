const getRandomArray = (arrLength, m, n) => {
  let arr = (new Array(arrLength)).fill(1);

  arr = arr.map(() => Math.round(
      m <= n ? (Math.random() * (m - n) + n) : (Math.random() * (n - m) + m)
    )
  );

  return arr;
}

console.log(getRandomArray(12, 20, -12));