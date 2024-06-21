const getRandom = (m, n) => {
  return Math.round(m <= n ? (Math.random() * (m - n) + n) : (Math.random() * (n - m) + m));
};

const getEvenRandom = (m, n) => {
  let num = getRandom(m, n);

  return num % 2 === 0 ? num : getEvenRandom(m, n);
}

const getOddRandom = (m, n) => {
  let num = getRandom(m, n);

  return num % 2 !== 0 ? num : getOddRandom(m, n);
}

const getRandomArray = (arrLength, m, n, parity) => {
  let arr = (new Array(arrLength)).fill(1);

  arr = arr.map(() => {
    if (parity === 'even') {
      return getEvenRandom(m, n)
    };

    if (parity === 'odd') {
      return getOddRandom(m, n)
    };

    return getRandom(m, n)
  });

  return arr;
}

console.log(getRandomArray(12, 20, -12, 'even'));