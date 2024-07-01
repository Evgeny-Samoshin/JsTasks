const randomInt = Math.round(Math.random() * (100 - 1 + 1) + 1);

const game = () => {
  const usersInt = +prompt('Угадай число, испытуемый:');

  console.log(usersInt);
  if (usersInt === randomInt) {
    console.log(randomInt, usersInt);
    alert('Правильно!');
  };

  if (Number.isNaN(usersInt)) {
    alert('Введи число!');

    game();
  }

  if (usersInt === 0) {
    alert('Испытание отменено.');

    return;
  };

  if (usersInt < randomInt) {
    alert('Меньше!');
    console.log(randomInt, usersInt);
    game();
  };

  if (usersInt > randomInt) {
    alert('Больше!');
    console.log(randomInt, usersInt);
    game();
  };
};

game();
