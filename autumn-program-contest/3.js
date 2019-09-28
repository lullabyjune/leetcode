/**
 * @param {string} command
 * @param {number[][]} obstacles
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var robot = function(command, obstacles, x, y) {
  let currentX = 0,
    currentY = 0,
    commandIndex = 0,
    commandL = command.length,
    obstaclesMap = new Map();

  for (let [oX, oY] of obstacles) {
    let arr = obstaclesMap.get(oX) || [];

    arr.push(oY);
    obstaclesMap.set(oX, arr);
  }

  while (true) {
    let dir = command[commandIndex];

    if (dir === "U") {
      currentY += 1;
    } else {
      currentX += 1;
    }

    if (currentX === x && currentY === y) return true;

    let obArr = obstaclesMap.get(currentX);

    if (obArr) {
      for (let [index, oY] of obArr.entries()) {
        if (oY === currentY) return false;

        if (oY > currentY) {
          obstaclesMap.set(currentX, obArr.slice(index));
          break;
        }
      }
    }

    if (currentX > x || currentY > y) return false;

    commandIndex++;

    commandIndex %= commandL;
  }
};
