const isLeapYear = (year) => {
  return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0) ? true : false;
};

const getArrayLength = (n, m) => {
  if ((n < 0 && m < 0) || (n > 0 && m > 0)) {
    return Math.abs(n - m);
  };

  if (n < 0 || m < 0) {
    return Math.abs(n) + Math.abs(m)
  };
};


const generateYearsArray = (n, m) => {
  const arrayLength = getArrayLength(n, m);
  const arr = [];

  let i = 0;

  if (n < m) {
    while (i <= arrayLength) {
      i++;

      if (n === 0) {
        n += 1;
        continue;
      };

      arr.push(n);
      n += 1;
    };
  };

  if (n > m) {
    while (i <= arrayLength) {
      i++;

      if (m === 0) {
        m += 1;
        continue;
      };

      arr.push(m);
      m += 1;
    }
  };

  if (n === m) {
    arr.push(n);
  };

  return arr;
};

const getLeapYearsArray = (n, m) => {
  const arr = generateYearsArray(n, m);

  return arr.filter(item => isLeapYear(item));
};

console.log(getLeapYearsArray(1904, 1900));