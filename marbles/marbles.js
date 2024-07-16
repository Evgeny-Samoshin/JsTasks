(() => {
  const score = {
    player: 5,
    computer: 5,
  };

  const game = (resultRSP) => {
    const draw = resultRSP;

    const getPlayerNum = () => {
      const num = prompt(`Введте число от 1 до ${score.player}`);
      if (num > score.player || num < 0 || Number.isNaN(+num)) {
        alert('Введите корректное число.');
        return getPlayerNum();
      }
      return num === null ? null : +num;
    };

    const getComputerNum = () => {
      const num = Math.floor(Math.random() * score.computer + 1);
      console.log(`Компьютер загадал ${num}`);
      return num;
    };

    const getPlayerAnswer = () => {
      const answer = confirm('Если число четное нажмите "ОК". Иначе "Отмена"');

      return answer ? 2 : 1;
    };

    const getComputerAnswer = () => {
      const num = Math.floor(Math.random() * 2 + 1);

      if (num === 2) {
        console.log('Компьютер ответил чётное');
      } else {
        console.log('Компьютер ответил нечётное');
      };

      return num;
    };

    const showDraw = (draw) => {
      if (draw) {
        alert('Ходит игрок.');
        return draw;
      }

      alert('Ходит компьютер.');
      return draw;
    };

    let turn = !draw;

    return function start() {
      if (draw === null) {
        alert('Игра завершена.');
        return;
      };

      turn = !turn;

      const startNewGame = () => {
        const accept = confirm('Желаете продолжить?');

        if (accept) {
          score.player = 5;
          score.computer = 5;
          return start();
        };

        alert('Игра завершена.');
        return;
      };

      console.log(
          `Шаров у игрока ${score.player}. Шаров у компютера ${score.computer}`);
      if (score.player <= 0) {
        alert('Вы проиграли!');
        return startNewGame();
      };

      if (score.computer <= 0) {
        alert('Вы выиграли!');
        return startNewGame();
      };

      const setScore = (number, answer, who) => {
        if (who) {
          if (number % 2 === 0 && answer % 2 === 0 ||
            number % 2 !== 0 && answer % 2 !== 0) {
            console.log('Компьютер угадал');
            score.player -= number;
            score.computer += number;
            start();
          } else {
            console.log('Компьютер не угадал');
            score.player += number;
            score.computer -= number;
            start();
          }
        } else {
          if (number % 2 === 0 && answer % 2 === 0 ||
            number % 2 !== 0 && answer % 2 !== 0) {
            console.log('Игрок угадал');
            score.player += number;
            score.computer -= number;
            start();
          } else {
            console.log('Игрок не угадал');
            score.player -= number;
            score.computer += number;
            start();
          }
        };
      };

      if (turn) {
        showDraw(turn);
        const playerNum = getPlayerNum();
        const computerAnswer = getComputerAnswer();

        if (playerNum === null) {
          alert('Игра завершена.');
          return;
        };

        setScore(playerNum, computerAnswer, turn);
      } else {
        showDraw(turn);
        const computerNum = getComputerNum();
        const playerAnswer = getPlayerAnswer();

        setScore(computerNum, playerAnswer, turn);
      };
    };
  };

  window.marbles = game;
})();
