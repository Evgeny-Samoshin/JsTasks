(() => {
  const FIGURES_RU = ['камень', 'ножницы', 'бумага'];
  const FIGURES_EN = ['rock', 'scissors', 'paper'];

  const getRandomIntInclusive = (min, max) =>
    Math.floor(Math.random() * (max - min + 1) + min);

  const game = (lang) => {
    const score = {
      computer: 0,
      player: 0,
    };

    const figures = lang === 'EN' || lang === 'ENG' ?
      FIGURES_EN : FIGURES_RU;

    const getFigure = (lang) => {
      const figure = lang === 'EN' || lang === 'ENG' ?
        prompt('rock, scissors, paper?') :
        prompt('камень, ножницы, бумага?');
      console.log(figure);
      return figure ? figure.toLowerCase() : null;
    };

    const checkWinner = (movePL, movePC) => {
      if (movePL === null) {
        return;
      };

      const indexPCmove = movePC;
      const playerWord = figures.find(() => figures[movePC].startsWith(movePL));
      const indexPLmove = figures.indexOf(playerWord);

      console.log(figures[movePC], figures[indexPLmove]);

      if (indexPCmove === indexPLmove) {
        return getFigure(lang);
      };
      if (indexPCmove === 0 && indexPLmove === 2 ||
          indexPCmove === 1 && indexPLmove === 0 ||
          indexPCmove === 2 && indexPLmove === 1) {
        return true;
      };
      if (indexPCmove === 0 && indexPLmove === 1 ||
          indexPCmove === 1 && indexPLmove === 2 ||
          indexPCmove === 2 && indexPLmove === 0) {
        return false;
      };
    };

    const setScore = (check) => {
      console.log(score);
      check ? score.player += 1 : score.computer += 1;
    };

    return function start() {
      const moveComputer = getRandomIntInclusive(0, 2);
      const movePlayer = getFigure(lang);

      const showMessage = (check) => {
        const FRASES_RU = {
          score: `Счет \n 
                  Компьютер: ${score.computer} \n 
                  Игрок: ${score.player}`,
          win: `Вы выиграли! \n 
                  Счет \n 
                  Компьютер: ${score.computer} \n 
                  Игрок: ${score.player}`,
          loose: `Вы проиграли! \n 
                    Счет \n 
                    Компьютер: ${score.computer} \n 
                    Игрок: ${score.player}`,
          continue: 'Желаете продолжить?',
        };
        const FRASES_EN = {
          score: `Score \n 
                  Computer: ${score.computer} \n 
                  Player: ${score.player}`,
          win: `You win! \n 
                  Score \n 
                  Computer: ${score.computer} \n 
                  Player: ${score.player}`,
          loose: `You loose! \n 
                    Score \n 
                    Computer: ${score.computer} \n 
                    Player: ${score.player}`,
          continue: 'Do you want to continue?',
        };

        const phrases = lang === 'EN' || lang === 'ENG' ?
        FRASES_EN : FRASES_RU;

        if (check) {
          alert(phrases.win);
        } else {
          alert(phrases.loose);
        }
        confirm(phrases.continue) ? start() : alert(phrases.score);
      };

      const letTurn = (check) => {
        setScore(check);
        showMessage(check);
      };

      letTurn(checkWinner(movePlayer, moveComputer));
    };
  };
  window.rsp = game;
})();
