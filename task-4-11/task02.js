const generateArray = (arr) => {
  const randomInt = Math.round(Math.random() * (10 - 1) + 1);

  arr.push(randomInt);

  if (arr.reduce((sum, item) => sum + item) >= 50) {
    return arr;
  };

  return generateArray(arr);
};

console.log(generateArray([]));
