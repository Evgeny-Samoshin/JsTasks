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

      return figure ? figure.toLowerCase() : null;
    };

    const checkWinner = (movePL, movePC) => {
      const indexPCmove = movePC;
      const playerWord = figures.find(item => item.startsWith(movePL));
      const indexPLmove = figures.indexOf(playerWord);
      console.log(playerWord, figures[movePC]);

      if (movePL === null) {
        return 'close';
      };

      if (indexPCmove === indexPLmove || indexPLmove === -1) {
        return 'draw';
      };

      if (indexPCmove === 0 && indexPLmove === 2 ||
          indexPCmove === 1 && indexPLmove === 0 ||
          indexPCmove === 2 && indexPLmove === 1) {
        score.player += 1;
        return 'win';
      };

      if (indexPCmove === 0 && indexPLmove === 1 ||
          indexPCmove === 1 && indexPLmove === 2 ||
          indexPCmove === 2 && indexPLmove === 0) {
        score.computer += 1;
        return 'loose';
      };
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

        if (check === 'win') {
          alert(phrases.win);
          confirm(phrases.continue) ? start() : showMessage('close');
        };

        if (check === 'loose') {
          alert(phrases.loose);
          confirm(phrases.continue) ? start() : showMessage('close');
        };

        if (check === 'draw') {
          start();
        };

        if (check === 'close') {
          alert(phrases.score);
          return;
        };
      };

      showMessage(checkWinner(movePlayer, moveComputer));
    };
  };
  window.rsp = game;
})();
