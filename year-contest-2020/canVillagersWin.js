/**
 * @param {string[]} players
 * @param {number[]} credibility
 * @return {boolean}
 */
var canVillagersWin = function(players, credibility) {
  let vCounter = 8;
  let wCounter = 4;
  let isInDay = true;
  let isFirst = true;
  let shootW = [false, -1];
  let isBearAlive = true;

  const isVWin = wCounter => wCounter === 0;
  const isWWin = (vCounter, wCounter) => wCounter >= vCounter;
  const maxCV = () => {
    let result = 0;

    for (let [index, item] of players.entries()) {
      if (
        item !== "ww" &&
        item !== null &&
        credibility[index] > credibility[result]
      ) {
        result = index;
      }
    }

    return result;
  };

  const minC = isHunterShoot => {
    let result = 0;

    if (isHunterShoot && shootW[0]) {
      return shootW[1];
    }

    for (let [index, item] of players.entries()) {
      if (item !== null && credibility[index] < credibility[result]) {
        result = index;
      }
    }

    return result;
  };

  const expel = index => {
    players[index] === "ww" ? wCounter-- : vCounter--;
    players[index] = null;
  };

  const isHunterDied = index => {
    if (players[index] === "hunter") {
      credibility[index] = 99;
      expel(minC(true));
    }
  };

  while (true) {
    isInDay = !isInDay;

    if (!isInDay) {
      if (!isFirst && isBearAlive) {
        let bearIndex = players.findIndex(player => player === "bear");

        if (bearIndex >= 0 && !isFirst) {
          expel(bearIndex);
        } else {
          let killIndex = maxCV();

          isHunterDied(killIndex);
          expel(killIndex);
        }
      } else {
        let killIndex = maxCV();

        isHunterDied(killIndex);
        expel(killIndex);
      }

      if (isWWin(vCounter, wCounter)) return false;
    } else {
      if (isFirst) {
        let bearIndex = players.findIndex(player => player === "bear");
        isFirst = false;

        if (bearIndex >= 0) {
          credibility[bearIndex] = 99;
          isBearAlive = true;

          let left = (bearIndex - 1) % 12;
          let right = (bearIndex + 1) % 12;

          while (true) {
            if (players[left] === null) {
              left = (left - 1) % 12;
              continue;
            }

            break;
          }

          while (true) {
            if (players[right] === null) {
              right = (right + 1) % 12;
              continue;
            }

            break;
          }

          if (players[left] === "ww" || players[right] === "ww") {
            credibility[left] =
              credibility[left] === 1 ? 1 : Math.floor(credibility[left] / 2);
            credibility[right] =
              credibility[right] === 1 ? 1 : Math.floor(credibility[right] / 2);

            if (players[left] === "hunter" || players[right] === "hunter") {
              shootW = [true, players[left] === "ww" ? left : right];
            }
          } else {
            credibility[left] = 99;
            credibility[right] = 99;
          }
        } else {
          isBearAlive = false;
        }
      }

      let expelIndex = minC();

      if (players[expelIndex] === "idiot") {
        credibility[expelIndex] = 99;
        players[expelIndex] = "vil";
      } else if (players[expelIndex] === "hunter") {
        isHunterDied(expelIndex);
        expel(expelIndex);
      } else {
        expel(expelIndex);
      }

      if (isVWin(wCounter)) return true;
    }
  }
};

const players = [
  "bear",
  "vil",
  "vil",
  "ww",
  "vil",
  "vil",
  "idiot",
  "ww",
  "hunter",
  "ww",
  "ww",
  "vil"
];
// const players = [
//   "vil",
//   "vil",
//   "vil",
//   "ww",
//   "vil",
//   "ww",
//   "ww",
//   "vil",
//   "ww",
//   "bear",
//   "hunter",
//   "idiot"
// ];

// const players = [
//   "vil",
//   "ww",
//   "bear",
//   "hunter",
//   "ww",
//   "idiot",
//   "vil",
//   "vil",
//   "ww",
//   "vil",
//   "ww",
//   "vil"
// ];
const credibility = [9, 55, 62, 74, 43, 70, 13, 23, 15, 78, 61, 66];
// const credibility = [81, 71, 88, 31, 34, 40, 70, 94, 73, 79, 98, 48];
// const credibility = [45, 67, 32, 25, 1, 27, 99, 85, 3, 54, 3, 25];

console.info(canVillagersWin(players, credibility));
