const getArrayLength = (n, m) => {
  if ((n < 0 && m < 0) || (n > 0 && m > 0)) {
    return Math.abs(n - m);
  };

  if (n < 0 || m < 0) {
    return Math.abs(n) + Math.abs(m)
  };
};

const generateArray = (n, m) => {
  const arrayLength = getArrayLength(n, m);
  const arr = [];

  let i = 0;

  if (n < m) {
    while (i <= arrayLength) {
      i++;
      arr.push(n);
      n += 1;
    };
  };

  if (n > m) {
    while (i <= arrayLength) {
      i++;
      arr.push(m);
      m += 1;
    }
  };

  if (n === m) {
    arr.push(n);
  };

  return arr;
};

const getRandomInt = (n, m) => {
  return Math.round(n <= m ? (Math.random() * (n - m) + m) : (Math.random() * (m - n) + n));
};

const getNumberOfAttempts = (arr) => {
  return arr.join('').length * 0.3;
};

const checkAttempt = (userNum, pcNum, arr) => {

  if (userNum === false) {
    alert('Испытание отменено.');

    return;
  };

  userNum = +userNum;

  if (Number.isNaN(userNum)) {
    alert('Введи число!');

    game();
  };

  if (userNum < pcNum) {
    alert('Меньше!');
    console.log(userNum, pcNum);

    arr.push(userNum);
    game();
  };

  if (userNum > pcNum) {
    alert('Больше!');
    console.log(userNum, pcNum);

    arr.push(userNum);
    game();
  };

  if(arr.includes(userNum)) {
    alert('Это число вы уже вводили.');

    game();
  }

  if (+userNum === pcNum) {
    console.log(userNum, pcNum);

    alert('Испытание пройдено! Больше огня под ногами твоих врагов, испытуемый!');
  };
}

const game = () => {
  const firstNum = +prompt('Введи первое число, испытуемый:');
  const secondNum = +prompt('Введи второе число, испытуемый:');
  const failedAttempts = [];
  let counter = 0; 

  const rangeArr = generateArray(firstNum, secondNum);

  const numberOfAttempts = getNumberOfAttempts(rangeArr);

  const randomInt = getRandomInt(firstNum, secondNum);

  const usersInt = prompt('Угадай число в заданном диапазоне, испытуемый:');
  
  counter++;
  
  checkAttempt(usersInt, randomInt, failedAttempts);

  if (counter === numberOfAttempts) {
    return;
  }
}

game();