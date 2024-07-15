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

    return function start() {
      const moveComputer = getRandomIntInclusive(0, 2);
      const movePlayer = getFigure(lang);

      const checkWinner = (movePL, movePC) => {
        const indexPCmove = movePC;
        const playerWord = figures.find(item => item.startsWith(movePL));
        const indexPLmove = figures.indexOf(playerWord);
        console.log(playerWord, figures[movePC]);

        if (movePL === null) {
          return null;
        };

        if (indexPCmove === indexPLmove || indexPLmove === -1) {
          return start();
        };

        if (indexPCmove === 0 && indexPLmove === 2 ||
          indexPCmove === 1 && indexPLmove === 0 ||
          indexPCmove === 2 && indexPLmove === 1) {
          score.player += 1;
          return 1;
        };

        if (indexPCmove === 0 && indexPLmove === 1 ||
          indexPCmove === 1 && indexPLmove === 2 ||
          indexPCmove === 2 && indexPLmove === 0) {
          score.computer += 1;
          return 0;
        };
      };

      return checkWinner(movePlayer, moveComputer);
    };
  };
  window.rsp = game;
})();
